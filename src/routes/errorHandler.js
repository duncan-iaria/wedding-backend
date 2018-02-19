export const errorHandler = (error, request, response, next) => {
  // FOR DEV LOGGING
  console.log('error experienced: \n');
  console.error(error.stack);
  console.log('\n', JSON.stringify(error, null, 2));

  // FOR CUSTOMER/FRONT-END FACING
  const errorObj = createCustomError(error);
  response.status(errorObj.status).json(errorObj);
};

const createCustomError = error => {
  let tempError = {
    status: null,
    name: error.name,
    message: error.message,
  };

  switch (error.name) {
    case 'CastError':
      tempError.message = 'Could not find an asset with the provided ID';
      tempError.status = 400;
      break;
    case 'ValidationError':
      tempError.status = 400;
      break;
    default:
      tempError.status = 500;
      break;
  }

  return tempError;
};
