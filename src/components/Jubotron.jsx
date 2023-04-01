import React from 'react';
import Iphone from "../assets/images/iphone-14.jpg"
import HoldingIhone from "../assets/images/iphone-hand.png";
const Jubotron = () => {
    const handlemore=()=>
    {
        document.querySelector(".sound-section");
        window.scrollTo({
            top:element.getBoundingClientRect().top,
            left:0,
            behavior:"smooth"
        })
    }
  return (
    <>  
    <div class="jumbotron-section wrapper">
        <h2 className='title'> New</h2>
        <img className='logo' src={Iphone } alt="iPhone 14 Pro"/>
        <p className='text'>Big and Bigger</p>
        <span className='description'>From $41.62/mo for 24 mo. or $999 brefore trade-in</span>
        <ul className='links'> 
            <li>
                <button className='button'>Buy</button>
            </li>
            <li>
                <a className="link" onClick={handlemore}>Learn More</a>
            </li>
        </ul>
        <img className='iphone-img' src={HoldingIhone} alt="iphon-holding"></img>
    </div>
    
    
    </>
  )
}
export default Jubotron;