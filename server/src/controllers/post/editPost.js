import Post from "../../models/Post";

export const editPost = async (req, res, next) => {
  try {
    const { content, id, isAdmin } = req.body;
    if (isAdmin) {
      const date = new Date();
      const post = await Post.findOne({ _id: id });
      post.content = content;
      post.editedByAdmin = true;
      await post.save();
    } else {
      await Post.findOneAndUpdate({ _id: id }, { content });
    }
    res.status(201).json({ message: "Success" });
    next();
  } catch (err) {
    next(err);
  }
};
