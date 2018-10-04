# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin123324@mail.com', password: 'password1232', password_confirmation: 'password1232') if Rails.env.development?

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
