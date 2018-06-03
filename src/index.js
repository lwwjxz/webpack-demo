import React from 'react'
import ReactDOM from 'react-dom'
import car from './img/car.jpeg'
import './index.css'

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {reset: 'yes'};
        this.onClick=this.onClick.bind(this);
    }


    onClick() {
        this.setState({
              reset: this.state.reset === 'yes' ? 'no' : 'yes'
            })
      }



render () {
            return (
                  <div><img src={car} alt='车'
                            className={this.state.reset === 'yes' ? 'car' : 'car car--rotate'}
                            onClick={this.onClick}/></div>
                )
              }
}
ReactDOM.render(<App />, document.body)
 // ReactDOM.render(<App />, document.getElementById('root'))