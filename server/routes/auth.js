const express = require('express');
const router = express.Router();

// Define authentication routes here
router.post('/register', (req,res)=>{
    res.json({success:"true"})
})

module.exports = router;