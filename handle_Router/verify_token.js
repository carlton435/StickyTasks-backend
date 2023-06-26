import connection from "../APIs/connection_db.js";

const verifyTokenSQL = 'SELECT * FROM stickytasks.userinformation WHERE token = ?';

const verifyToken = (req, response) => {
    const { username, token } = req.query;

    connection.query(verifyTokenSQL, [token], (err, res) => {
        if (err) {
            response.json({
                status: 0,
                message: 'Cannot find the user',
            });
            return;
        }

        const userFound = res.length && res[0].username === username;
        response.json({
            status: userFound ? 1 : 0,
            message: userFound ? 'user found' : 'user not found',
            username: userFound ? username : undefined,
        });
    });
};

export default verifyToken;
