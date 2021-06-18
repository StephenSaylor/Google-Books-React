const { User } = require('../models')

const resolvers = {
  // queries
  Query: {
    user: async (parent, { userId }) => {
      return await User.findById(userId)
    },
    users: async () => {
      return await User.find({})
    }
  },

  // mutations
  Mutation: {
    createUser: async (parent, body) => {
      return await User.create(body)
    }
  }
}

module.exports = resolvers