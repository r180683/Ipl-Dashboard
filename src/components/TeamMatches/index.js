// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamList: []}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateddata = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        id: each.id,
        date: each.date,
        venue: each.venue,
        manOfTheMatch: each.man_of_the_match,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }
    this.setState({teamList: updateddata, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamList
    const {match} = this.props
    const {params} = match
    const {id} = params
    let clsName = ''
    switch (id) {
      case 'RCB':
        clsName = 'rcb-bg'
        break
      case 'KKR':
        clsName = 'kkr-bg'
        break
      case 'KXP':
        clsName = 'kxp-bg'
        break
      case 'CSK':
        clsName = 'csk-bg'
        break
      case 'RR':
        clsName = 'rr-bg'
        break
      case 'MI':
        clsName = 'mi-bg'
        break
      case 'SRH':
        clsName = 'srh-bg'
        break
      case 'DC':
        clsName = 'dc-bg'
        break
      default:
        clsName = 'dinesh-bg'
    }
    return (
      <div className={`td-container ${clsName}`}>
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="td-data-container">
            <img
              className="team-banner-image"
              alt="team banner"
              src={teamBannerUrl}
            />
            <h1 className="latest-match-head">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="rm-container">
              {recentMatches.map(each => (
                <MatchCard key={each.id} matchDetails={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
