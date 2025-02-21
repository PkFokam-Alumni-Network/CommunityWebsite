const userDataUtils = {
  getLoggedInUserData,
  setLoggedInUserData,
};

export default userDataUtils;

function getLoggedInUserData() {
  let userInfo = localStorage.getItem("userData");
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return userInfo;
}

function setLoggedInUserData(userData) {
  localStorage.setItem("userData", JSON.stringify(userData));
}
