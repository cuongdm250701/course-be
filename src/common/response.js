function wrapErrorResponse(error, message = null, ex = "") {
  return {
    status: 0,
    code: error.code,
    message: error.message || message,
    ex: ex || ex,
    data: {},
    error,
  };
}

module.exports = {
  error: wrapErrorResponse,
};
