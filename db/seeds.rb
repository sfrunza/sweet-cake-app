# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin12345678912345678@mail.com', password: 'password12345678912345678', password_confirmation: 'password12345678912345678') if Rails.env.development?

costumer_first = Costumer.create(
  name: "Sparkling Negroni",
  email: "john@gmail.com",
  message: "Combine the first three ingredients in an ice-filled cocktail shaker. Shake until cold, then strain the mixture into a glass. Top with prosecco, and garnish with the orange twist."
)

costumer_second = Costumer.create(
  name: "Pineapple-Jalapeño Margarita",
  email: "linda@mailhot.ru",
  message: "Pour the lime juice and jalapeños into a shaker and muddle with the back of a wood spoon. Fill with ice. Pour in tequila, pineapple juice, and Grand Marnier. Shake until chilled. Dip the rim of a rocks glass in water, then dip it in coarse salt. Fill the glass with ice, and strain the cocktail into the glass. Garnish with pineapple wedge and peel and jalapeño slices."
)







picture = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture1 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture2 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture3 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture4 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture5 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture6 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture7 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture8 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture9 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture10 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture11 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture12 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture13 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
picture14 = Picture.create(
  name: "niceOne",
  description: "This is a test Picture",
  picture: "app/public/uploads/picture/picture/6/pexels-photo-106399.jpeg"
)
