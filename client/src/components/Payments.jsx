import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';

function Payments() {
    const paymentDesc = "$5 for 5 email credits";
    const dispatch = useDispatch(); 

    return (
        <StripeCheckout 
        name="Emaily"
        description={paymentDesc}
        amount={500} 
        token={token => dispatch(actions.handleToken(token))}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
            <button className="btn">
                Add Credits
            </button>
        </StripeCheckout>
    )
}

export default Payments;