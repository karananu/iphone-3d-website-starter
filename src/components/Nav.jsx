import React from 'react'
import Logo from "../assets/images/logo.svg"
import Search from "../assets/images/search.svg"
import Store from "../assets/images/Store.svg"

 function Nav() {
  return (
    <>
        <nav className="nav-wrapper">
            <div className="nav-content">
                 <ul className='list-styled'>
                    <li>
                        <img src={Logo} alt="apple"/>
                    </li>
                    <li>
                        <a  class="link-styled">Store</a>
                    </li>
                    <li>
                        <a  class="link-styled">Mac</a>
                    </li>
                    <li>
                        <a  class="link-styled">Ipad</a>
                    </li>
                    <li>
                        <a  class="link-styled">IPhone</a>
                    </li>
                    <li>
                        <a  class="link-styled">watch</a>
                    </li>
                    <li>
                        <a  class="link-styled">Airpods</a>
                    </li>
                    <li>
                        <a  class="link-styled">TV & Home</a>
                    </li>
                    <li>
                        <a  class="link-styled">Entertainment</a>
                    </li>
                    <li>
                        <a  class="link-styled">Accessories</a>
                    </li>
                      <li>
                        <a  class="link-styled">Support</a>
                    </li>
                    <li>
                        <img src={Search} alt="search"></img>
                    </li>
                    <li>
                        <img src={Store} alt="Store"></img>
                    </li>
                </ul>   
            </div>
        </nav>
    </>
  )
}
export default Nav;