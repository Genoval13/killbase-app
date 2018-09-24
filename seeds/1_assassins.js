
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins').del()
    .then(function () {
      // Inserts seed entries
      return knex('assassins').insert([
        {
          assassinName: "Alexander Duggan",
          codeName: "The Jackal",
          weapon: "Sniper rifle",
          contactInfo : "jackal@gmail.com",
          age: 31,
          minPrice: 45,
          rating : 7.5,
          kills : 28
        },
        {
          assassinName: "Anton Chigurh",
          codeName: "Old Man",
          weapon: "Pneumatic bolt gun",
          contactInfo : "pneujackcity@gmail.com",
          age: 52,
          minPrice: 40,
          rating : 9,
          kills : 72
        },
        {
          assassinName: "",
          codeName: "Ghost Dog",
          weapon: "Pistol",
          contactInfo : "ghostdog@gmail.com",
          age: 28,
          minPrice: 20,
          rating : 6.5,
          kills : 35
        },
        {
          assassinName: "Jason Bourne",
          codeName: "",
          weapon: "Parkour",
          contactInfo : "jb@gmail.com",
          age: 27,
          minPrice: 25,
          rating : 7,
          kills : 48
        },
        {
          assassinName: "John Wick",
          codeName: "Baba Yaga",
          weapon: "Lots of guns",
          contactInfo : "babayaga@gmail.com",
          age: 35,
          minPrice: 50,
          rating : 9.5,
          kills : 433
        },
        {
          assassinName: "Jules Winnfield",
          codeName: "",
          weapon: "Pistol",
          contactInfo : "bmf@gmail.com",
          age: 26,
          minPrice: 15,
          rating : 6.5,
          kills : 13
        },
        {
          assassinName: "Leon",
          codeName: "The Professional",
          weapon: "Everything",
          contactInfo : "leon@gmail.com",
          age: 41,
          minPrice: 30,
          rating : 8.5,
          kills : 87
        },
        {
          assassinName: "Nikita Mears",
          codeName: "Nikita",
          weapon: "Silenced pistols",
          contactInfo : "nikita@gmail.com",
          age: 28,
          minPrice: 30,
          rating : 7,
          kills : 32
        },
        {
          assassinName: "Nikita Mears",
          codeName: "La Femme Nikita",
          weapon: "Silenced pistols",
          contactInfo : "nikita@gmail.com",
          age: 28,
          minPrice: 30,
          rating : 7,
          kills : 32
        },
        {
          assassinName: "Pickle Rick",
          codeName: "Solenya",
          weapon: "Lasers and office supplies",
          contactInfo : "rsanchez@gmail.com",
          age: 60,
          minPrice: 0,
          rating : 8,
          kills : 24
        }
      ]);
    });
};
