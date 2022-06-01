module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env("DATABASE_URI"),
        ssl: {rejectUnauthorized: false}
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: true,
        useUnifiedTopology: true,
      },
    },
  },
});