import React, {useState, useEffect} from 'react';

function DrinkWater(){



    return(
        <div>
            <h1>Drink Water</h1>
            <h3>Goal: 2 Liters</h3>
            

            <div className="cup">
                <div className="remained" id="remained">
                    <span id="liters"></span>
                    <small>Remained</small>
                </div>

                <div className="percentage" id="percentage"></div>
            </div>

            <p className="text">Select how many glasses of water that you have drank</p>

            <div className="cups">
            <div className="cup cup-small">250 ml</div>
            <div className="cup cup-small">250 ml</div>
            <div className="cup cup-small">250 ml</div>
            <div className="cup cup-small">250 ml</div>
            <div className="cup cup-small">250 ml</div>
            <div className="cup cup-small">250 ml</div>
            <div className="cup cup-small">250 ml</div>
            <div className="cup cup-small">250 ml</div>
            </div>


        </div>
    )
}

export default DrinkWater