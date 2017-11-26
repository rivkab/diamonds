import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import DataTable from './DataTable/DataTable';
import StatisticsHeader from './StatisticsHeader/StatisticsHeader';
import AddDiamondForm from './AddDiamondForm/AddDiamondForm';

class App extends Component {

  constructor(){
    super();
    this.state = {
      diamondsData: []
    };
  }

  fetchData(){
    console.log("fetching data")
    fetch("http://localhost:5000/api/diamond")
      .then(response => {
        return response.json();}
      ).then(json => {
        this.setState({diamondsData: json});
      }).catch(ex => {
        console.log('parsing failed', ex)
      });
  }


  componentDidMount(){
    this.fetchData();
  }

  getColumnAverage(col){
    let data = this.state.diamondsData;
    let sum = 0;
    for(const row of data){
       sum += row[col];
    }
    return (sum/data.length).toFixed(2);
  }

  getAverageDiscount(avgPrice){
    return (this.getColumnAverage("listPrice")-avgPrice).toFixed(2);
  }

  render() {
    let avgPrice = this.getColumnAverage("price");
    return (
      <div className="App">
        <Header title="Diamond Prices"/>
        <StatisticsHeader 
          avgPrice={avgPrice} 
          count={this.state.diamondsData.length} 
          avgDiscount={this.getAverageDiscount(avgPrice)}/>
        <DataTable data={this.state.diamondsData}/>
        <AddDiamondForm  refresh={this.fetchData.bind(this)}/>
      </div>
    );
  }
}

export default App;
