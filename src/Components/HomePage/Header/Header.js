import React from 'react';
import BussnessInfo from '../BussnessInfo/BussnessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../../ShearedComponent/NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           <NavBar />
           <HeaderMain /> 
           <BussnessInfo />
        </div>
    );
};

export default Header;