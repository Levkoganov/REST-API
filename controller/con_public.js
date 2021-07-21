const Post = require('../models/create-Post');

//GET all post with First_name and Last_name
const all_post = async (req, res) => {
  try {
    const findAllPost = await Post.find().populate('author_id', [
      'first_name',
      'last_name',
    ]);

    console.log(findAllPost);
    res.json(findAllPost);
  } catch (err) {
    console.log(`ERROR:${err}`);
    res.json({ massage: err });
  }
};

// GET one post by _id and all User Info
const specific_post = async (req, res) => {
  try {
    const FindOnePost = await Post.findById(req.params.id).populate(
      'author_id'
    );

    console.log(FindOnePost);
    res.json(FindOnePost);
  } catch (err) {
    console.log(`ERROR:${err}`);
    res.json('Invalid ID');
  }
};

module.exports.all_post = all_post;
module.exports.specific_post = specific_post;
