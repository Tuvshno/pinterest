const Post = require('../models/PostSchema')

//GET
const getPosts = async (req ,res) => {
  try {
    const post = await Post.find({})
    res.status(200).json({post})
    console.log("you got a post")

  } catch (error) {
    res.status(500).json({message:error})   
  }
}


//POST
const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.status(201).json({post})
  } catch (error) {
    res.status(500).json({message:error})
  }
}

//Get Specific 
const getPost = async (req, res) => {
  try {
    const {id: postID} = req.params
    const post = await Post.findOne({_id: postID})
    res.status(200).json({post})

  } catch (error) {
    res.status(500).json({message:error})
  }
}

module.exports = {
  getPosts,
  createPost,
  getPost
}