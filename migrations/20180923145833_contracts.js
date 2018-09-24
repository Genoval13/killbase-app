
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contracts', (table) => {
        table.increments('contractId');
        table.string('targetName');
        table.string('targetLocation');
        table.string('targetImg');
        table.integer('targetSecurity');
        table.string('clientName');
        table.integer('budget');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contracts');
};
