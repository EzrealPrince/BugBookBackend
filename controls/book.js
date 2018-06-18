let path = require('path');
let mysql = require('mysql');
var pool = mysql.createPool({
    host            : 'localhost',
    user            : 'root',
    password        : 'shanannan521',
    database        : 'weixintest',
});

module.exports = {
   typeSearch (req, res) {
      console.log(req.body);
      pool.getConnection(function (err,conn) {
        if (err)
             return res.send('failed search book type');
        let booktype = req.body.booktype;
        let sql = 'select * from books_list where type = ?';
        let arr = [booktype];
        conn.query(sql, arr, (err,rows) => {
              if(err){
                  conn.release();
                  return res.send('search book type from database failed');
              }
              console.log(res.data);
              res.json({
                  code: 200,
                  msg: 'ok',
                  bookList: rows
              });
              conn.release();
              console.log('search book type');
        });
      });
    },
    


 bookSearch (req, res) {
    pool.getConnection(function (err,conn) {
        console.log(req.body);
        if (err)
             return res.send('failed search book');
        let bookname = req.body.bookname;
        console.log(bookname);
        let sql = "select * from books_list where book_titel like concat('%',?,'%');";
        let arr = [bookname];
        conn.query(sql, arr, (err,rows) => {
              if(err){
                  conn.release();
                  return res.send('search book from database failed');
              }
              res.json({
                  code: 200,
                  msg: 'ok',
                  bookList: rows
              });
               conn.release();
              console.log('search book');
        });
   });
 },
bookSeel( req, res) {
   pool.getConnection(function (err,conn) {
       console.log(req.body);
       if(err)
            return res.send('failed search book');
        let bookname = req.body.bookname;
        console.log(bookname);
        let sql = "select * from books_list where book_titel like concat('%',?,'%');";
        let arr = [bookname];
        conn.query(sql, arr, (err,rows) => {
              if(err){
                  conn.release();
                  return res.send('search book from database failed');
              }
              res.json({
                  code: 200,
                  msg: 'ok',
                  bookList: rows
              });
              conn.release();
              console.log('seel search book');
        });
   });
 },


 bookDetail (req,res) {
    console.log(req.body);
    pool.getConnection(function (err,conn) {
        if (err)
             return res.send('failed shabi');
        let bookname = req.body.bookname;
        let sql = 'select * from books_list where book_titel = ?';
        let arr = [bookname];
        conn.query(sql,arr, function (err,rows) {
             if (err){
                  conn.release();
                  return res.send('failed');
             }
             res.json({
                code: 200,
                msg: 'ok',
                bookList: rows
             });
             conn.release();
             console.log('bookDetail ok');
        });
        console.log('bookDetail');
    });
 },

};


