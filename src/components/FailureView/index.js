import './index.css'

const FailureView = props => {
  ;<div className="failure-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
      alt="failure view"
      className="failure-img"
    />
    <h1 className="failure-heading">Oops! Something Went Wrong</h1>
    <p className="failure-paragraph">
      We cannot seem to find the page you are looking for.
    </p>
    <button
      className="retry-button"
      type="button"
      onClick={props.retryButton()}
    >
      Retry
    </button>
  </div>
}
export default FailureView
