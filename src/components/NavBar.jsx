import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(){
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  
  // Function to check if the current path matches the link
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle navbar toggle
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Close navbar when a link is clicked (for mobile)
  const closeNav = () => setIsNavCollapsed(true);

  // Close navbar when clicking outside (mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById('navbarNav');
      const toggler = document.querySelector('.navbar-toggler');
      
      if (!isNavCollapsed && navbar && !navbar.contains(event.target) && !toggler.contains(event.target)) {
        setIsNavCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavCollapsed]);

  // Close navbar on route change
  useEffect(() => {
    setIsNavCollapsed(true);
  }, [location]);
  
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#">
                 <img className='navbarlogo' src="https://talkengglobal.com/assets/images/talkeng_main_logo.png" alt="talkeng logo" />
            </a>
            <button 
                className="navbar-toggler" 
                type="button" 
                onClick={handleNavCollapse}
                aria-controls="navbarNav" 
                aria-expanded={!isNavCollapsed} 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
                <ul className="navbar-nav ms-auto me-4">
                    <li className="nav-item">
                         <Link 
                            className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                            to="/"
                            onClick={closeNav}
                         >
                            Home
                         </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className={`nav-link ${isActive('/KeyFeatures') ? 'active' : ''}`} 
                            to="/KeyFeatures"
                            onClick={closeNav}
                        >
                            Key Features
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className={`nav-link ${isActive('/ApplyAsTutor') ? 'active' : ''}`} 
                            to="/ApplyAsTutor"
                            onClick={closeNav}
                        >
                            Apply as Tutor
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className={`nav-link ${isActive('/FAQ') ? 'active' : ''}`} 
                            to="/FAQ"
                            onClick={closeNav}
                        >
                            FAQ
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className={`nav-link ${isActive('/Olympiad202025') ? 'active' : ''}`} 
                            to="/Olympiad202025"
                            onClick={closeNav}
                        >
                            Olympiad 2.0 2024
                        </Link>
                    </li>
                    <li className="nav-item">
                         <Link 
                            className={`nav-link ${isActive('/XceleratorInternship') ? 'active' : ''}`} 
                            to="/XceleratorInternship"
                            onClick={closeNav}
                         >
                            Xcelerator Internship
                         </Link>
                    </li>
                </ul>
                
                <div className="mobile-trial-wrapper d-lg-none">
                    <a href="#" className="btn btn-trial">
                        Book A Trial
                    </a>
                </div>
                
                <a href="#" className="btn bg-warning text-dark rounded-pill px-4 py-2 border-0 d-none d-lg-inline-block">
                   Book A Trial
                </a>
            </div>
        </div>
    </nav>
    </>
  )
}
export default NavBar;