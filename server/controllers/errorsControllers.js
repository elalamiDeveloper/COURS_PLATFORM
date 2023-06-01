const devErrorHandler = (err, res) => {
  res.status(err.isOperational ? err.statusCode : 500).json({
    status: err.isOperational ? err.status : 'error',
    err: err,
    message: err.message,
    stack: err.stack,
  });
};

const prodErrorHandler = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.log(`ERROR: ${err.message}`);

    res.status(500).json({
      status: 'error',
      message: 'Something went wrong',
    });
  }
};

const globalErrorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') devErrorHandler(err, res);
  if (process.env.NODE_ENV === 'production') prodErrorHandler(err, res);
};

export { globalErrorHandler };
