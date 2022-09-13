const Post = require('../models/PostSchema')

//GET
const getPosts = async (req, res) => {
  try {
    const limitValue = req.query.limit || 2
    const skipValue = req.query.page || 0

    const posts = await Post.find().limit(limitValue).skip(skipValue)

    res.status(200).json({ posts })
    console.log(`You Got Page ${skipValue}`)

  } catch (error) {
    res.status(500).json({ message: error })
  }
}


//POST
const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.status(201).json({ post })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

//Get Specific 
const getPost = async (req, res) => {
  try {
    const { id: postID } = req.params
    const post = await Post.findOne({ _id: postID })
    res.status(200).json({ post })

  } catch (error) {
    res.status(500).json({ message: error })
  }
}



module.exports = {
  getPosts,
  createPost,
  getPost,
}