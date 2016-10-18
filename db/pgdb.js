var knex = require('knex')({
	client: 'pg',
	connection: {
      user: 'postgres',
      database: 'testbz',
      port: 5432,
      host: '54.68.229.74',
      password: 'postgres'
  	},
});

var bookshelf = require('bookshelf')(knex);

var Playground = bookshelf.Model.extend({
	tableName: 'playground'
})

module.exports = function(res) {
	// knex.select().from('playground').then(function(rows){
	// 	console.log(rows);
	// 	res.send(JSON.stringify(rows));
	// }).catch(function(err){
	// 	console.log(err);
	// 	res.status(501).send(JSON.stringify(err));
	// });
	Playground.forge().fetchAll().then(function(rows){
		console.log(rows);
		res.send(JSON.stringify(rows));
	}).catch(function(err){
		console.log(err);
		res.status(501).send(JSON.stringify(err));
	});
}
