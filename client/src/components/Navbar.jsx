import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 
import Payments from './Payments';
import M from 'materialize-css';

function Nav() {
    const currentUser = useSelector(({ auth }) => auth);

    useEffect(() => {
        M.AutoInit()
    })
    
    return (
          <nav>
            <div className="nav-wrapper">
                    <Link to="/" className="left brand-logo">
                        <span>Emaily Surve</span>
                        <i className="material-icons">send</i>       
                    </Link>
                <ul className="right">
                    {currentUser && 
                        <div>
                            <ul id="slide-out" className="sidenav">
                                <li>
                                <Link to="/" className="sidenav-logo">
                                    <span className="blue-text">Emaily Surve</span>
                                    <i className="material-icons blue-text">send</i>       
                                </Link>
                                </li>
                                <li>
                                    {currentUser.name}
                                    <span 
                                        className="new badge" 
                                        data-badge-caption="">
                                        Credits: {currentUser.credits}
                                    </span>
                                </li>
                                <li>
                                    <Link to='/surveys' className="white-text">
                                        Surveys
                                    </Link>
                                </li>
                                <li><Payments /></li>
                                <li><div className="divider"></div></li>
                                <li>
                                    <a href="/api/logout" className="btn logout-btn">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                            <a 
                                href="#" 
                                data-target="slide-out" 
                                class="sidenav-trigger">
                                <i class="material-icons">menu</i>
                            </a>   
                            <div className="navbar-right">  
                            <li className="nav-item">
                                {currentUser.name}
                               <span 
                                    className="new badge" 
                                    data-badge-caption="">
                                    Credits: {currentUser.credits}
                                </span>
                            </li>
                            <li className="nav-item">
                                <Link to='/surveys'>Surveys</Link>
                            </li>
                            <li key="1" className="nav-item">
                                <Payments />
                            </li>
                            
                            <li key="2" className="nav-item">
                                <a href="/api/logout" className="btn logout-btn">
                                    Logout
                                </a>
                            </li> 
                            </div> 
                        </div> 
                    }
                    {!currentUser && 
                        <div>
                            <ul id="slide-out" className="sidenav">
                                <li>
                                    <a href="/auth/google" className="btn login-btn">
                                        Login with Google
                                    </a>
                                </li>
                            </ul>
                            <li>
                                <a href="/auth/google" className="btn login-btn">
                                    Login with Google
                                </a>
                            </li>
                        </div>
                    }
                </ul>
            </div> 
         </nav> 
    )
}

export default Nav;