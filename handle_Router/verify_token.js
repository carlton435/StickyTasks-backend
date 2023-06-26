import connection from "../APIs/connection_db.js";

const verifyTokenSQL = 'SELECT * FROM stickytasks.userinformation WHERE token = ?';

const verifyToken = (req, response) => {
    const { username, token } = req.query;

    connection.query(verifyTokenSQL, [token], (err, res) => {
        if (err) {
            response.json({
                status: 0,
                message: 'Cannot find the user',
            })
            return;
        }

        if (res.length && res[0].username === username) {
            response.json({
                status: 1,
                message: 'user found',
                username
            })
        } else {
            response.json({
                status: 0,
                message: 'user not found'
            })
        }
    })
}

export default verifyToken;
