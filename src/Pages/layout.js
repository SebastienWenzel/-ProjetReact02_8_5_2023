import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/_header';
import Footer from '../components/_footer';

const layout = () => {
    return (
        <div className='Layout'>
            <Header/>
            {/* Toute les routes enfants de Layouts'afficheront sur Outlet */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default layout;