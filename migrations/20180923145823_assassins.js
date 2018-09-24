
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassins', (table) => {
    table.increments('assassinId');
    table.string('assassinName');
    table.string('codeName');
    table.string('weapon');
    table.string('contactInfo');
    table.integer('age');
    table.integer('minPrice');
    table.float('rating');
    table.integer('kills');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assassins');
};
