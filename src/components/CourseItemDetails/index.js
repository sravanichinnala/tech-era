import './index.css'

import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import FailureView from '../FailureView'
import Header from '../Header'

class CourseItemDetails extends Component {
  state = {
    selectedData: {},
    isLoading: true,
    isFailure: false,
    id: '',
  }

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({id: id}, () => this.getSelectedCourseData(id))
  }

  getSelectedCourseData = async id => {
    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(apiUrl)

    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(apiUrl, fetchedData)
      this.setState({
        selectedData: fetchedData.course_details,
        isLoading: false,
      })
    } else {
      this.setState({isFailure: true})
    }
  }

  renderCourses = () => {
    const {image_url: imageUrl, name, description} = this.state.selectedData
    return (
      <div className="selected-data-container">
        <Header />
        <img src={imageUrl} alt={name} className="selected-data-image" />
        <h1 className="heading">{name}</h1>
        <p className="description">{description}</p>
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height="50" width="50" />
    </div>
  )

  render() {
    const {isFailure, isLoading} = this.state
    return (
      <>
        {isFailure ? (
          <FailureView retryButton={this.getSelectedCourseData(id)} />
        ) : isLoading ? (
          this.renderLoadingView()
        ) : (
          this.renderCourses()
        )}
      </>
    )
  }
}

export default withRouter(CourseItemDetails)
