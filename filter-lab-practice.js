const users = [
    { firstName: 'Niky',   lastName: 'Morgan',    favoriteColor: 'Blue',   favoriteAnimal: 'Jaguar' },
    { firstName: 'Tracy',  lastName: 'Lum',       favoriteColor: 'Yellow', favoriteAnimal: 'Penguin' },
    { firstName: 'Josh',   lastName: 'Rowley',    favoriteColor: 'Blue',   favoriteAnimal: 'Penguin' },
    { firstName: 'Kate',   lastName: 'Travers',   favoriteColor: 'Red',    favoriteAnimal: 'Jaguar' },
    { firstName: 'Avidor', lastName: 'Turkewitz', favoriteColor: 'Blue',   favoriteAnimal: 'Penguin' },
    { firstName: 'Drew',   lastName: 'Price',     favoriteColor: 'Yellow', favoriteAnimal: 'Elephant' }
  ];

function fullNameGreet (collection, cb) {
    for (const user of collection) {
        return cb (user);
    }
}

fullNameGreet (users, function (user) { return "Hello, " + user.firstName + " " + user.lastName; });


//   CHALLENGE: Review/code with looping and iteration sections then Iterate over collection and return a greeting for ALL names

//   CHALLENGE: make a pure version


// ME Note no need for for ... of iteration with #filter ()