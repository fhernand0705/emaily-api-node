import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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
            <Switch>
                <Route exact path="/"  component={Home} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew}/>
            </Switch>
        </React.Fragment>
    )
}

export default App;
