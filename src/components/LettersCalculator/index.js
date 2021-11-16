import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    Input: '',
  }

  onChangeInput = event => {
    const {value} = event.target
    this.setState({Input: value})
  }

  render() {
    const {Input} = this.state
    return (
      <div className="container">
        <div className="cal-container">
          <h1 className="heading">Calculate the Letters you enter</h1>

          <label className="para" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            id="phraseText"
            placeholder="Enter the phrase"
            className="data"
            onChange={this.onChangeInput}
            value={Input}
          />
          <div className="output-container">
            <h1 className="letter">No.of letters:{Input.length}</h1>
          </div>
        </div>
        <div className="pic-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="pic"
            className="pic"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
