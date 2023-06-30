import connection from "../../APIs/connection_db.js";

const deleteArticle = (req, res) => {
    const { tasks_id } = req.query
    const sql = `DELETE FROM tasks WHERE tasks_id = ?`
    connection.query(sql, [tasks_id], (err, result) => {
        if (err) {
            res.json({
                status: 0,
                message: 'delete faled'
            })
        }
        res.json({
            status: 1,
            message: 'delete success',
            data: result
        })
    })
}


export default deleteArticle