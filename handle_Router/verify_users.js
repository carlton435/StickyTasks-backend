import connection from "../APIs/connection_db.js"

const verifySQL = 'SELECT * FROM stickytasks.userinformation WHERE token = ?';

const verifyUsers = (req, response) => {
    const { token } = req.query;

    connection.query(verifySQL, [token], (err, res) => {
        if (err) {
            console.error(err);
            return;
        }

        const message = res.length ? 'user found' : 'user not found';
        const username = res.length ? res[0].username : '';

        response.json({
            status: res.length ? 1 : 0,
            message,
            username
        })
    })
}

export default verifyUsers;
