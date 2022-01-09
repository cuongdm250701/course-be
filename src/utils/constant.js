class AppError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.name = "AppError";
  }
}

Error.create = function ({ code, message }) {
  const err = new AppError(code, message);
  return err;
};

module.exports = {
  ACTIVE: {
    ACTIVE: 1,
    DEACTIVE: 2,
    INACTIVE: 0,
  },
  ROLE: {
    ADMIN: 1,
    STUDENT: 2,
  },
  apiCode: {
    UNAUTHORIZED: Error.create({
      code: 403,
      message: "Không có quyền truy cập",
    }),
    INVALID_ACCESS_TOKEN: Error.create({
      code: 404,
      message: "Token không hợp lệ",
    }),
    NO_PERMISSION: Error.create({
      code: 11,
      message: "Không có quyền thực hiện chức năng",
    }),
    EMAIL_EXISTS: Error.create({
      code: 12,
      message: "Email đã tồn tại",
    }),
    ACCOUNT_EXISTS: Error.create({
      code: 13,
      message: "Tài khoản đã tồn tại",
    }),
    INVALID_PARAM: Error.create({
      code: 14,
      message: "Tham số không hợp lệ",
    }),
  },
};
