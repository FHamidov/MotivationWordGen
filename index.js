require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000;

// CORS configuration
const corsOptions = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500', 'null'],
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'x-api-key']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// API key middleware
const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
    }
    next();
};

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Get motivation quote endpoint
app.get('/api/motivation', apiKeyMiddleware, async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = "Generate a short, powerful motivational quote in English (max 20 words). Be original and inspiring.";
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const quote = response.text();
        
        res.json({ quote });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate motivation quote' });
    }
});

// Test endpoint
app.get('/api/test', apiKeyMiddleware, (req, res) => {
    res.json({ message: 'API is working!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 