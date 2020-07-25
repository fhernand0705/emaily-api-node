import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navbar from './Navbar';
import Home from './Home';
import SurveyNew from './surveys/SurveyNew';
import Dashboard from './Dashboard';

import * as actions from '../actions';


function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(actions.fetchUser());
    })
    

    return (
        <React.Fragment>
            <Navbar />
            <div className="container">
                <Route exact path="/"  component={Home} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew}/>
            </div>
        </React.Fragment>
    )
}

export default App;
