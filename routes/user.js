const {User , validateUser} = require('../models/user');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.post('/' , async (req , res) => {
    const {error} = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // res.send(req.body);
    let user = await User.findOne({id : req.body.id});
    if(user) return res.status(400).send('User already registered');

    user = new User({
        name : req.body.name,
        id : req.body.id
    });

    await user.save();
    res.send(user);
});

module.exports = router;