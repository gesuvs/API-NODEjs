var express = require('express');
var fileUpload = require('express-fileupload');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var sql = require("mssql");
var path = require('path');
var app = express();
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

var port = 5000;
// configurando a conexao com o banco
var db = {
	server: 'gameoverserve.database.windows.net',
	user: 'adminGO',
	password: 'GameOver0',
	database: 'DataBaseGO', //update me
	options:
	{
		database: 'DataBaseGO', //update me
		encrypt: true
	}
};


//conexao com o banco

sql.connect(db, function (err) {

	if (err) console.log(err);

	// create Request object
	var request = new sql.Request();

	// query to the database and get the records
	request.query('select * from users', function (err, recordset) {
		if (!err) {
			console.log(recordset)
		}
	});
});


/*
var db = {
	server: 'gameoverserve.database.windows.net',
	user: 'adminGO',
	password: 'GameOver0',
	options:
	{
		database: 'DataBaseGO', //update me
		encrypt: true
	}
};

var connection = new Connection(db);
connection.on('connect', function (err) {
	// If no error, then good to proceed.
	console.log("Connected");
	executeStatement();
});



function executeStatement() {
	request = new Request('select * from users', function (err, rowCount, rows) {

		if (err) {
			//callback(err)
			console.log(err);
		}
	});

	var result = "";
	request.on('row', function (columns) {
		columns.forEach(function (column) {
			if (column.value === null) {
				console.log('NULL');
			} else {
				result += column.value + " ";
			}
		});
		console.log(result);
		result = "";
	});

	request.on('done', function (rowCount, more) {
		console.log(rowCount + ' rows returned');
	});
		connection.execSql(request);
}



global.db = db;

app.set('port', process.env.port || port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
*/
app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});