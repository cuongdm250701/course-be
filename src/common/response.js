const _ = require("lodash");

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

function wrapSuccessResponse(
  data,
  message = "Thành công",
  count = null,
  page = 0
) {
  return {
    status: 1,
    code: 1,
    data,
    msg: message,
    pagging: count
      ? { page, totalItemCount: count, limit: config.PAGING_LIMIT }
      : null,
  };
}

function wrapHandleWithResposeJSON(handler) {
  return async (req, res, next) => {
    try {
      let result = await handler(req, res);
      if (!_.isObject(result) || !result.data) {
        result = { data: result };
      }
      res.json({
        status: 1,
        code: 1,
        msg: "Thành công",
        ...result,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: 0,
        code: error.code,
        msg: error.message,
        data: {},
      });
      next(error);
    }
  };
}

module.exports = {
  error: wrapErrorResponse,
  wrapSuccessResponse,
  wrapHandleWithResposeJSON,
};
