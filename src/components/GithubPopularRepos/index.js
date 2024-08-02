import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
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
  state = {data: [], isLoading: true, activeTabId: languageFiltersData[0].id}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {activeTabId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    const updatedData = data.popular_repos.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    this.setState({updatedData, isLoading: false})
  }

  render() {
    const {isLoading, updatedData} = this.state

    const res = isLoading ? (
      <div data-testid="loader">
        <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
      </div>
    ) : (
      <ul className="repo-item-con">
        {updatedData.map(each => (
          <RepositoryItem each={each} />
        ))}
      </ul>
    )
    return (
      <div className="git-hub-pop-repos-con">
        <h1 className="pop-heading">Popular</h1>
        <ul className="git-hub-pop-ul-con">
          {languageFiltersData.map(each => (
            <LanguageFilterItem each={each} key={each.id} />
          ))}
        </ul>
        {res}
      </div>
    )
  }
}

export default GithubPopularRepos
