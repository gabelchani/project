module.exports = {
    HOST: "srv2",
    USER: "root",
    PASSWORD: "1234",
    DB: "shar_hashmaim",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  