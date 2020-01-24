const router = require('express').Router()

router.post('/events', function (req, res, next) {
    console.log('received an event')
})

module.exports = router