import Comment from '../models/commentModel.js';

const getAllComments = async (req, res, next) => {
  try {
    const comments = await Comment.find();

    res.status(200).json({
      status: 'success',
      result: comments.length,
      data: { comments },
    });
  } catch (err) {
    next(err);
  }
};

const createNewComment = async (req, res, next) => {
  try {
    const newComment = await Comment.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { comment: newComment },
    });
  } catch (err) {
    next(err);
  }
};

export { getAllComments, createNewComment };
