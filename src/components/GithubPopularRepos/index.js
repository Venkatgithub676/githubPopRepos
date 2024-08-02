import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  render() {
    return (
      <div className="git-hub-pop-repos-con">
        <h1 className="pop-heading">Popular</h1>
        <ul className="git-hub-pop-ul-con">
          {languageFiltersData.map(each => (
            <LanguageFilterItem each={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
