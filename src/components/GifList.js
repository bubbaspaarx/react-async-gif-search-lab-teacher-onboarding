import React from 'react'

export default (props) =>
  props.gifs.map(gif => {
    return (
    <React.Fragment key={gif.id}>
      <img src={gif.images.fixed_height_downsampled.url}/>
    </React.Fragment>
    )
  })
