// src/components/Navbar.js
import React, { useState } from 'react';
import Clock from '../components/Clock';

const Navbar = () => {
    return (
        <div className="">
            <div class="ui secondary pointing menu items-center p-2">
                <h5 class="ui item">
                    Fahmi Website
                </h5>
                <div class="right menu">
                    <a class="item" href='/'>
                        Home
                    </a>
                    <a class="item" href='/about'>
                        About
                    </a>
                    <a class="item" href='/contact'>
                        Contact
                    </a>
                    <a class="item" href='/youtube'>
                        Youtube
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
