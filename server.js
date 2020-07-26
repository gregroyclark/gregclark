const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect ot MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/<app>");

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`)
})