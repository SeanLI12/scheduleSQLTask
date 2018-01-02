var db_options = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mysqlyang",
    port: 3309
};
var mysql = new require("mysql");
var db = null;

db = mysql.createConnection(db_options);
db.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Mysql Connect");
});

//將mysql的client 存入 exports
exports.db = db;