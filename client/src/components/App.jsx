import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';

const Landing = () => <div><h2>Landing</h2></div>
const Survey = () => <div><h2>Survey</h2></div>

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/"  component={Landing} />
                <Route path="/survey" component={Survey} />
            </Switch>
        </div>
    )
}

export default App;
