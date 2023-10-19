function errorHandler(error) {
  if (!error.response) return console.log(error);

  const { status, data } = error.response;

  if ([401, 403, 404, 422, 500].includes(status)) {
    throw data.errors.body[0];
  }

  console.dir(error);
}

export default errorHandler;
