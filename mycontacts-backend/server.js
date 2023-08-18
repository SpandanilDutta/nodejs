const express = require("express");
const errorhandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbconnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactroutes"));
app.use("/api/users", require("./routes/userroutes"));
app.use(errorhandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});