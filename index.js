//引入先前的mysql connect
var config = require("./mysql_connect.js");
var db = config.db;
var query = " \
SELECT visit.user_id AS userid, SUM(revenue.revenue) AS total  \
FROM `mysqlyang`.`piwik_log_conversion` AS revenue, `mysqlyang`.`piwik_log_visit` AS visit \
WHERE revenue.idvisit = visit.idvisit \
GROUP BY userid \
ORDER BY total desc \
limit 1";
var http = require('http');
var fs = require('fs');
//Query




http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(function () {
        var okoee;
        db.query(query, function (err, rows, fiels) {
            if (err) {
                console.log(err);
                return;
            }
            //rows是資料庫query出來的所有資料(JSON)
            console.log(rows);
            //fiels是欄位的資訊
            console.log(fiels);
            okoee = rows;
        });
        return okoee;
    })
    res.end("end");
}).listen(9615);
