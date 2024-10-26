const { MongoClient, ObjectId } = require('mongodb'); // Import ObjectId
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 5000;
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'your_secret_key';

const uri = "mongodb+srv://anshadrazakk:Asdrzkknt%40123@cluster0.qyxtmlr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDb() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

// Middleware
app.use(cors());
app.use(express.json());


app.post('/csignup', async (req, res) => {
    try {
        const { username, password, age, number, email } = req.body;

        await connectToDb();
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await client.db('farmily').collection('farmers').insertOne({name: username, password: hashedPassword, age: age, email: email, number: number})
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});