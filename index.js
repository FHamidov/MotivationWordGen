require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
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

app.get('/api/test', apiKeyMiddleware, (req, res) => {
    res.json({ message: 'API is working!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 