import React, { Component } from 'react';
import '../styles/SearchHistory.css';
import SHElement from './SHElement';


function SearchHistoryList(props) {
  if (!props.sh) {
    return null;
  }

  return (

    <div>
     <SHElement
      airport= "O'Hare International Airport"
      time="10:30AM"
      date="Date"
      location="South Campus"/> 
    <SHElement
      airport= "Midway International Airport"
      time="10:40AM"
      date="Date"
      location="North Campus"/> 
    <SHElement
      airport= "O'Hare International Airport"
      time="10:30AM"
      date="Date"
      location="South Campus"/> 
    
    </div>
);
}

class SearchHistory extends Component {
  constructor(props) {
    super(props);
    this.shHandler = this.shHandler.bind(this);
    this.state = {
      showSearchHistory: false,
    };
  }

  shHandler() {
    this.setState(prevState => ({
      showSearchHistory: !prevState.showSearchHistory
    }));
  }

  render() {
    return (
        <div>
          <button className="btn-sh"onClick={this.shHandler}>Search History</button>
          <SearchHistoryList sh={this.state.showSearchHistory} />
        </div>
    );
  }
}

export default SearchHistory;
