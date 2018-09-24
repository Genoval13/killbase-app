
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contracts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contracts').insert([
        {
          targetName : "Butch Coolidge",
          targetLocation : "Los Angeles",
          targetImg : "https://goo.gl/LCquZj",
          targetSecurity : 3,
          clientName: "Marcellus Wallace",
          budget : 40
        },
        {
          targetName : "The Jaguar",
          targetLocation : "Russian Embassy",
          targetImg : "https://goo.gl/6JWsiv",
          targetSecurity : 9,
          clientName: "Concerto",
          budget : 70
        },
        {
          targetName : "Norman Stansfield",
          targetLocation : "Manhattan",
          targetImg : "https://i.imgur.com/mdIk33E.jpg",
          targetSecurity : 7,
          clientName: "Mathilda",
          budget : 35
        },
        {
          targetName : "Santino D'Antonio",
          targetLocation : "Continental Hotel",
          targetImg : "https://goo.gl/fUPkYy",
          targetSecurity : 10,
          clientName: "Winston",
          budget : 25
        },
        {
          targetName : "Sonny Valerio",
          targetLocation : "Queens",
          targetImg : "https://goo.gl/8DHYUS",
          targetSecurity : 4,
          clientName: "Ray Vargo",
          budget : 10
        }
      ]);
    });
};
