import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import TemplateMenu from './components/TemplateMenu';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound'; // Убедитесь, что этот компонент существует

function App() {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/template" element={<TemplateMenu />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={redirect ? <Navigate to="/" /> : <PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;

