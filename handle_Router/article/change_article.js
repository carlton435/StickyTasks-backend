import connection from "../../APIs/connection_db.js";

const changeArticle = (req, res) => {
    const { title, body, id } = req.query
    const changeArticleSql = 'UPDATE tasks SET title = ?, body = ? WHERE tasks_id = ?'
    connection.query(changeArticleSql, [title, body, id], (err, result) => {
        if (err) {
            res.json({
                status: 0,
                message: '更新失败' + err,
            })
        }
        res.json({
            status: 1,
            message: '更新成功',
            data: result
        })
    })


}

export default changeArticle