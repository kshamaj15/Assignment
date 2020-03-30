import React from 'react';
import icon from '../Assets/icon.PNG';
import icon1 from '../Assets/icon1.png';
import circle from '../Assets/circle.png';

const Content = () => {
    return (
        <div className="content">
            <nav className="custom-nav">
                <a href="#section1">Our Services</a>
                <a href="#section2">How GoMechanic works?</a>
                <a href="#section3">GoMechanic Benefits</a>
                <a href="#section4">Brands We Serves</a>
                <a href="#section5">FAQs</a>
                <a href="#section6">Reviews</a>
            </nav>
            
            <div id="section1" className="section sec-1">
                <h1>Our Services</h1>
                <p>dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy</p>
                <div className="services">
                    <div className="item-1">
                        <img src={icon} alt="icon"/>
                        <p>XYZZZ</p>
                    </div>
                    <div className="item-1">
                        <img src={icon} alt="icon"/>
                        <p>XYZZZ</p>
                    </div>
                    <div className="item-1">
                        <img src={icon} alt="icon"/>
                        <p>XYZZZ</p>
                    </div>
                    <div className="item-1">
                        <img src={icon} alt="icon"/>
                        <p>XYZZZ</p>
                    </div>
                    <div className="item-1">
                        <img src={icon} alt="icon"/>
                        <p>XYZZZ</p>
                    </div>
                    <div className="item-1">
                        <img src={icon} alt="icon"/>
                        <p>XYZZZ</p>
                    </div>
                    <div className="item-1">
                        <img src={icon} alt="icon"/>
                        <p>XYZZZ</p>
                    </div>
                    <div className="item-1">
                        <img src={icon} alt="icon"/>
                        <p>XYZZZ</p>
                    </div>
                </div>

            </div>

            <div id="section2" className="section sec-2">
                <h1>How GoMechanic works?</h1>
                <div className="works">
                    <div className="number">1</div>
                    <div>
                        <h4>Select Whats best for your car</h4>
                        <p>Find from a wide variety of packages & services</p>
                    </div>
                    <div><img src={icon1}/></div>
                    <div className="number">2</div>
                    <div>
                        <h4>Schedule doorstep pick up at Your Convenience</h4>
                        <p>Our representative will collect your car from your home.</p>
                    </div>
                    <div><img src={icon1}/></div>
                    <div className="number">3</div>
                    <div>
                        <h4>Shower your car with GoMechanic love</h4>
                        <p>Once you're onboard, we will take care of everything</p>
                    </div>
                    <div><img src={icon1}/></div>
                    <div className="number">4</div>
                    <div>
                        <h4>Share GoMechanic With Contacts & earn money</h4>
                        <p>Share your link. Your friend's get Rs. 500. You get Rs. 500.</p>
                    </div>
                    <div><img src={icon1}/></div>
                </div>
            </div>

            <div id="section3" className="section sec-1">
                <h1>GoMechanic Benefits</h1>
                <div className="benefits">
                    <img src={circle}/>
                    <div>
                        <h4>Free Pick-Up & Drop</h4>
                        <p>We provide convenience at your doorstep.</p>
                    </div>

                    <img src={circle}/>
                    <div>
                        <h4>Unbeatable Prices</h4>
                        <p>When it comes to pricing, we are unrivalled.</p>
                    </div>

                    <img src={circle}/>
                    <div>
                        <h4>Unmatched Service Warranty</h4>
                        <p>We provide convenience at your doorstep.</p>
                    </div>

                    <img src={circle}/>
                    <div>
                        <h4>Genuine OEM/OES Spares</h4>
                        <p>What goes into your car is nothing but the best.</p>
                    </div>
                </div>
            </div>

            <div id="section4" className="section sec-1">
                <h1>Brands We Serves</h1> A Big Handful of Them
                <div className="brands">
                    <img src={icon1}/>
                    <img src={icon1}/>
                    <img src={icon1}/>
                    <img src={icon1}/>
                    <img src={icon1}/>
                    <img src={icon1}/>
                    <img src={icon1}/>
                    <img src={icon1}/>
                </div>

            </div>

            <div id="section4" className="section sec-1">
                <h1>Our Partners</h1>
                <div className="brands">
                    <img src={icon1}/>
                    <img src={icon1}/>
                    <img src={icon1}/>
                    <img src={icon1}/>
                    <img src={icon1}/>
                    <img src={icon1}/>
                    <img src={icon1}/>
                    <img src={icon1}/>
                </div>

            </div>

            <div id="section5" className="faq section sec-1">
                <h1>FAQs</h1>

                <div id='faq' class='tab-pane active'>
    <div class='panel panel-default'>
        <div class='panel-heading'>
            <h3 class='panel-title'><a href='#faq1'>What are the charges for a basic GoMechanic car service in Delhi?</a></h3>
        </div>
        <div class='panel-body' id='faq1'>
        GoMechanic car service in Delhi starts at just ₹1,999 only. You can book your car service in Delhi on our website
or using the exclusive GoMechanic android app.
        </div>
    </div>
    <div class='panel panel-default'>
        <div class='panel-heading'>
            <h3 class='panel-title'><a href='#faq2'>Where is the nearest GoMechanic workshop from my location in Delhi?</a></h3>
        </div>
        <div class='panel-body' id='faq2'>
        GoMechanic car service in Delhi starts at just ₹1,999 only. You can book your car service in Delhi on our website
or using the exclusive GoMechanic android app.
        </div>
    </div>
    <div class='panel panel-default'>
        <div class='panel-heading'>
            <h3 class='panel-title'><a href='#faq3'>Where is the nearest GoMechanic workshop from my location in Delhi?</a></h3>
        </div>
        <div class='panel-body' id='faq3'>
        GoMechanic car service in Delhi starts at just ₹1,999 only. You can book your car service in Delhi on our website
or using the exclusive GoMechanic android app.
        </div>
    </div>
    <div class='panel panel-default'>
        <div class='panel-heading'>
            <h3 class='panel-title'><a href='#faq4'>Where is the nearest GoMechanic workshop from my location in Delhi?</a></h3>
        </div>
        <div class='panel-body' id='faq4'> 
        GoMechanic car service in Delhi starts at just ₹1,999 only. You can book your car service in Delhi on our website
or using the exclusive GoMechanic android app.
        </div>
    </div>
</div>
            </div>

            <div id="section6" className="review section sec-1">
                <h1>Reviews and Ratings</h1>
                <div className="review-data">
                    <div>
                        <h4>2 million+</h4>
                        <p>Car serviced</p>
                    </div>
                    <div>
                        <h4>1 million+</h4>
                        <p>Happy Customers</p>
                    </div>
                    <div>
                        <h4>4.5</h4>
                        <p>Average Ratings</p>
                    </div>
                    <div>
                        <h4>150+</h4>
                        <p>workshops in India</p>
                    </div>

                </div>
                <div className="review-details">
                    <div className="reviewer">
                        <img src={circle}/>
                        <h5>Its really GoMechanic for me</h5>
                        <p>I recently got my 16-year-old Santro LP serviced
at GoMechanic. All my complaints were sorted
out by his team in an exemplary way. Lorem
ipsum lorem ipsum.</p>
                    </div>
                    <div className="reviewer">
                        <img src={circle}/>
                        <h5>Its really GoMechanic for me</h5>
                        <p>I recently got my 16-year-old Santro LP serviced
at GoMechanic. All my complaints were sorted
out by his team in an exemplary way. Lorem
ipsum lorem ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;