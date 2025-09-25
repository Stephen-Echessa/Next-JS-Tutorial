export async function POST(req) {
    const payload = await req.json();
    const sig = req.headers.get("Stripe-Signature");

    let event;

    try {
        event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.log("❌ Error message: ", err.message);
        return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }
}