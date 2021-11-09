const {getAllUser} = require('../services/users')

const controller = {
    index: (req, res, next) => {
        const users = await getAllUser()
        res.render('users', {
            title: 'Users',
            users
        })
    }
}

module.exports = controller
