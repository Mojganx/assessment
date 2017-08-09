import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import Title from './components/Title'
import BatchContainer from './assessment/BatchContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/themes'


const batch = [
  {
    name: "Moj",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVDbo9m_KLTSbWL6J0YFR8CwtigZBTJfeDXZAbXVfOdey5oG2uQ",
    evaluation: "green"
    // green: true,
    // orange: false,
    // red: false
  }, {
    name: "Mehdi",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwb3MgUg0E8cxBWzsAm05HE430TorBaTQerQ67-sKi83ZFot-3",
    evaluation: "yellow"
  }, {
    name: "Marlou",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vsY9DrnJB7zRQTRA_bkUH1FPrDFXrJfB2e-9LeUc9shcyZQZ",
    evaluation: "red"
  }

]


class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

getChildContext(){
  return { muiTheme }
}

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <div className="App-header">
        </div>
          <BatchContainer batch={ batch } />
          // { this.props.children }
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
