import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE = 'pk_test_51KJ2ZYLt701UTfOQyY1gLXZvdBXngd6YzKBdEO23vVG1nSlqv0Jz5mbOpL5baM6m4K7rgLlqaPWEfdWrKBG0V1wz00VnkU4ETs';

const onToken = (user,checkout) => token => 
    checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => 
    <StripeCheckout
      amount={amount*100}
      token={onToken(user,checkout)}
      currency='INR'
      stripeKey={STRIPE_PUBLISHABLE}
/>

export default Checkout;