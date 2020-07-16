import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Surveys from './Surveys';
import { useDispatch } from 'react-redux';
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
                <Route path="/surveys" component={Surveys} />
            </Switch>
        </React.Fragment>
    )
}

export default App;
