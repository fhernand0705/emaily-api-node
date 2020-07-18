import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

function Payments() {
    const paymentDesc = "$5 for 5 email credits";

    return (
        <StripeCheckout 
        name="Emaily"
        description={paymentDesc}
        amount={500} 
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        />
    )
}

export default Payments;