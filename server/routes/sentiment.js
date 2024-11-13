const express = require('express');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const router = express.Router();

router.post('/', (req, res) => {
  const { text } = req.body;
  const result = sentiment.analyze(text);
  res.json({ sentiment: result.score });
});

module.exports = router;
