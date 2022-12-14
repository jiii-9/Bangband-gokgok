import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Notification from "./Notification";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo.svg";

function Header() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/", { replace: true }); // Home으로 이동하고 뒤로가기는 되지 않음
  };

  const bellClickHandler = () => {
    setIsClicked(isClicked => !isClicked);
  };

  return (
    <>
      <header className="header">
        <div className="inner">
          <div className="header-box">
            <div className="logo">
              <img alt="logo" src={Logo} onClick={goHome} />
            </div>

            <span className="logo__text" onClick={goHome}>
              빵방곡곡
            </span>

            <div className="bell" onClick={bellClickHandler}>
              <FontAwesomeIcon className="bell-icon" icon={faBell} />
            </div>
          </div>
        </div>
        {isClicked ? <Notification isClicked={isClicked} /> : null}
      </header>
    </>
  );
}

export default Header;
