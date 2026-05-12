import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
import loggedInUser from '~/utils/loggedInUser';


export default defineEventHandler(async (event) => {
    const user = await loggedInUser(event);
    const body = await readBody(event);

    const session = await stripe.checkout.sessions.create({
        customer_email: user?.email,
        line_items: [
            {
                price: body.priceId, // Your Price ID from Stripe
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: `${process.env.PROJECT_DOMAIN}/dashboard`,
        cancel_url: `${process.env.PROJECT_DOMAIN}/pricing`,
        metadata: {
            userId: user?.id, // Tie this to your MongoDB User ID
        },
    });
    
    return { url: session.url }
})