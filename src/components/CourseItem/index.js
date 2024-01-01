import {Link} from 'react-router-dom'
import './index.css'

const CourseItem = props => {
  const {courseData} = props
  const {id, name, logo_url: logoUrl} = courseData
  const path = `/courses/${id}`
  return (
    <li className="course-item">
      <Link to={path}>
        <img src={logoUrl} alt={name} className="logo" />
      </Link>
      <p className="heading">{name}</p>
    </li>
  )
}
export default CourseItem
