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

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class GithubPopularRepos extends Component {
  state = {
    data: [],
    status: apiConstants.initial,
    activeTabId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({status: apiConstants.loading})
    const {activeTabId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`

    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      this.setState({data: updatedData, status: apiConstants.success})
    } else {
      this.setState({status: apiConstants.failure})
    }
  }

  onClickBtns = id => {
    this.setState({activeTabId: id}, this.getData)
  }

  loadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  repoView = () => {
    const {data} = this.state
    return (
      <ul className="repo-item-con">
        {data.map(each => (
          <RepositoryItem each={each} key={each.id} />
        ))}
      </ul>
    )
  }

  failureView = () => (
    <div className="failure-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
    </div>
  )

  render() {
    const {status, activeTabId} = this.state
    let res
    switch (status) {
      case apiConstants.loading:
        res = this.loadingView()
        console.log('loading view')
        break
      case apiConstants.success:
        res = this.repoView()
        console.log('repo view')
        break

      case apiConstants.failure:
        res = this.failureView()
        console.log('failure view')
        break
      default:
        res = null
        break
    }

    return (
      <div className="git-hub-pop-repos-con">
        <h1 className="pop-heading">Popular</h1>
        <ul className="git-hub-pop-ul-con">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              onClickBtns={this.onClickBtns}
              each={each}
              key={each.id}
              isActive={activeTabId === each.id}
            />
          ))}
        </ul>
        {res}
      </div>
    )
  }
}

export default GithubPopularRepos
