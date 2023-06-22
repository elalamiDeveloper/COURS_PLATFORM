import Formation from '../models/formationModel.js';
import APIFeatures from '../utils/APIFeatures.js';

const createFormation = async (req, res, next) => {
  try {
    const formation = await Formation.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { formation },
    });
  } catch (err) {
    next(err);
  }
};

const getAllFormations = async (req, res, next) => {
  try {
    const query = new APIFeatures(Formation.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const formations = await query.query;

    res.status(200).json({
      status: 'success',
      data: { formations },
    });
  } catch (err) {
    next(err);
  }
};

const getFormationById = async (req, res, next) => {
  try {
    const query = new APIFeatures(Formation.findById(req.params.id), req.query);

    const formation = await query.query;

    res.status(200).json({
      status: 'success',
      data: { formation },
    });
  } catch (err) {
    next(err);
  }
};

const updateFormationById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedFields = req.body;
    const formation = await Formation.findByIdAndUpdate(id, updatedFields, {
      new: true,
      runValidators: true,
    });

    if (!formation) throw new AppError('No formation found with that ID', 404);

    res.status(200).json({
      status: 'success',
      data: { formation },
    });
  } catch (err) {
    next(err);
  }
};

export {
  getAllFormations,
  createFormation,
  getFormationById,
  updateFormationById,
};
