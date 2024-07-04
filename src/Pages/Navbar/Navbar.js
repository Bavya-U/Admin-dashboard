// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Navbar() {
//   return (
//     <div>
//     <header>
      
//       <div id="sidenav-1" class="sidenav" data-mdb-color="dark" role="navigation" data-mdb-hidden="false"
//         data-mdb-accordion="true">
//         <a class="ripple d-flex justify-content-center py-3" href="#!" data-mdb-ripple-color="primary">
//           <img id="MDB-logo" src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
//             alt="MDB Logo" draggable="false" height="25" />
//         </a>
//         <ul class="sidenav-menu">
//           <li class="sidenav-item">
//             <a class="sidenav-link active">
//               <i class="fas fa-home fa-fw me-3"></i><span>Home</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fas fa-fire fa-fw me-3"></i><span>Trending</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fab fa-youtube-square fa-fw me-3"></i><span>Subscriptions</span>
//             </a>
//           </li>
//         </ul>
//         <hr/>
//         <ul class="sidenav-menu">
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fas fa-caret-square-right fa-fw me-3"></i><span>Library</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fas fa-history fa-fw me-3"></i><span>History</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="far fa-caret-square-right fa-fw me-3"></i><span>Your videos</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fas fa-clock fa-fw me-3"></i><span>Watch later</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fas fa-thumbs-up fa-fw me-3"></i><span>Liked videos</span>
//             </a>
//           </li>
//         </ul>
//         <hr/>
//         <ul class="sidenav-menu">
//           <h6 class="text-muted text-uppercase ps-4">Subscriptions</h6>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" class="rounded-circle me-3" height="25"
//                 alt="" loading="lazy" /><span>The Jazz Hop Cafe</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <img src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg" class="rounded-circle me-3" height="25"
//                 alt="" loading="lazy" /><span>MDB Youth</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <img src="https://mdbootstrap.com/img/Photos/Avatars/img (33).jpg" class="rounded-circle me-3" height="25"
//                 alt="" loading="lazy" /><span>Travels by Bus Around the World</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" class="rounded-circle me-3" height="25"
//                 alt="" loading="lazy" /><span>The Awesome</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <img src="https://mdbootstrap.com/img/Photos/Avatars/img (28).jpg" class="rounded-circle me-3" height="25"
//                 alt="" loading="lazy" /><span>SheriffUSA</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link" data-mdb-toggle="collapse" role="button" aria-expanded="false"
//               aria-controls="collapseExample">
//               <i class="fas fa-chevron-down fa-fw me-3"></i><span>Show 2 more</span>
//             </a>
//           </li>
//         </ul>
//         <hr/>
//         <ul class="sidenav-menu">
//           <h6 class="text-muted text-uppercase ps-4">More from youtube</h6>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fab fa-youtube fa-fw me-3"></i><span>YouTube Premium</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fas fa-film fa-fw me-3"></i><span>Movies</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fas fa-gamepad fa-fw me-3"></i><span>Gaming</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fas fa-broadcast-tower fa-fw me-3"></i><span>Live</span>
//             </a>
//           </li>
//         </ul>
//         <hr/>
//         <ul class="sidenav-menu">
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fas fa-cog fa-fw me-3"></i><span>Settings</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fas fa-flag fa-fw me-3"></i><span>Report history</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fas fa-question-circle fa-fw me-3"></i><span>Help</span>
//             </a>
//           </li>
//           <li class="sidenav-item">
//             <a class="sidenav-link">
//               <i class="fas fa-comment-alt fa-fw me-3"></i><span>Send feedback</span>
//             </a>
//           </li>
//         </ul>
//         <hr/>
//         <div class="ps-4 mb-3">
//           <a href="" class="text-body small me-3">About</a>
//           <a href="" class="text-body small me-3">Press</a>
//           <a href="" class="text-body small me-3">Copyright</a>
//           <a href="" class="text-body small me-3">Contact us</a>
//           <a href="" class="text-body small me-3">Creators</a>
//           <a href="" class="text-body small me-3">Advertise</a>
//           <a href="" class="text-body small me-3">Developers</a>
//         </div>
//         <div class="ps-4 mb-4 pb-2">
//           <a href="" class="text-body small me-3">Terms</a>
//           <a href="" class="text-body small me-3">Privacy</a>
//           <a href="" class="text-body small me-3">Policy & Safety</a>
//           <a href="" class="text-body small me-3">How YouTube works</a>
//           <a href="" class="text-body small me-3">Test new features</a>
//         </div>
//         <p class="small text-muted ps-4">© 2020 MDBootstrap</p>
//       </div>
     
    
     
//       <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        
//         <div class="container-fluid">
          
//           <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" class="btn shadow-0 p-0 me-3 d-block d-xxl-none"
//             aria-controls="#sidenav-1" aria-haspopup="true">
//             <i class="fas fa-bars fa-lg"></i>
//           </button>
   
//           <form class="d-none d-md-flex justify-content-center mx-auto input-group w-auto my-auto">
//             <input autocomplete="off" type="search" class="form-control rounded" placeholder='Search'
//               style={{ minWidth: '225px' }} />
//             <span class="input-group-text border-0"><i class="fas fa-search"></i></span>
//           </form>
    
          
//           <ul class="navbar-nav d-flex align-items-center flex-row">
//             <li class="nav-item">
//               <a class="nav-link me-3 py-1" href="#" data-mdb-toggle="tooltip" title="Create">
//                 <i class="fas fa-video"></i>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link me-3 py-1" href="#" data-mdb-toggle="tooltip" title="YouTube apps">
//                 <i class="fas fa-th"></i>
//               </a>
//             </li>
//             <li class="nav-item me-3">
//               <a class="nav-link py-1" href="#" data-mdb-toggle="tooltip" title="Notifications">
//                 <i class="fas fa-bell"></i>
//               </a>
//             </li>
    
            
//             <li class="nav-item dropdown">
//               <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center py-1" href="#"
//                 id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
//                 <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" class="rounded-circle" height="30"
//                   alt="" loading="lazy" />
//                               </a>
                              
