addUser: function (username, email, role, password, date, callback) {
    var conn = db.getConnection();
    conn.connect(function (err) {
        if (err) {
            console.log(err);
            return callback(err, null)

        } else {
            console.log('Connected');
            var sql = 'insert into user(username, email, password) values (?,?,?,?,?)'
            conn.query(sql, [username, email.role, password, date], function (err, result) {
                if (err) {
                    console.log(err);
                    return callback(err, null)
                } else {
                    console.log((result.affectedRows));
                    return callback(null, result.affectedRows)

                }
            })

        }
    })
}


app.post('/api/user', urlencodedParser, function (req, res) {
            var username = req.body.username
            var email = req.body.email
            var role = req.body.role
            var password = req.body.password
            var date = new Date()
            var tanggalSekarang = date.body.date
            user.addUser(username, email, role, password, tanggalSekarang, function (err, result) {
                    if (!err) {
                        res.send(res)
                        console.log(result + ' record inserted');
                    } else {
                        res.send(err.statusCode)
                    }
                }
            })