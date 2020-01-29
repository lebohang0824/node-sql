const Pool = require("pg").Pool;
const pool = new Pool({
	user: "user",
	database: "db",
	password: "pass"
});

const addNewVisitor = (visitor_name, visitor_age, date_of_visit, time_of_visit, assistant, comments) => {

	const sql = 'INSERT INTO visitors (name, age, date_of_visit, time_of_visit, assistant, comments) VALUES ($1, $2, $3, $4, $5, $6)';
	const data = [visitor_name, visitor_age, date_of_visit, time_of_visit, assistant, comments];

	pool.query(sql, data, (err, res) => {
		if (err) throw err;

		// Results
		console.log(res.rows);
		pool.end();
	});
}

// addNewVisitor('Lerato Motaung', 21, '01-27-2020', '12:00', 'Bokamoso Gatebe', 'What a nice place.');

const listAllVisitors = () => {

	const sql = 'SELECT * FROM visitors';

	pool.query(sql, (err, res) => {
		if (err) throw err;

		// Results
		console.log(res.rows);
		pool.end();
	});
}

// listAllVisitors();

const deleteVisitor = id => {

	const sql = 'DELETE FROM visitors WHERE id = $1';
	const data = [id];

	pool.query(sql, data, (err, res) => {
		if (err) throw err;

		// Results
		console.log(res.rows);
		pool.end();
	});
}

// deleteVisitor(1);

const updateVisitor = (id, visitor_name, visitor_age, date_of_visit, time_of_visit, assistant, comments) => {

	const sql = 'UPDATE visitors SET name = $2, age = $3, date_of_visit = $4, time_of_visit = $5, assistant = $6, comments = $7 WHERE id = $1';
	const data = [id, visitor_name, visitor_age, date_of_visit, time_of_visit, assistant, comments];

	pool.query(sql, data, (err, res) => {
		if (err) throw err;

		// Results
		console.log(res.rows);
		pool.end();
	});
}

// updateVisitor(2, 'Lebohang Mokoena', 28, '01-30-2020', '15:30', 'Letlotlo Mokoena', 'N/A');

const viewOneVisitor = id => {

	const sql = 'SELECT * FROM visitors WHERE id = $1';
	const data = [id];

	pool.query(sql, data, (err, res) => {
		if (err) throw err;

		// Results
		console.log(res.rows);
		pool.end();
	});
}

// viewOneVisitor(2);

const deleteAllVisitors = () => {

	const sql = 'DELETE FROM visitors';

	pool.query(sql, (err, res) => {
		if (err) throw err;

		// Results
		console.log(res.rows);
		pool.end();
	});
}

// deleteAllVisitors();