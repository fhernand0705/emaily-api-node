import React from 'react';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 
import Payments from './Payments';

function Navbar() {
    const currentUser = useSelector(({ auth }) => auth);
    
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="left brand-logo">
                    <span>Emaily</span>
                    <i className="material-icons">send</i>       
                </Link> 
                <ul className="right">
                    {currentUser && 
                        <div>
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
                    }
                    {!currentUser && 
                        <li>
                            <a href="/auth/google">Login with Google</a>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;