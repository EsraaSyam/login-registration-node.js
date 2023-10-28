const {User , validateSignin} = require('../models/user');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const _ = require('lodash');

router.post('/' , async (req , res) => {
    const {error} = validateSignin(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // res.send(req.body);
    let user = await User.findOne({id : req.body.id});
    if(!user) return res.status(400).send('Invalid id or name');

    if(user.name != req.body.name) return res.status(400).send('Invalid id or name');

    res.send('Signin successful...');
});

module.exports = router;