import connection from "../APIs/connection_db.js"

const verifyUserSQL = 'SELECT * FROM stickytasks.userinformation WHERE username = ? and password = ?'


const verifyUser = (req, response) => {
    const { username, password } = req.query

    connection.query(verifyUserSQL, [username, password], (err, res) => {
        if (err) {
            response.json({
                status: 0,
                message: 'Login Successful',
            })
            return
        }

        const token = res[0].token
        response.json({
            status: 0,
            message: 'Login Successful',
            data: {
                username,
                token
            }
        })
    })

}


export default verifyUser
