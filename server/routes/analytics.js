const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({
    twitterFollowers: 1200,
    facebookLikes: 3400,
    instagramFollowers: 5000,
    linkedinConnections: 800,
  });
});

module.exports = router;
