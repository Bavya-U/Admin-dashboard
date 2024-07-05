import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {
  return (
    <div className='d-flex'>
      
        <div className='col-md-3 col-lg-2'>
        <Sidebar/>
        </div>
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow col-md-9 col-lg-10">
          <div className="container-fluid">
            <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" data-mdb-ripple-color="primary" className="btn shadow-0 p-0 me-3" aria-controls="#sidenav-1" aria-haspopup="true">
              <i className="fas fa-bars"></i>
            </button>
            
            <form className="input-group w-auto my-auto d-none d-sm-flex">
              <input autoComplete="off" type="search" className="form-control rounded" placeholder='Search' style={{ minWidth: '125px' }} />
              <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search"></i></span>
            </form>
            <ul className="navbar-nav ms-auto d-flex flex-row">
              <li className="nav-item dropdown">
                <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-plus-circle"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#"><i className="fab fa-youtube"></i></a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#"><i className="fas fa-th"></i></a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#"><i className="fas fa-bell"></i><span className="badge badge-notification bg-danger">11</span></a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#"><i className="fas fa-user-circle"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      
    </div>
  );
}

export default Navbar;
