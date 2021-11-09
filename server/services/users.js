const { User } = require('../models')

const usersServices = {}

usersServices.getAllUsers = async () => {
  const users = await User.findAll({
    include: [
      { association: 'todos' }
    ]
  })
  return users
}

module.exports = usersServices