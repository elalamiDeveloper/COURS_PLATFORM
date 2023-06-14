import Formation from '../models/formationModel.js';

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
    const formations = await Formation.find().select('-__v');

    res.status(200).json({
      status: 'success',
      data: { formations },
    });
  } catch (err) {
    next(err);
  }
};

export { getAllFormations, createFormation };
