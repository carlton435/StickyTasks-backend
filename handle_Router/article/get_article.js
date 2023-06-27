import connection from "../../APIs/connection_db.js";

const getArticle = (req, res) => {
    const { username } = req.query
    const getArticleSql = 'select * from tasks where username=?'
    connection.query(getArticleSql, username, (err, result) => {
        if (err) {
            res.json({
                status: 0,
                message: 'cannot find the data' + err
            })
        }
        res.json({
            status: 1,
            message: 'get data success',
            data: result
        })
    })
}

export default getArticle