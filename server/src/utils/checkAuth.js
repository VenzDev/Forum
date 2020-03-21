import jwt from "jsonwebtoken";

const checkAuth = authHeader => {
  const authInfo = {
    user: "",
    err: ""
  };
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        authInfo.user = jwt.verify(token, process.env.SECRET_KEY);
        return authInfo;
      } catch (err) {
        authInfo.err = "invalid/expired token";
        return authInfo;
      }
    }
    authInfo.err = "invalid bearer format";
    return authInfo;
  }
  authInfo.err = "authorization must be provided";
  return authInfo;
};

export default checkAuth;
