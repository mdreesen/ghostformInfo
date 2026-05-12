import { connectDB } from "../../../lib/database/mongodb";
import { Model } from 'mongoose';
import UserModel from '../../../lib/database/models/User';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
// import loggedInUser from '~/utils/loggedInUser';
const User = UserModel as Model<any>;

export default defineEventHandler(async (event) => {
    const signature = getHeader(event, 'stripe-signature')
    const rawBody = await readRawBody(event)
    const user = await getUserSession(event)

    // const { user } = await requireUserSession(event);
    // console.log('user', user)

    let stripeEvent;
    try {
      stripeEvent = stripe.webhooks.constructEvent(
        rawBody!, signature!, process.env.STRIPE_WEBHOOK_SECRET!
      )
    } catch (err) {
      throw createError({ statusCode: 400, message: 'Webhook Error' })
    }
    // console.log('stripeEvent', stripeEvent)

    // Update MongoDB based on event type
    if (stripeEvent.type === 'charge.succeeded') {
      const session = stripeEvent.data.object;
    //   console.log(user)
    //   const findUser = await User.findById({ _id: user.id });
    //   console.log('session', session)

    //   await User.findOneAndUpdate(
    //     { id: user?.id },
    //     { 
    //         paid: session.paid,

    //      },
    //     { new: true });

    //   console.log(session)
      // Update user in MongoDB: isSubscribed = true, stripeCustomerId = session.customer
    }
  
    if (stripeEvent.type === 'customer.subscription.deleted') {
      // Revoke access in MongoDB: isSubscribed = false
    }
  
    return { received: true }
  })