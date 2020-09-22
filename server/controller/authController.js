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
    truncate: (req,res) => {},
    signup: (req,res) => {
        let { firstname, lastname, email } = req.body;
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
};
