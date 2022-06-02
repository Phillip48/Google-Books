const { User } = require('../models');
const { authenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
   me: async (parent, { id }) => {
       return User.find({})
   }
   
  },
  Mutation: {
    
  },
};

module.exports = resolvers;