//               <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink"
//                 style={{minWidth: '19rem'}}>
//                 <li>
//                   <div class="px-3 pt-3 d-flex">
//                     <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" class="rounded-circle me-3"
//                       height="40" alt="" loading="lazy" />
//                     <div>
//                       <h6 class="mb-0">Marie Campbell</h6>
//                       <p class="mb-2">mariecampbell@example.com</p>
//                       <a class="mb-0" href="">Manage your Google Account</a>
//                     </div>
//                   </div>
//                   <hr class="mb-2"/>
//                 </li>
//                 <li><a class="dropdown-item" href="#"><i class="fas fa-user-circle fa-fw me-3"></i><span>Your
//                       channel</span></a></li>
//                 <li><a class="dropdown-item" href="#"><i class="fas fa-dollar-sign fa-fw me-3"></i><span>Paid
//                       memberships</span></a></li>
//                 <li><a class="dropdown-item" href="#"><i class="fas fa-play-circle fa-fw me-3"></i><span>YouTube
//                       Studio</span></a></li>
//                 <li><a class="dropdown-item" href="#"><i class="fas fa-users-cog fa-fw me-3"></i><span>Switch
//                       account</span><i class="fas fa-chevron-right float-end mt-1"></i></a></li>
//                 <li><a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt me-3"></i><span>Sign out</span></a>
//                 </li>
//                 <hr class="my-2"/>
//                 <li><a class="dropdown-item" href="#"><i class="fas fa-sun fa-fw me-3"></i><span>Appearance: Device
//                       theme</span><i class="fas fa-chevron-right float-end mt-1"></i></a></li>
//                 <li><a class="dropdown-item" href="#"><i class="fas fa-language fa-fw me-3"></i><span>Language:
//                       English</span><i class="fas fa-chevron-right float-end mt-1"></i></a></li>
//                 <li><a class="dropdown-item" href="#"><i class="fas fa-globe fa-fw me-3"></i><span>Location: United
//                       Kingdom</span><i class="fas fa-chevron-right float-end mt-1"></i></a></li>
//                 <li><a class="dropdown-item" href="#"><i class="fas fa-cog fa-fw me-3"></i><span>Settings</span></a></li>
//                 <li><a class="dropdown-item" href="#"><i class="fas fa-shield-alt fa-fw me-3"></i><span>Your data in
//                       YouTube</span></a></li>
//                 <li><a class="dropdown-item" href="#"><i
//                       class="fas fa-question-circle fa-fw me-3"></i><span>Help</span></a></li>
//                 <li><a class="dropdown-item" href="#"><i class="fas fa-comment-alt fa-fw me-3"></i><span>Send
//                       feedback</span></a></li>
//                 <li><a class="dropdown-item" href="#"><i class="fas fa-keyboard fa-fw me-3"></i><span>Keyboard
//                       shortcuts</span></a></li>
//                 <hr class="my-2"/>
//                 <li><a class="dropdown-item mb-2" href="#"><span>Restricted Mode: Off</span><i
//                       class="fas fa-chevron-right float-end mt-1"></i></a></li>
//               </ul>
//             </li>
//           </ul>
//         </div>
        
//       </nav>
      
//     </header>
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <header>
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
                <i className="fab fa-youtube-square fa-fw me-3"></i><span>Subscriptions</span>
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
            <li className="sidenav-item">
              <a className="sidenav-link">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg" className="rounded-circle me-3" height="25" alt="" loading="lazy" /><span>MDB Youth</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (33).jpg" className="rounded-circle me-3" height="25" alt="" loading="lazy" /><span>Travels by Bus Around the World</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" className="rounded-circle me-3" height="25" alt="" loading="lazy" /><span>The Awesome</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (28).jpg" className="rounded-circle me-3" height="25" alt="" loading="lazy" /><span>SheriffUSA</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link" data-mdb-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                <i className="fas fa-chevron-down fa-fw me-3"></i><span>Show 2 more</span>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="sidenav-menu">
            <h6 className="text-muted text-uppercase ps-4">More from youtube</h6>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fab fa-youtube fa-fw me-3"></i><span>YouTube Premium</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-film fa-fw me-3"></i><span>Movies</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-gamepad fa-fw me-3"></i><span>Gaming</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-broadcast-tower fa-fw me-3"></i><span>Live</span>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="sidenav-menu">
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-cog fa-fw me-3"></i><span>Settings</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-flag fa-fw me-3"></i><span>Report history</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-question-circle fa-fw me-3"></i><span>Help</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-comments fa-fw me-3"></i><span>Send feedback</span>
              </a>
            </li>
          </ul>
          <hr />
        </div>

        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div className="container-fluid">
            <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" data-mdb-ripple-color="primary" className="btn shadow-0 p-0 me-3" aria-controls="#sidenav-1" aria-haspopup="true">
              <i className="fas fa-bars"></i>
            </button>
            <a className="navbar-brand" href="#">
              <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="25" alt="" loading="lazy" />
            </a>
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
      </header>
    </div>
  );
}

export default Navbar;
