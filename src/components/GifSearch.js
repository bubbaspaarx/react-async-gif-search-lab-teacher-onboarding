import React, {Component} from 'react'



export default class GifSearch extends Component {
  state = {
    searchTerm: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.searchTerm)
  }


  handleChange = (event) =>
      this.setState({searchTerm: event.target.value})

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}/>
      </form>
    )
  }
}
