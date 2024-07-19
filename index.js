import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// A basic route
app.get('/', (req, res) => {
  res.send('Welcome to the One Piece Card Game API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});