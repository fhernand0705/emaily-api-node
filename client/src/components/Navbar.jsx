import React from 'react';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 
import Payments from './Payments';

function Navbar() {
    const currentUser = useSelector(state => state.auth);
    
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="left brand-logo">
                    Emaily
                </Link>    
                <ul className="right">
                    {currentUser && 
                        <div>
                            <li><span>{currentUser.name}</span></li>
                            <li key="1"><Payments /></li>
                            <li><Link to='/surveys'>Surveys</Link></li>
                            <li key="2"><a href="/api/logout"><span>Logout</span></a></li> 
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