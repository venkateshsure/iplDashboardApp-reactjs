// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {each} = props
  const {id, name, teamImageUrl} = each
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="card">
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
