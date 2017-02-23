import React, { Component } from 'react'

import ReactDOM from 'react-dom'

import SearchBar from './search'

import Detail from './detail'

import ShowList from './showList'

import axios from 'axios'

class App extends Component {

  constructor (props) {
    super(props)
    
    this.state = {
      shows: [],
      selectedShow: null,
      error: null
    }
    this.search = this.search.bind(this)
  }

  search (term) {
    
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&type=video&key=AIzaSyAB_tTATR8nJh02oDfHEIyAQTgiLo8P9YQ`).then((response) => {
     console.log(response.data.items)
      this.setState({
        shows: response.data.items,
        selectedShow: response.data.items[0],
        error: null
      })
    }).catch((error) => {
      this.setState({
        error: error.response
      })
    })
  }

  render () {
    if (this.state.error) {
      return (
        <div className='container'>
          <SearchBar onSearch={this.search} />
          <h1 style={{color: 'red'}}>{this.state.error}</h1>
        </div>
      )
    }

    if (!this.state.selectedShow) {
      return (
        <div className='container'>
          <SearchBar onSearch={this.search} />
          <h1 style={{color: 'white'}}>Buscar vídeo...</h1>
        </div>
      )
    }

    return (
      <div className='container'>
        <SearchBar onSearch={this.search} />
        <Detail show={this.state.selectedShow} />
        <ShowList shows={this.state.shows} onShowSelect={(selectedShow) => this.setState({selectedShow})} />
      </div>
    )
  }
  
}

export default App
