export const errorHandler = (error, request, response, next) => {
  console.error(error.stack);
  console.log('\n', error);

  const errorObj = createCustomError(error);
  response.status(500).json(error);
};

const createCustomError = error => {
  const tempError = {
    message: error.message,
  };

  return tempError;
};
