import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const url = `http://api.giphy.com/v1/gifs/search?q=`
const apiKey = `&api_key=dc6zaTOxFJmzC&rating=g`

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  handleSubmit = (searchTerm) =>
    fetch(url + searchTerm + apiKey)
      .then(resp => resp.json())
      .then(data => this.setState({gifs: data.data}))

  render() {
    return (
      <React.Fragment>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs}/>
      </React.Fragment>
    )
  }
}
