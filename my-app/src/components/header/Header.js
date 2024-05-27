import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import './Header.css';

const Header = () => {

    return (
        <header>
            <h1>Перевіримо знання ПДР</h1>
            <a href="/test">Тест</a>
        </header>
    );
};

export default Header;