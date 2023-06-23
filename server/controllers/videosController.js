import Video from '../models/videosModel.js';

const getAllVideos = async (req, res, next) => {
  try {
    const videos = await Video.find();

    res.status(200).json({
      status: 'success',
      results: videos.length,
      data: { videos },
    });
  } catch (err) {
    next(err);
  }
};

const createVideo = async (req, res, next) => {
  try {
    const newVideo = await Video.create(req.body);

    res.status(201).json({ status: 'success', data: { video: newVideo } });
  } catch (err) {
    next(err);
  }
};

export { getAllVideos, createVideo };
