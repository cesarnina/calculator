const router = require('express').Router();
const Calculator = require('../db/models/Calculator');

router.get('/', async (req, res, next) => {
  try {
    const calculations = await Calculator.findAll();
    res.json(calculations);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { calculation } = req.body;
    const calc = await Calculator.create({ calculation });
    res.json(calc);
  } catch (error) {
    next(error);
  }
});

router.delete('/:calcId', async (req, res, next) => {
  try {
    const { calcId } = req.params;
    const deletedCalc = await Calculator.destroy({
      where: { id: calcId }
    });
    res.json(deletedCalc);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
