const functions = require("firebase-functions");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LMaseCEjL8nKCOGGgBwjOG97RWYbkg7P5hzq7ec5C12KpeRxsrLPtjeX4lYYUVwrxwwbV4KuDGTYJDfAGZE3X8700KWoP7wJj');
const express = require("express");

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


//API routes
app.get('/', (resquest, response) => response.status(200).send('hello world'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
//listen command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-49d41/us-central1/api