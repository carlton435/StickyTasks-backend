import connection from "../../APIs/connection_db.js";

const changeArticle = (req, res) => {
    const { title, body, tasks_id } = req.query
    const changeArticleSql = 'UPDATE tasks SET title = ?, body = ? WHERE tasks_id = ?'
    connection.query(changeArticleSql, [title, body, tasks_id], (err, result) => {
        if (err) {
            res.json({
                status: 0,
                message: 'update false' + err,
            })
            return
        }
        res.json({
            status: 1,
            message: 'update success',
            data: result
        })
    })


}

export default changeArticle