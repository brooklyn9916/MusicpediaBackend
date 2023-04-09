const quizController = require('../controllers/quiz')
const router = require('express').Router()

router.get('/', quizController.findAll)
router.get('/:id', quizController.findOne)
router.post('/', quizController.create)
router.put('/:id', quizController.update)
router.delete('/:id', quizController.delete)
router.get('/category/:id', quizController.getByCategoryid)
router.get('/level/:id', quizController.getByLevelid)

module.exports = router