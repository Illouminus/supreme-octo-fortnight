import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Counter} from "./components/Counter";
import './styles/index.scss'
import About from "./pages/About/About";
import Main from './pages/Main/Main';
import {AboutAsync} from "./pages/About/About.async";
import {MainAsync} from "./pages/Main/Main.async";
import {ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                    <Route path={'/about'} element={<AboutAsync/>}/>
                    <Route path={'/'} element={<MainAsync />}/>
            </Routes>
        </Suspense>
            <Counter />
        </div>
    );
};

export default App;