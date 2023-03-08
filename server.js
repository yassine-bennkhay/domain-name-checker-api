const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use("/", require("./routes/apiRoute"));
app.listen(PORT, () => console.log(`Server is Running on the Port ${PORT}`));
