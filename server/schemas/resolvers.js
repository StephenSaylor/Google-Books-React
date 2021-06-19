const { User } = require('../models')

const resolvers = {
  // queries
  Query: {
    user: async (parent, { userId }) => {
      return await User.findById({_id: userId})
    },
    users: async () => {
      return await User.find({})
    }
  },

  // mutations
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
  }
}

module.exports = resolvers