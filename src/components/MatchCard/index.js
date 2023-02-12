// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails
  const cName = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="rm-data-container">
      <img
        className="rm-compete-logo"
        alt={competingTeam}
        src={competingTeamLogo}
      />
      <p className="rm-compete-team">{competingTeam}</p>
      <p className="rm-result">{result}</p>
      <p className={`rm-status ${cName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
