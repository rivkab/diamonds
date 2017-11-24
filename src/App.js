import React, { Component } from 'react';
import './App.css';
import DataTable from './DataTable/DataTable';
import StatisticsHeader from './StatisticsHeader/StatisticsHeader';
import AddDiamondForm from './AddDiamondForm/AddDiamondForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Diamond Prices</h1>
        </header>
        <StatisticsHeader average={1289.7} count={11243} min={234}/>
        <DataTable/>
        <AddDiamondForm/>
      </div>
    );
  }
}

export default App;
