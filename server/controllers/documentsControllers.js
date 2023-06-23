import Document from '../models/documentModel.js';

const getAllDocuments = async (req, res, next) => {
  try {
    const documents = await Document.find();

    res.status(200).json({
      status: 'success',
      results: documents.length,
      data: { documents },
    });
  } catch (err) {
    next(err);
  }
};

const createDocument = async (req, res, next) => {
  try {
    const newDocument = await Document.create(req.body);

    res
      .status(201)
      .json({ status: 'success', data: { document: newDocument } });
  } catch (err) {
    next(err);
  }
};

export { getAllDocuments, createDocument };
