import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInSignUp from './pages/signInSignUp';
import TaskLayout from './pages/TaskLayout';
import TaskOverview from './pages/TaskOverview';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SignInSignUp} />
                <Route path="/task-layout" component={TaskLayout} />
                <Route path="/task-overview" component={TaskOverview} />
            </Switch>
        </Router>
    );
}

export default App;
