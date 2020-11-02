// require all npm packages 
const express = require("express");
const logger = require("morgan");
// normally used for debugging 
const mongoose = require("mongoose");

const path = require("path");

// port number 
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Mongo connection link
//mongodb+srv://akirillychev:<Hardwater55>@cluster0.r8zyp.mongodb.net/<fitness_db>?retryWrites=true&w=majority
mongoose.connect(process.env.MONGODB_ATLAS_URI || "mongodb://localhost/fitness_db", { useNewUrlParser: true, useUnifiedTopology: true}, );





// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
    console.log(`App running on link http://localhost:${PORT}`);
});
