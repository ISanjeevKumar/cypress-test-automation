const faker = require("faker");

module.exports = (on, config) => {
  on("task", {
    testdata() {
      user = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: "Password@123",
      };
      return user;
    },
  });
};
