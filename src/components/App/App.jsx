import React from 'react';
import './App.css';
import {
    DarkModeProvider,
    ThemeButton,
    Home,
    Preloader,
    DevProfiles,
    Contributors,
} from './imports.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <DarkModeProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/dev-profiles">
                        <DevProfiles />
                    </Route>
                    <Route path="/contributors">
                        <Contributors />
                    </Route>
                </Switch>
            </Router>
            <ThemeButton></ThemeButton>
            <Preloader></Preloader>
        </DarkModeProvider>
    );
}

export default App;
