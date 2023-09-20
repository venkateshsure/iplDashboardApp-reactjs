// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatch: {}, teamLatest: {}, teamCard: [], isLoading: true}

  componentDidMount = () => {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const pascalData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails, recentMatches} = pascalData
    // console.log(pascalData.recentMatches)
    // console.log(latestMatchDetails)

    const pascalOfLat = {
      umpires: latestMatchDetails.umpires,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      result: latestMatchDetails.result,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const pascalOfRecentMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      id: each.id,
      firstInnings: each.first_innings,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      umpires: each.umpires,
      secondInnings: each.second_innings,
      venue: each.venue,
    }))
    // console.log(pascalOfRecentMatches)
    this.setState({
      teamMatch: pascalData,
      teamLatest: pascalOfLat,
      teamCard: pascalOfRecentMatches,
      isLoading: false,
    })
  }

  render() {
    const {teamMatch, teamLatest, teamCard, isLoading} = this.state
    const {teamBannerUrl} = teamMatch
    return (
      <div className="banner-con">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="sec-team-banner">
            <div className="fir-team-banner">
              <img
                src={teamBannerUrl}
                alt="team banner"
                className="banner-image"
              />
            </div>
            <LatestMatch key={teamLatest.id} teamLatest={teamLatest} />
            <div className="match-head-con">
              <ul className="match-card-head-con">
                {teamCard.map(each => (
                  <MatchCard each={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
