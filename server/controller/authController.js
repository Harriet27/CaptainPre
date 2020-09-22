const { db } = require('../database/connection');
const { createJWTToken } = require('../helper/jwt');
const encrypt = require('../helper/encrypt');

module.exports = {
    allUser: (req,res) => {
        let sql = `SELECT * FROM users`;
        db.query(sql, (err, results) => {
            if (err) {
                res.status(500).send(err.message);
            }
            res.status(200).send({
                status: 'Success',
                data: results,
                message: 'All users fetched!',
            });
        });
    },
    register: (req,res) => {
        let { firstname, lastname, username, email, password } = req.body;
        let sql = `INSERT INTO users (firstname, lastname, email) VALUES ('${firstname}', '${lastname}', '${email}')`;
        db.query(sql, (err,insert) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                let sql = `SELECT * FROM users WHERE id = ${insert.insertId}`;
                db.query(sql, (err,results) => {
                    if (err) {
                        res.status(500).send({
                            status : 'Failed!',
                            message : err.message,
                        });
                    }
                    let token = createJWTToken({...results[0]});
                    res.status(200).send({
                        status : 'Success!',
                        data : {
                            ...results[0],
                            token,
                        },
                        message : 'Account Created',
                    });
                });
            }
        });
    },
    login: (req,res) => {
        let { username, password } = req.body;
        let sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${encrypt(password)}'`;
        db.query(sql, (err,results) => {
            if (err) {
                res.status(500).send(err.message);
            }
            if (results.length !== 0) {
                let token = createJWTToken({...results[0]});
                res.status(200).send({
                    status: 'Success!',
                    data: {
                        ...results[0],
                        token,
                    },
                    message: 'Log In Successful'
                });
            } else {
                res.status(404).send({
                    status: 'Not Found!',
                    message: 'User Not Found',
                });
            }
        });
    },
    keepLogin: async (req,res) => {
        let { id } = req.user;
        let sql = `SELECT * FROM users WHERE id = ${id}`;
        let response = await query(sql);
        let token = createJWTToken({...response[0]});
        res.status(200).send({
            status : 'Success!',
            data : {
                ...response[0],
                token,
            },
            message : 'Authorized',
        });
    },
};
