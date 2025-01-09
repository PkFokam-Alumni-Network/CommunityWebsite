export const handleError = (error) => {
  return error.response && error.response.data.detail
    ? { message: error.response.data.detail }
    : { message: error.message };
};
