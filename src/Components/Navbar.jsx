import React, { useState } from "react";

import logo from './assets/pinterest-logo.png'
import bell from './assets/bell.png'
import message from './assets/messenger.png'
import arrowdown from './assets/arrowdown.png'
import search from './assets/magnifying-glass.png'
import cancel from './assets/cancel.png'

function Navbar() {

  let [isClicked, setIsClicked] = useState(false)

  function buttonClicked() {
    if(!isClicked)
      setIsClicked(prevIsClicked => !prevIsClicked)
  }

  function overlayClicked() {
    setIsClicked(prevIsClicked => !prevIsClicked)
  }

  return (
    <div>
      <div class="nav-container flex">
        <div class="nav-header-container">
          <input type="image" class="nav-logo" src={logo} alt="logo" />
          <div class="nav-headers flex">
            <button class="nav-home nav-header">Home</button>
            <button class="nav-following nav-header">Following</button>
            <div class="flex">
              <button class="nav-create nav-header">Create</button>
              <input type="image" class="header-dropdown" src={arrowdown} alt="arrowdown" />
            </div>
          </div>
        </div>
        <div class="nav-search-container">
          {!isClicked && <img class="searchbar-img" src={search} alt="search-icon" />}
          {isClicked && <img class="cancel-img" src={cancel} alt="cancel-icon" onClick={overlayClicked}/>}
          <input placeholder="Search" class="nav-search-bar" onClick={buttonClicked} />
          {isClicked && <div class="search-results"></div>}
        </div>
        <div class="nav-buttons flex">
          <input type="image" class="nav-notification" src={bell} alt="bell" />
          <input type="image" class="nav-message" src={message} alt="message" />
          <div class="nav-profile-container">
            <button class="nav-profile">T</button>
          </div>
          <input type="image" class="nav-dropdown-menu" src={arrowdown} alt="arrowdown" />
        </div>
      </div>
      
      {isClicked && <div class="overlay" onClick={overlayClicked}></div>}
    </div>
  )
}

export default Navbar