// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {oneItem} = props
  const {avatarUrl, forksCount, id, issuesCount, name, starsCount} = oneItem
  return (
    <div className="course-cont">
      <img src={avatarUrl} />
      <h1>{name}</h1>
      <div className="icons-cont">
        <img
          className="icons"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{starsCount}</p>
      </div>
      <div className="icons-cont">
        <img
          className="icons"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount}</p>
      </div>
      <div className="icons-cont">
        <img
          className="icons"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{issuesCount}</p>
      </div>
    </div>
  )
}

export default RepositoryItem
