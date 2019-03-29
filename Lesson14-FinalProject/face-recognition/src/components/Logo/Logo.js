import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 250, width: 250 }} >
                <img src={brain} alt="" width="100%"></img>
            </Tilt>
        </div>
    );
}

export default Logo;