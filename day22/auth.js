export function loginUser(username) {
  if (username.trim()) {
    sessionStorage.setItem("user", username);
    return username;
  }
  return null;
}

export function getLoggedInUser() {
  return sessionStorage.getItem("user") || null;
}
