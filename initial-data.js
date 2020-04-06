const crypto = require('crypto');
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async keystone => {
  // Count existing users
  const {
    data: {
      _allUsersMeta: { count },
    },
  } = await keystone.executeQuery(
    `query {
      _allUsersMeta {
        count
      }
    }`
  );

  if (count === 0) {
    const password = randomString();
    const email = 'aleromrod@gmail.com';

    try {
      await keystone.executeQuery(
          `mutation initialUser($password: String, $email: String) {
            createUser(data: {email: $email, state: admin, password: $password}) {
              id
            }
          }`,
          {
            variables: {
              password,
              email,
            },
          }
      );
      console.log(`

      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
      `);
    } catch (e) {
      console.error(e);
    }

  }
};
