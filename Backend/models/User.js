const knex = require('../db/db.js')



exports.findOneByUsername = async (username, password) => {
    let username = await knex
        .select(['User_name', 'Password'])
        .from('User_Information')
        .where({
            'User_name': username,
            'Password': bcrypt(password)
        })
}

exports.create = async (username, password, firstname, lastname, birthday) => {
    var hash = bcrypt.hashSync(password, process.env.SESSION_SECRET);
    knex('User_Information').insert([{ User_name: username }, { Password: password }, { x: 10, y: 20 }])
};

