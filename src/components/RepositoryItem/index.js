// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {each} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = each
  return (
    <li className="repo-item-li-con">
      <img className="avatar-url" src={avatarUrl} alt={name} />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-item-icons-main-con">
        <div className="repo-item-icon-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="repo-item-icon"
          />
          <p className="repo-item-count">{starsCount}</p>
        </div>
        <div className="repo-item-icon-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="repo-item-icon"
          />
          <p className="repo-item-count">{issuesCount}</p>
        </div>
        <div className="repo-item-icon-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="repo-item-icon"
          />
          <p className="repo-item-count">{forksCount}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
