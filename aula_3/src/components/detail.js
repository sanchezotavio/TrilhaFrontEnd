import React from 'react'

const Detail = (props) => {
  return (
    <div className='play' style={{ borderColor: '#333'}}>
      <div className='overlay'>
        <h1 className='play__title'>{props.show.snippet.title}</h1>
      </div>
      <iframe className='play__movie' src={`https://www.youtube.com/embed/${props.show.id.videoId}`}></iframe>
      <div className='description'>
        {props.show.snippet.description}
      </div>
    </div>
  )
}

export default Detail
