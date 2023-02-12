// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplList: [], isLoading: true}

  componentDidMount() {
    this.getIplList()
  }

  getIplList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updatedData)
    this.setState({iplList: updatedData, isLoading: false})
  }

  render() {
    const {iplList, isLoading} = this.state
    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            className="ipl-logo"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="ipl-head">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <ul className="team-cards-container">
            {iplList.map(each => (
              <TeamCard key={each.id} teamDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
