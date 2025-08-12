import React from 'react';
import './Header.css'
const Header = () => {
    return (
       <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>
            <img src=".\logo.png" alt="logo" width={100} />

            <div className='flexCenter h-menu'>
                <a href="">Residence</a>
                <a href="">Our Velue</a>
                <a href="">Contact Us</a>
                <a href="">Get Start</a>
                <button className='button'>
                    <a href="">Contact</a>
                </button>
                
            </div>
        </div>
       </section>
    );
};

export default Header;