import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  applyAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  applyBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="speed-count-text">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate-btn"
            onClick={this.applyAccelerate}
            type="button"
          >
            Accelerate
          </button>
          <button className="brake-btn" onClick={this.applyBrake} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
