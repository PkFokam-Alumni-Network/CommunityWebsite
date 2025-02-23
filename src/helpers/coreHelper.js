const userDataUtils = {
  getLoggedInUserData,
  setLoggedInUserData,
  hasUserSessionExpired,
};

export default userDataUtils;

function getLoggedInUserData() {
  let userInfo = localStorage.getItem("userData");
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return userInfo;
}

function getSessionExpiryTime() {
  return localStorage.getItem("session_expiry");
}

function hasUserSessionExpired() {
  const expiryTime = getSessionExpiryTime();
  if (expiryTime) {
    return new Date().getTime() > expiryTime;
  }
  return true;
}

const removeSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
  localStorage.removeItem("session_expiry");
};

function setLoggedInUserData(userData) {
  localStorage.setItem("userData", JSON.stringify(userData));
}

const setSession = (token) => {
  const expiresIn = 60 * 60 * 1000; // 1 hour in milliseconds
  const expiryTime = new Date().getTime() + expiresIn;

  localStorage.setItem("token", token);
  localStorage.setItem("expiryTime", expiryTime);
};
