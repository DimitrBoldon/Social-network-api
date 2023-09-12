// Create a router instance
const router = require('express').Router();
const userRoutes = require('./thought-routes');
const thoughtRoutes = require('./thought-routes');


router.use('/user',userRoutes);
router.use('/thought',thoughtRoutes);
module.exports = router;