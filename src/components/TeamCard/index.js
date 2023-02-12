// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card-container">
        <img className="team-card-image" alt={name} src={teamImageUrl} />
        <p className="ipl-team-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
