export const handleError = (error) => {
  console.log(error);
  return error.response && error.response.data.detail
    ? { message: error.response.data.detail }
    : { message: error.message };
};
