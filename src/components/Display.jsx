import React from 'react'

const Display = () => {

  const handleScrollTop=()=>{
    window.scrollTo({top:0,left:0,behavior:'smooth'})
  }
  return (
    <div className='display-section wrapper' >
        <h2 className='title'>New</h2>
        <p className='text'>Brillaint</p>
        <span className='description'>A display that's up to 2x brighter in the sun</span>
        <button className='button'>Try me!</button>
        <button className='back-button' onClick={handleScrollTop}>Top </button>
    </div>
  )
}

export default Display