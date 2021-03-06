import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import Title from './components/Title'
import BatchContainer from './assessment/BatchContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/themes'


class App extends PureComponent {
  updateBatch(id, update){
  }

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
            <Title content="Welcome Batch #9" />
          </div>
            <BatchContainer updateBatch={ this.updateBatch.bind(this) } />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
