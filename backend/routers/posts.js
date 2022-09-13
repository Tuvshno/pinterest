const express = require('express')
const router = express.Router()

const {
  getPosts,
  createPost,
  getPost,
  deleteOne

} = require('../controllers/posts')

router.route('/').get(getPosts).post(createPost)
router.route('/:id').get(getPost).delete(deleteOne)

module.exports = router