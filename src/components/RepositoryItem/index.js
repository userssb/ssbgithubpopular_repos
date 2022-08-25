// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    imageUrl,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoryDetails

  return (
    <li className="repository-item">
      <img src={imageUrl} className="repo-image" alt={name} />
      <h1 className="image-name">{name}</h1>
      <div className="stats-cont">
        <img
          className="icon"
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        />
        <p className="count">{starsCount} stars</p>
      </div>

      <div className="stats-cont">
        <img
          className="icon"
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        />
        <p className="count">{forksCount} forks</p>
      </div>

      <div className="stats-cont">
        <img
          className="icon"
          alt="open issues"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        />
        <p className="count">{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
