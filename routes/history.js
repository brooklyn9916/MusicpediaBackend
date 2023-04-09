const historyController = require('../controllers/history')
const router = require('express').Router()

router.post('/', historyController.create)
router.get('/', historyController.findAll)
router.get('/:id', historyController.findOne)
router.put('/:id', historyController.update);
router.delete('/:id', historyController.delete);

module.exports = router
