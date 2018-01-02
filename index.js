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
    res.json(rows)
    res.end("end");
}).listen(9610);
