const express = require('express');
const { getAllProblems, createProblem } = require('../controllers/problemController');
const router = express.Router();

router.get('/getProblems',getAllProblems)
router.post('/create-problem',createProblem)


module.exports = router
