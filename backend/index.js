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
        const result = await client.db('Farmily').collection('customers').insertOne({name: username, password: hashedPassword, age: age, email: email, number: number})
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/fsignup', async (req, res) => {
    try {
        const { username, password, age, number, place } = req.body;

        await connectToDb();
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await client.db('Farmily').collection('farmers').insertOne({name: username, password: hashedPassword, age: age, place: place, number: number})
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/csignin', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username,password)

        await connectToDb();

        const user = await client.db("Farmily").collection("customers").findOne({ name: username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            const token = jwt.sign({ id: user._id, username: user.name }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
            console.log(token, 'for ', user.name)
        } else {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/fsignin', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username,password)

        await connectToDb();

        const user = await client.db("Farmily").collection("farmers").findOne({ name: username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            const token = jwt.sign({ id: user._id, username: user.name }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
            console.log(token, 'for ', user.name)
        } else {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});