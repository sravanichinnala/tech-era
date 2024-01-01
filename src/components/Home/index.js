import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CourseItem from '../CourseItem'
import FailureView from '../FailureView'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    coursesList: [],
    isFailure: false,
  }

  componentDidMount() {
    this.getCourses()
  }

  getCourses = async () => {
    const apiUrl = 'https://apis.ccbp.in/te/courses'

    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const fetchedData = await response.json()
      this.setState({
        coursesList: fetchedData.courses,
        isLoading: false,
      })
    }
  }

  renderCourses = () => {
    const {coursesList} = this.state
    return (
      <div className="travel-packages-container">
        <Header />
        <h1 className="travel-heading">Courses</h1>
        <ul className="travel-packages-list">
          {coursesList.map(course => (
            <CourseItem courseData={course} key={course.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading, isFailure} = this.state
    return (
      <>
        {isFailure ? (
          <FailureView retryButton={this.getCourses} />
        ) : isLoading ? (
          this.renderLoadingView()
        ) : (
          this.renderCourses()
        )}
      </>
    )
  }
}

export default Home
