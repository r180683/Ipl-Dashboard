// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="lmd-container">
      <div className="lm-td-container">
        <p className="lmd-team-name">{competingTeam}</p>
        <p className="lmd-date">{date}</p>
        <p className="lmd-venue">{venue}</p>
        <p className="lmd-venue">{result}</p>
      </div>
      <img
        className="lmd-compete-team-logo"
        alt={competingTeam}
        src={competingTeamLogo}
      />
      <div className="lmd-result-container">
        <p className="lmd-result-text">First Innings</p>
        <p className="lmd-result-text">{firstInnings}</p>
        <p className="lmd-result-text">Second Innings</p>
        <p className="lmd-result-text">{secondInnings}</p>
        <p className="lmd-result-text">Man Of The Match</p>
        <p className="lmd-result-text">{manOfTheMatch}</p>
        <p className="lmd-result-text">Umpires</p>
        <p className="lmd-result-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
