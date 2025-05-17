const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // If no statusCode is already set, default to 500
    const statusCode = err.status || res.statusCode || 500;
  
    res.status(statusCode).json({
      success: false,
      message: err.message || 'Internal Server Error',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  };
  
  module.exports = errorHandler;