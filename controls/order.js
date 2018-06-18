var path = require('path');
let mysql = require('mysql');
var pool = mysql.createPool({
    host            : 'localhost',
    user            : 'root',
    password        : 'shanannan521',
    database        : 'weixintest',
});

module.exports = {
 orderAdd (req, res) {
    pool.getConnection(function (err,conn) {
        if (err)
             return res.send('failed add order');
        console.log(req.body);
        let order = req.body.order;
        let totalprice = req.body.totalprice;
        let address = req.body.address;
        let sql = 'insert into orderlist (name,phonenumber,address,orderlist,totalprice) values(?, ?, ?, ?, ?)';
        let arr = [address.name];
        arr.push[address.phonenumber];
        arr.push[address.province + address.city + address.district + address.detail]
        arr.push[order];
        arr.push[totalprice];
        conn.query(sql, arr, (err,rows) => {
              if(err){
                  conn.release();
                  return res.send('add order from database failed');
              }
              res.json({
                  code: 200,
                  msg: '下单成功'
              });
              console.log('add order');
        });
   });
 },


};

