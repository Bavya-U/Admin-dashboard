import React from 'react'

function Sidebar() {
   
  return (
    <div id="sidenav-1" className="sidenav" role="navigation">
          <a className="ripple d-flex justify-content-center py-3" href="#!" data-mdb-ripple-color="primary">
            <img id="MDB-logo" src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png" alt="MDB Logo" draggable="false" height="25" />
          </a>
          <ul className="sidenav-menu">
            <li className="sidenav-item">
              <a className="sidenav-link active">
                <i className="fas fa-home fa-fw me-3"></i><span>Home</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-fire fa-fw me-3"></i><span>Trending</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fab fa-youtube-square fa-fw me-3"></i><span>Subscriptions</span>gga
              </a>
            </li>
          </ul>
          <hr />
          <ul className="sidenav-menu">
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-caret-square-right fa-fw me-3"></i><span>Library</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-history fa-fw me-3"></i><span>History</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="far fa-caret-square-right fa-fw me-3"></i><span>Your videos</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-clock fa-fw me-3"></i><span>Watch later</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-thumbs-up fa-fw me-3"></i><span>Liked videos</span>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="sidenav-menu">
            <h6 className="text-muted text-uppercase ps-4">Subscriptions</h6>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle me-3" height="25" alt="" loading="lazy" /><span>The Jazz Hop Cafe</span>
              </a>
            </li>  
          </ul>
          <hr />
        </div>
  )
}

export default Sidebar