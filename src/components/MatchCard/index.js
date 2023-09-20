// Write your code here
import './index.css'

const MatchCard = props => {
  const {each} = props
  const {
    competingTeam,
    competingTeamLogo,

    matchStatus,

    result,
  } = each
  const color = matchStatus === 'Lost' ? 'red' : 'green'

  return (
    <li className="match-card-con">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={color}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
