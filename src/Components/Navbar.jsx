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
    if (!isClicked)
      setIsClicked(prevIsClicked => !prevIsClicked)
  }

  function overlayClicked() {
    setIsClicked(prevIsClicked => !prevIsClicked)
  }

  function refreshPage() {
    window.location.reload(false);
  }

  //Create Button
  let [createClick, setCreateClick] = useState(false)
  function createClicked() {
    setCreateClick(prevCreateClick => !prevCreateClick)
  }

  //ProfileButton
  let [profileClick, setProfileClick] = useState(false)
  function profileClicked() {
    setProfileClick(prevProfileClick => !prevProfileClick)
  }

  //Notifcation Button
  let [notificationClick, setNotificationClick] = useState(false)
  function notificationClicked() {
    setNotificationClick(prevNotificationClick => !prevNotificationClick)
  }

  //Messages Button
  let [messagesClick, setMessagesClick] = useState(false)
  function messagesClicked() {
    setMessagesClick(prevMessagesClick => !prevMessagesClick)
  }

  return (
    <div class="Navbar">
      <div class="nav-container flex">
        <div class="nav-header-container">
          <input type="image" class="nav-logo" src={logo} alt="logo" onClick={refreshPage} />
          <div class="nav-headers flex">
            <button class="nav-home nav-header" onClick={refreshPage}>Home</button>
            <button class="nav-following nav-header">Following</button>
            <div class="create-button-container flex">
              <button class="nav-create nav-header" onClick={createClicked}>Create</button>
              <input type="image" class="header-dropdown" onClick={createClicked} src={arrowdown} alt="arrowdown" />
            </div>
          </div>
        </div>
        <div class="nav-search-container">
          {!isClicked && <img class="searchbar-img" src={search} alt="search-icon" />}
          {isClicked && <img class="cancel-img" src={cancel} alt="cancel-icon" onClick={overlayClicked} />}
          <input placeholder="Search" class="nav-search-bar" onClick={buttonClicked} />
          {isClicked && <div class="search-results"></div>}
        </div>
        <div class="nav-buttons flex">
          <input type="image" class="nav-notification" src={bell} alt="bell" onClick={notificationClicked} />
          <input type="image" class="nav-message" src={message} alt="message" onClick={messagesClicked}/>
          <div class="nav-profile-container">
            <button class="nav-profile">T</button>
          </div>
          <input type="image" class="nav-dropdown-menu" src={arrowdown} alt="arrowdown" onClick={profileClicked} />
        </div>
      </div>

      {isClicked && <div class="overlay" onClick={overlayClicked}></div>}
      {createClick && <div class="invisible-overlay" onClick={createClicked}></div>}
      {createClick &&
        <div class="create-dropdown">
          <button class="dropdown-item">Create Idea Pin</button>
          <button class="dropdown-item">Create Pin</button>
        </div>}

      {profileClick && <div class="invisible-overlay" onClick={profileClicked}></div>}
      {profileClick &&
        <div class="profile-dropdown">
          <p class="dropdown-header">Currently in</p>
          <button class="dropdown-profile-item">
            <div class="flex">
              <div class="dropdown-profile-icon">T</div>
              <div class="dropdown-profile-details">
                <p>Tuvshno</p>
                <p class="thin">personal</p>
                <p class="thin">email@email.com</p>
              </div>
            </div>
          </button>

          <p class="dropdown-header">Your accounts</p>
          <button class="dropdown-profile-item">Add account</button>
          <button class="dropdown-profile-item">Convert to business</button>
          <p class="dropdown-header-options">More options</p>
          <button class="dropdown-profile-item">Settings</button>
          <button class="dropdown-profile-item">Tune your home feed</button>
          <button class="dropdown-profile-item">Install the Windows app</button>
          <button class="dropdown-profile-item">Get help</button>
          <button class="dropdown-profile-item">See terms and privacy</button>
          <button class="dropdown-profile-item">Logout</button>
        </div>}

      {notificationClick && <div class="invisible-overlay" onClick={notificationClicked}></div>}
      {notificationClick &&
        <div class="large-dropdown">
          <h2>Updates</h2>
        </div>}

      {messagesClick && <div class="invisible-overlay" onClick={messagesClicked}></div>}
      {messagesClick &&
        <div class="large-dropdown">
          <h2>Inbox</h2>
        </div>}
    </div>
  )
}

export default Navbar