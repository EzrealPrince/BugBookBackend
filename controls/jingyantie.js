let path = require('path');
let mysql = require('mysql');
var pool = mysql.createPool({
    host            : 'localhost',
    user            : 'root',
    password        : 'shanannan521',
    database        : 'weixintest',
});

module.exports = {
  jingyantieList (req, res) {
      pool.getConnection(function (err,conn) {
        if (err)
             return res.send('failed search jingyantie');
        let sql = 'select * from jingyantie';
        conn.query(sql, (err,rows) => {
              if(err){
                  conn.release();
                  return res.send('search jingyantie from database failed');
              }
              console.log(res.data);
              res.json({
                  code: 200,
                  msg: 'ok',
                  jingyantieList: rows
              });
              conn.release();
              console.log('search jingyantie');
        });
      });
    },  
};
