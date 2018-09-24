
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {
          assassin: 1, 
          target: 3
        },
        
        {
          assassin: 2, 
          target: 5
        },

        {
          assassin: 3, 
          target: 1
        },

        {
          assassin: 4,
          target: 2
        },

        {
          assassin: 5,
          target: 4
        }
      ]);
    });
};
