const router = require('express').Router()

router.post('/events', function (req, res, next) {
    console.log('received an event')
    res.status(202).json({
        'message': 'event received'
    })
})

module.exports = router