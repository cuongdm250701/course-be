module.exports = {
  ACTIVE: {
    ACTIVE: 1,
    DEACTIVE: 2,
    INACTIVE: 3,
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
  },
};
