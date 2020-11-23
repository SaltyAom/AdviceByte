const knex = require('./db/knex')

const loginUser = user => {
    const informationUser = [
        "User_ID",
        "User_Name",
        "Password",
        "First_Name",
        "Last_Name",
        "E_mail",
        "MBTI_ID"
    ];

};
exports.findUserById = async 