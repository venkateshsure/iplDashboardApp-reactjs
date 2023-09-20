// Write your code here

import './index.css'

const LatestMatch = props => {
  const {teamLatest} = props
  const {
    venue,
    umpires,
    manOfTheMatch,
    competingTeam,
    date,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = teamLatest
  // console.log(teamLatest)
  return (
    <div className="head-con">
      <div className="fir-lat-mat-con">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="sec-lat-con">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-image"
        />
      </div>
      <div className="third-lat-con">
        <div className="inner-third-lat-con">
          <h1>First Innings</h1>
          <p>{firstInnings}</p>
        </div>
        <div className="inner-third-lat-con">
          <h1>Second Innings</h1>
          <p>{secondInnings}</p>
        </div>
        <div className="inner-third-lat-con">
          <h1>Man Of Match</h1>
          <p>{manOfTheMatch}</p>
        </div>
        <div className="inner-third-lat-con">
          <h1>Umpires</h1>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
