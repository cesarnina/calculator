const router = require('express').Router();
const Calculator = require('../db/models/Calculator');

router.get('/', async (req, res, next) => {
  try {
    const calculations = await Calculator.findAll()
    res.json(calculations)
  } catch (error) {
    next(error)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { calculator } = req.body
    const calc = await Calculator.create({ calculator })
    res.json(calc)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
