// Write your code here

import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplDashboard: [], isLoading: true}

  componentDidMount() {
    this.getIplDetails()
  }

  getIplDetails = async () => {
    // console.log('hii')
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const pascalData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    // console.log(pascalData)
    this.setState({iplDashboard: pascalData, isLoading: false})
  }

  render() {
    const {iplDashboard, isLoading} = this.state

    return (
      <Link to="/">
        <div className="fir-con">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div className="third-con">
              <div className="sec-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="ipl-logo"
                />
                <h1>IPL Dashboard</h1>
              </div>
              <ul className="ul-con">
                {iplDashboard.map(each => (
                  <TeamCard key={each.name} each={each} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </Link>
    )
  }
}

export default Home
