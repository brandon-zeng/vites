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
	Playground.forge().fetchAll().then(function(rows){
		console.log(JSON.stringify(rows));
		res.send(JSON.stringify(rows));
	}).catch(function(err){
		console.log(err);
		res.status(501).send(JSON.stringify(err));
	});
}
