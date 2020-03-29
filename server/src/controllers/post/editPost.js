import Post from "../../models/Post";

export const editPost = async (req, res, next) => {
  try {
    const { content, id } = req.body;
    await Post.findOneAndUpdate({ _id: id }, { content });
    res.status(201).json({ message: "Success" });
    next();
  } catch (err) {
    next(err);
  }
};
