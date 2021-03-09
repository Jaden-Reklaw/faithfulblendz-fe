import React from 'react';
import randomColor from 'randomcolor';
import useHover from '../Hover/useHover';


function Footer() {

    let textColor = randomColor({ luminosity: 'dark' });

    const [hoverRef1, isHovered1] = useHover();
    const [hoverRef2, isHovered2] = useHover();  
    const [hoverRef3, isHovered3] = useHover();
    const [hoverRef4, isHovered4] = useHover();  
      

    return (
        <div className='mt-2'>
            <footer className="footer bg-medium w-100 d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center">
                
                <div className="pt-3 px-3 mb-0 mb-sm-3 mb-md-0 p-md-4 d-flex d-sm-inline-block justify-content-between">
                    <div className="footer-links p-0 font-block" >
                        <span ref={hoverRef1}>
                            {isHovered1 ?
                                <a className="h4 my-2 mx-1 mr-sm-2 my-sm-2 ml-sm-0 text-decoration-none" style={{color: textColor}} href="#">Home</a> :
                                <a className="h4 my-2 mx-1 mr-sm-2 my-sm-2 ml-sm-0 text-random text-decoration-none" href="#">Home</a>
                            }   
                        </span>
                        <span ref={hoverRef2}>
                            {isHovered2 ?
                                <a className="h4 my-2 mx-1 mr-sm-2 my-sm-2 ml-sm-0 text-decoration-none" style={{color: textColor}} href="#">About</a> :
                                <a className="h4 my-2 mx-1 mr-sm-2 my-sm-2 ml-sm-0 text-random text-decoration-none" href="#">About</a>
                            }
                        </span>
                        <span ref={hoverRef3}>
                            {isHovered3 ?
                                <a className="h4 my-2 mx-1 mr-sm-2 my-sm-2 ml-sm-0 text-decoration-none" style={{color: textColor}} href="#">Bugs</a> :
                                <a className="h4 my-2 mx-1 mr-sm-2 my-sm-2 ml-sm-0 text-random text-decoration-none" href="#">Bugs</a>
                            }
                        </span>
                        <span ref={hoverRef4}>
                            {isHovered4 ?
                                <a className="h4 my-2 mx-1 mr-sm-2 my-sm-2 ml-sm-0 text-decoration-none" style={{color: textColor}} href="#">Register</a> :
                                <a className="h4 my-2 mx-1 mr-sm-2 my-sm-2 ml-sm-0 text-random text-decoration-none" href="#">Register</a>
                            }
                        </span>
                    </div>
                    <h1 className="m-0 font-comment ml-1 ml-sm-0">Faithful Blendz &copy; 2021</h1>
                </div>

                <div className="my-2 my-sm-0 px-2 py-1 p-sm-3 p-md-4 d-flex flex-wrap flex-sm-nowrap d-sm-inline-block justify-content-between justify-content-sm-end">
                    <a className="bg-dark p-3 m-1 mx-2 m-sm-1 text-random icon-div" href="https://www.facebook.com"><i className="fa fa-fw icon-larger fa-facebook"></i></a>
                    <a className="bg-dark p-3 m-1 mx-2 m-sm-1 text-random icon-div" href="https://www.twitter.com"><i className="fa fa-fw icon-larger fa-twitter"></i></a>
                    <a className="bg-dark p-3 m-1 mx-2 m-sm-1 text-random icon-div" href="htpps://www.linkedin.com"><i className="fa fa-fw icon-larger fa-linkedin"></i></a>
                    <a className="bg-dark p-3 m-1 mx-2 m-sm-1 text-random icon-div icon" href="#"><i className="fa fa-fw icon-larger fa-github"></i></a>
                </div>
                
            </footer>
        </div>
    );
}

export default Footer;