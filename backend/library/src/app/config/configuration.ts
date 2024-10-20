export default () => ({
  port: parseInt(process.env.PORT, 10) || 8082,
  baseUrl: process.env.BASE_URL || "http://127.0.0.1",
  upload: {
    baseUrl: process.env.UPLOAD_BASE_URL || "http://127.0.0.1:8082/uploads",
    apiPath: process.env.UPLOAD_API_PATH || "/uploads",
  },
  mongodb: {
    uri: process.env.MONGO_URI || "mongodb+srv://admin:user1234@cluster0.35bsc.mongodb.net/",
    dbName: process.env.DATABASE_NAME || "library-db",
  },
  // database: process.env.MONGODB_URI,
  // accessToken: {
  //   secret: process.env.ACCESS_TOKEN_SECRET || "secret",
  //   expiresIn: process.env.ACCESS_TOKEN_EXPIRES || "30m",
  // },

  accessToken: {
    secret: process.env.JWT_SECRET || "mfulibrary",
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES || "3d",
  },
  refreshToken: {
    secret: process.env.REFRESH_TOKEN_SECRET || "secret",
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES || "3d",
  },
  bcrypt: {
    saltOrRounds: Number(process.env.BCRYPT_SALT_OR_ROUNDS) || 10,
  },
});
