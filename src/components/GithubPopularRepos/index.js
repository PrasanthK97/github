import {Component} from 'react'

import './index.css'

import RepositoryItem from '../RepositoryItem'

import LanguageFilterItem from '../LanguageFilterItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {mainList: [], active: ''}

  apiRequest = async () => {
    const apiData = await fetch(
      'https://apis.ccbp.in/popular-repos?language=ALL',
    )
    const reqData = await apiData.json()
    const reqData2 = reqData.popular_repos
    const formattedData = reqData2.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      id: each.id,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
    }))
    this.setState({mainList: formattedData})
    console.log(formattedData)
  }

  onSelectLanguage = id => {
    const {mainList} = this.state
    const selectedTab = mainList.filter(each => each.id === id)
    this.setState({active: id, mainList: selectedTab})
    console.log('dfnkj')
  }

  render() {
    this.apiRequest()
    const {mainList} = this.state

    return (
      <div>
        {languageFiltersData.map(each => (
          <LanguageFilterItem
            onSelectLanguage={this.onSelectLanguage}
            languageItem={each}
          />
        ))}

        <div className="main-cont">
          {mainList.map(each => (
            <RepositoryItem oneItem={each} />
          ))}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
