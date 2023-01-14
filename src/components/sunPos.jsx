import React from 'react'

function sunPos() {
    const sunWidth = document.querySelector('.sun').clientWidth;
    console.log(sunWidth);
  return (
    <div>{sunWidth}</div>
  )
}

export default sunPos