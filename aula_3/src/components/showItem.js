import React from 'react';

class ShowItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      error : false
    }
  }

  handleError() {
    this.setState({
      error: true
    })
  }

  render(){
    if(this.state.error){
      return null;
    }
    return (
      <div className="movie" onClick={() => this.props.onShowSelect(this.props.show)}>
        <img className="movie__img" src={this.props.show.snippet.thumbnails.medium.url} alt={this.props.show.snippet.title} onError={() => this.handleError()} />
        <div className="movie__title">
          <h4 className="title">{this.props.show.snippet.title}</h4>           
        </div>
      </div>
    );
  }
}

export default ShowItem;