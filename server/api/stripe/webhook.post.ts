import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default defineEventHandler(async (event) => {
    const signature = getHeader(event, 'stripe-signature')
    const rawBody = await readRawBody(event)
    
    let stripeEvent;
    try {
      stripeEvent = stripe.webhooks.constructEvent(
        rawBody!, signature!, process.env.STRIPE_WEBHOOK_SECRET!
      )
    } catch (err) {
      throw createError({ statusCode: 400, message: 'Webhook Error' })
    }
  
    // Update MongoDB based on event type
    if (stripeEvent.type === 'checkout.session.completed') {
      const session = stripeEvent.data.object
      // Update user in MongoDB: isSubscribed = true, stripeCustomerId = session.customer
    }
  
    if (stripeEvent.type === 'customer.subscription.deleted') {
      // Revoke access in MongoDB: isSubscribed = false
    }
  
    return { received: true }
  })