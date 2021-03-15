
import React, { Component } from 'react';
import MainCarousel from '../../MainCarousel/MainCarousel';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <MainCarousel />
            </div>
        )
    }
}

export default Home;