import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';

const Landing = () => <div><h2>Landing</h2></div>
const Survey = () => <div><h2>Survey</h2></div>

function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(actions.fetchUser());
    })

    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/"  component={Landing} />
                <Route path="/survey" component={Survey} />
            </Switch>
        </React.Fragment>
    )
}

export default App;
