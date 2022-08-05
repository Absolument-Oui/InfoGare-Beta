import React, { Component } from 'react';
import '../index.scss';

import biglogo from '../assets/img/common/icon_light.png';

class HomePage extends Component {
    render() {
        return (
            <div className='center'>
                <img src={biglogo} alt="InfoGare" />
                <h1>Bienvenue sur InfoGare !</h1>
                <h3><code>Créer des infogares deviens facile</code></h3>
            </div>
        );
    }
}

export default HomePage;