const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KFgmdFS9Z6HaWFnAFaHXJNbYS0BecyWOXz1DQjPsrkDmxpiPTupqy2DN3tZXRkHPuVDWhf4kKRhTInG4jlsarER00DBSHMsqO"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-31d23/us-central1/api
