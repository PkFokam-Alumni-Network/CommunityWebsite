export default {
  getLoggedInUserData,
};

function getLoggedInUserData() {
  let userInfo = localStorage.getItem("userData");
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return userInfo;
}
