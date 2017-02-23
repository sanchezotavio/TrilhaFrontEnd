import React from 'react'

class Search extends React.Component {

  constructor (props) {
    super(props)
    this.state = { term: ''}
  }

  onSubmit (event) {
    event.preventDefault()
    this.props.onSearch(this.state.term)
  }

  onChange (value) {
    this.setState({term: value})
  }

  render () {
    return (
      <form className='search' onSubmit={this.onSubmit.bind(this)}>
        <input
          className='search__input'
          value={this.state.term}
          type='text'
          placeholder='Buscar por...'
          onChange={event => this.onChange(event.target.value)} />
        <span className='search__group'><button className='search__button' type='submit'> Buscar </button></span>
      </form>
    )
  }
}

export default Search
