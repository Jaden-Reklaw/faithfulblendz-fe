import React from 'react';
import OutstretchedArms from '../../Images/OutstretchedArms.jpg';
import Rosary from '../../Images/Rosary.jpg';
import BuddhistTemple from '../../Images/BuddhistTemple.jpg';

function Carousel() {
    return(
        <div className="container-fluid p-0">
            <div id="indicator" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#indicator" data-slide-to="0" className="active"></li>
                    <li data-target="#indicator" data-slide-to="1"></li>
                    <li data-target="#indicator" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 img-fluid mx-auto" src={OutstretchedArms} alt="First slide" />
                        <div className="carousel-caption d-block img-fluid">
                            <h5>Who we are?</h5>
                            <p>More stuff here...</p>
                            <span ref={hoverRef}>
                                <a className="btn btn-dark btn-lg font-block text-random mb-2" href="/playlists">Let's Get Started</a>
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid mx-auto" src={Rosary} alt="Second slide" />
                        <div className="carousel-caption d-block">
                            <h5>Something about faith...</h5>
                            <p>More stuff here...</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid mx-auto" src={BuddhistTemple} alt="Third slide" />
                        <div className="carousel-caption d-block mt-6">
                            <h5>Learn and have Fun</h5>
                            <p>Get adventurous and expand your Faith!</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#indicator" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#indicator" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Carousel;