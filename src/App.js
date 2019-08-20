import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import HomePage from './components/HomePage';
import About from './components/About';
import Header from './components/Header';
import Exercises from './components/Exercises';
import Styling from './components/Styling';
import NewExercise from './components/NewExercise';
import Contact from './components/Contact';
import Plans from './components/Plans';
import Blog from './components/Blog';
import Login from './components/Login';

const App = () => {
    return (
            <Router history={history}>
                <Header/>
                    <Switch>
                    <Route path="/" exact component={HomePage}></Route>
                    <Route path="/training/about" exact component={About}></Route>
                    <Route path="/training/exercises" exact component={Exercises}></Route>
                    <Route path="/style" exact component={Styling}></Route>
                    <Route path="/training/newexercise" exact component={NewExercise}></Route>
                    <Route path="/training/contact" exact component={Contact}></Route>
                    <Route path="/training/plans" exact component={Plans}></Route>
                    <Route path="/training/blog" exact component={Blog}></Route>
                    <Route path="/training/login" exact component={Login}></Route>
                    </Switch>
            </Router>
    )
}

export default App;