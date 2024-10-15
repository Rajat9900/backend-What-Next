const express = require('express');
 const router = express.Router();
 const verifyToken = require('../middleWare/authMiddle');

 router.get("/", verifyToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route', userId: req.userId });
  });

 module.exports = router;