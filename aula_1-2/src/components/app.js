import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import editText from '../../util/util'

class App extends Component {
  render () {
    return (
      <section className='main'>
        <Title text={editText.upperCase('hello world!')} />
        <Paragraph text='Blá blá blá' />
      </section>
    )
  }
}

var Title = React.createClass({
  render: function () {
    return (
      <header className='header'>
        <h1 className='title'>{this.props.text}</h1>
      </header>
    )
  }
})

var Paragraph = React.createClass({
  render: function () {
    return (
      <article className='article'>
        <p className='paragraph'>
          {this.props.text}
        </p>
      </article>
    )
  }
})

export default App
