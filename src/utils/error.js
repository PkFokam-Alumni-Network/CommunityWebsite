export const handleError = (error) => {
  let errorObj = {};

  if (error?.response?.data?.detail) {
    errorObj.message =
      Array.isArray(error.response.data.detail) &&
      error.response.data.detail.length > 0 &&
      error.response.data.detail[0].msg
        ? error.response.data.detail[0].msg
        : error.response.data.detail;
  } else {
    errorObj.message = error.message;
  }
  return errorObj;
};
