const User = require('../models/User');

module.exports = createUser = (req, res) => {
    const user = new User({
        name: req.body.name,
        handle: req.body.handle,
    })

    user.save((error) => {
        if(error) {
            res.status(400).json({
                error: "Error Saving record"
            });
        res.status(201).json({
            success: true,
            data: user
        })
        }
    })
}