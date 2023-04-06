const authConfig = {
  meEndpoint: "/auth/me",
  loginEndpoint: "/jwt/login",
  registerEndpoint: "/jwt/register",
  storageTokenKeyName: "accessToken",
  onTokenExpiration: "refreshToken", // logout | refreshToken
};
export default authConfig;
