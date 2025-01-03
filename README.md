# Motivation Quote API

This API generates motivational quotes using Google's Gemini AI. Each request returns a unique, inspiring quote in English.

## Features

- Generate motivational quotes using Gemini AI
- API key authentication
- CORS enabled
- Simple web interface

## Setup

1. Clone the repository:
```bash
git clone <your-repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your API keys:
```
GEMINI_API_KEY=your_gemini_api_key
API_KEY=your_custom_api_key
```

4. Start the server:
```bash
npm start
```

## API Endpoints

### Get Motivation Quote
```
GET http://localhost:3000/api/motivation
Header: x-api-key: your_custom_api_key
```

### Test API
```
GET http://localhost:3000/api/test
Header: x-api-key: your_custom_api_key
```
