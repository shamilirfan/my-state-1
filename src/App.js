import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter';
import Form from './Form';
import { Routes, Route, Link } from "react-router-dom";
import Links from './Link';
import Fetch from './Fetch';

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Links />} />
                <Route path="/form" element={<Form />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/fetch" element={<Fetch />} />
            </Routes>

        </div>
    );
}
export default App;