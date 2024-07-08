import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  faMinus,
  faPlus,
  faShieldDog,
  faSearch,
  faArrowRightFromBracket,
  faAnglesRight,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Dog_logo from "../../Images/simple-dog.webp";
import { sidebarDataFirst, sidebarDataLast } from "./SideNav";

const Sidebar = ({ children }) => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNavbarToggle = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const handleToggleMenu = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const handleSearchClick = () => {
    if (!isNavbarActive) {
      setIsNavbarActive(true);
    }
  };

  const handleIconSearchClick = () => {
    if (!isNavbarActive) {
      setIsNavbarActive(true);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const isMenuActive = (menu) => activeMenu === menu;
  const filteredSidebarDataFirst = sidebarDataFirst().filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div  className={`navbars row-fluid d-flex col-md-12 sidebar ${
      isNavbarActive ? "active" : ""
    }`}>
      <div className={` row-fluid contnt-box-wrapper  ${
                isNavbarActive ? "open" : ""
              }`}>
          <div className="toggle-bar ms-3 pt-2">
            <FontAwesomeIcon
              className=""
              icon={faShieldDog}
              style={{ height: "40px", color: "#98cb46" }}
            />
            <Link to={"/"}  className="navbar_para text-white ms-2 mt-2 fw-bold">Pets</Link>
          </div>
          <div className="hamburger-menu-wrapper span12">
            <button
              className={`mobile-menu-toggle js-toggle-menu hamburger-menu ${
                isNavbarActive ? "open" : ""
              }`}
              onClick={handleToggleMenu}
            >
              <FontAwesomeIcon
                className=" text-white"
                icon={isNavbarActive ? faXmark : faBars}
                onClick={() => handleMenuClick()}
              />
            </button>
          </div>
        </div>
      <div
        className={`side-navbar sidebar ${
          isNavbarActive ? "active" : ""
        }`}
      >
        <div className="navbar-container">
          <div className="navbar-logo-div">
            <Link
              className="navbar-logo-link fw-bold h2"
              onClick={handleNavbarToggle}
            >
              <FontAwesomeIcon className="" icon={faShieldDog} />
              <p className="navbar_para text-white ms-2">Pets</p>
            </Link>
          </div>
          <div className="scrollbar"></div>

          <input
            type="search"
            name="search"
            placeholder="Search..."
            className="navbar-search text-white border-0 mt-2"
            id="search"
            onClick={handleSearchClick}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            
          />
          <span className="icon-search" id="icon-search" onClick={handleSearchClick}><FontAwesomeIcon icon={faSearch} /></span>
          {/* <i id="icon-search" onClick={handleIconSearchClick}>
            <FontAwesomeIcon icon={faSearch} />
          </i> */}

          <ul className="menu-list p-0">
          {filteredSidebarDataFirst.map((item, index) => (
              <li key={index} className="menu-item">
                <div className="menu-link mt-3">
                  <FontAwesomeIcon
                    className="me-2 logo"
                    onClick={handleIconSearchClick}
                    icon={item.icon}
                  />
                  <span className="menu-link-text ps-1">{item.title}</span>
                  <FontAwesomeIcon
                    className="dowp-auto pe-4"
                    icon={isMenuActive(item.title) ? faMinus : faPlus}
                    onClick={() => handleMenuClick(item.title)}
                  />
                </div>
                <div className="arrow">
                  {isMenuActive(item.title) && item.submenu && (
                    <ul className="submenu mt-4">
                      {item.submenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="pt-2 text-light submenu-hover"
                        >
                          <Link to={subItem.path} className="">
                            <FontAwesomeIcon
                              className="arrow-submenu"
                              style={{
                                color: "#98cb46",
                                fontSize: "14px",
                              }}
                              icon={faAnglesRight}
                            />{" "}
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="container list-icon">
          <ul className="menu-list p-0 margin-menu">
            {sidebarDataLast().map((item, index) => (
              <li key={index} className="menu-item">
                <div className="menu-link mt-3">
                  <FontAwesomeIcon
                    className="me-2 logo"
                    onClick={handleIconSearchClick}
                    icon={item.icon}
                  />
                  <span className="menu-link-text ps-1">{item.title}</span>
                </div>
              </li> 
            ))}
          </ul>
        </div>
        <div className="container">
          <div className="user-container container box-shadow ">
            <div className="user-info">
              <img
                className="rounded-pill dog-logo"
                // src={"https://icon-library.com/images/menu-icon-svg/menu-icon-svg-29.jpg"}
                alt="User Profile"
                width={40}
                height={40}
              />
              <div className="user-details align-item-center">
                <h4 className="user-name m-0">
                  Eleanor Pena<br></br>
                  <span className="user-occupation">Veterinary</span>
                </h4>
              </div>
            </div>
            <Link
              to={"/"}
              className="logout-btn ms-4"
              onClick={handleNavbarToggle}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </Link>
          </div>
        </div>
      </div>
      
      <main
        className="main-sidenav"
      >
        {children}
      </main>
      
        

    </div>
      
      
    
  );
};

export default Sidebar;
