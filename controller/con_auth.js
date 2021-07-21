const User = require('../models/create-User');
const Post = require('../models/create-Post');

// Creating Both User and Post Collection
const new_post = async (req, res) => {
  try {
    const { title, body, create_date, first_name, last_name, age, birth_day } =
      req.body;

    // Create User
    const user = new User({
      first_name,
      last_name,
      age,
      birth_day,
    });

    // Create Post
    const post = new Post({
      title,
      body,
      create_date,
      author_id: user._id,
    });

    // Save In DB
    const newUser = await user.save();
    const newPost = await post.save();

    console.log(`user:${newUser} \n post:${newPost}`);
    res.json({ user: newUser, post: newPost });
  } catch (err) {
    console.log(`Error:${err}`);
    return res.json({ msg: err.message });
  }
};

// Updating Post by _id
const update_post = async (req, res) => {
  try {
    const postData = {
      title: req.body.title,
      body: req.body.body,
    };

    for (let prop in postData) if (!postData[prop]) delete postData[prop]; // Untouched field stays same

    const updatePost = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      postData,
      { new: true, useFindAndModify: false }
    );
    console.log(updatePost);
    res.json(updatePost);
  } catch (err) {
    console.log(`Error:${err}`);
    res.json({ msg: [err.message, 'Check if the Post _ID is correct'] });
  }
};

// Delete Post by _id
const delete_post = async (req, res) => {
  try {
    const removePost = await Post.deleteOne(
      { _id: req.params.id },
      { new: true }
    );
    console.log(removePost);
    res.json(removePost);
  } catch (err) {
    console.log(`Error:${err}`);
    res.json({ msg: [err.message, 'Check if the Post _ID is correct'] });
  }
};

module.exports.new_post = new_post;
module.exports.update_post = update_post;
module.exports.delete_post = delete_post;
