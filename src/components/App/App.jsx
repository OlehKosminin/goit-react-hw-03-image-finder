import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ApiFetch from 'components/Api/ApiFetch';

export class App extends Component {
  state = {
    searchName: '',
    searchData: null,
  };

  onHandleSubmite = searchName => {
    console.log('searchName: ', searchName);
    this.setState({
      searchName,
    });
    // console.log(this.state.searchName);
  };

  render() {
    const { onHandleSubmite } = this;
    return (
      <>
        <Searchbar onSubmit={onHandleSubmite} />
        <ApiFetch searchName={this.state.searchName} />
      </>
    );
  }
}

export default App;
