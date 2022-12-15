import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEgg  } from "@fortawesome/free-solid-svg-icons";
import '../assets/css/header.css'

export default function Header() {
  const [isClicked, setIsClicked] = useState(false)
  const showMessage = () => {
    setIsClicked(!isClicked)
    alert(`Sorry, it isn't done yet`)
  }
  return(
    <div className="wrapper">
      <div className="logo">
        <h1>C<FontAwesomeIcon icon={faEgg}></FontAwesomeIcon><FontAwesomeIcon icon={faEgg}></FontAwesomeIcon>K!</h1>
      </div>
        <nav>
          <li onClick={showMessage}>Setting</li>
          <li onClick={showMessage}>Login</li>
        </nav>
    </div>
  )
}