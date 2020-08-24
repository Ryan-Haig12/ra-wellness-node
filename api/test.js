const router = require('express').Router()

// @route   GET /api/v1/test
// @desc    Test to make sure the ws is working
// @access  Public
router.get('/', (req, res) => {
    res.status(200).json({ msg: 'Oh yeah, the ra-wellness-node ws is working' })
})

module.exports = router