import React from 'react';


function Content(props) {
    return (
        <div>
            <Content>
                <div id="breadcrumb" className="section">
                    <!-- container -->
                    <div className="container">
                        <!-- row -->
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="breadcrumb-header">Regular Page</h3>
                                <ul className="breadcrumb-tree">
                                    <li><a href="#">Home</a></li>
                                    <li className="active">Blank</li>
                                </ul>
                            </div>
                        </div>
                        <!-- /row -->
                    </div>
                    <!-- /container -->
                </div>
                <!-- /BREADCRUMB -->

                <!-- SECTION -->
                <div className="section">
                    <!-- container -->
                    <div className="container">
                        <!-- row -->
                        <div className="row">
                        </div>
                        <!-- /row -->
                    </div>
                    <!-- /container -->
                </div>
                <!-- /SECTION -->

                <!-- NEWSLETTER -->
                <div id="newsletter" className="section">
                    <!-- container -->
                    <div className="container">
                        <!-- row -->
                        <div className="row">
                            <div className="col-md-12">
                                <div className="newsletter">
                                    <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                                    <form>
                                        <input className="input" type="email" placeholder="Enter Your Email"/>
                                        <button className="newsletter-btn"><i className="fa fa-envelope"></i> Subscribe
                                        </button>
                                    </form>
                                    <ul className="newsletter-follow">
                                        <li>
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /row -->
                    </div>
                    <!-- /container -->
                </div>
            </Content>
        </div>
    );
}