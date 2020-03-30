import React from 'react';

const Form = () => {
    return (
        <div className="form-grid-container">
            <div className="item-1"></div>
            <div className="item-2">
                <div className="upper">
                <h2>The Best Car Service Awaits You</h2>
                <p>Get instent quotes for your car services in Gurgaon</p>
                <form>
                    <input placeholder="Select your Car"/>
                    <input type="number" placeholder="Enter Mobie Number"/>
                    <button>CHECK PRICE</button>
                </form>
                </div>
                <div className="footer">
                    <div className="item">
                        <h4>4.7 / 5</h4>
                        <p>based on 500+ Reviews</p>
                    </div>
                    <div className="item">
                        <h4>2,50,000 +</h4>
                        <p>Car Serviced & Repaired</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;