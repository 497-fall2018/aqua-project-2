import React, { Component } from 'react';
import '../styles/SearchHistory.css';

class SearchHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="search-history">
        <button className="btn-sh"/*  onClick={}*/>Search History</button> 
      </div>
    );
  }
}

export default SearchHistory;
