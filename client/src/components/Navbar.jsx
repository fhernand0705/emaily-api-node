import React from 'react';
import { useSelector } from 'react-redux'; 

function Navbar() {
    const currentUser = useSelector(state => state.auth);
    
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="left brand-logo">
                    Emaily
                </a>    
                <ul className="right">
                    {currentUser && 
                        <div>
                            <li><span>{currentUser.name}</span></li>
                            <li><a href="/api/logout"><span>Logout</span></a></li> 
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