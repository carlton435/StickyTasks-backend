import mysql from 'mysql'
const connection = mysql.createConnection({
    database: 'stickytasks',
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
})
export default connection

connection.connect((error) => {
    if (error) {
        console.error('连接失败：', error);
    } else {
        console.log('连接成功！');
        // 进行其他数据库操作...
        // connection.query(...)
        // connection.end();
    }
});







