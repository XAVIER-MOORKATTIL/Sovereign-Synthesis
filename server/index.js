const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// The Sovereign Handshake with Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("The Handshake is Complete: Connected to Atlas"))
    .catch((err) => console.log("The Curse of Localhost Persists:", err));

app.get('/', (req, res) => {
    res.send("The Signal is Live. The Void is Filled.");
});

app.listen(PORT, () => {
    console.log(`Server is vibrating on port ${PORT}`);
});