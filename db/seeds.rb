puts "Seeding golf data! 🏌️ 🏌️‍♂️ 🏌️‍♀️ "
puts "Destroying golf data! ☠️ "

Golfer.destroy_all
Course.destroy_all
TeeTime.destroy_all

#Golfers
josh = Golfer.create!(name: "Josh", password: "1234", username: "josh")
mike = Golfer.create!(name: "Mike", password: "1234", username: "mike")
jared = Golfer.create!(name: "Jared", password: "1234", username: "jared")
lizzie = Golfer.create!(name: "Lizzie", password: "1234", username: "lizzie")
jordan = Golfer.create!(name: "Jordan", password: "1234", username: "jordan")

#Courses
indian_trails = Course.create!(name: "Indian Trails", address:"2776 Kalamazoo Ave SE Grand Rapids, MI 49507-3940", state: "MI", cost: 25.00, image: "https://www.indiantrailsgc.org/wp-content/uploads/sites/806/2020/05/Banner-photo.jpg", final_score: 30)
cascade_hills = Course.create!(name: "Cascade Hills", address:"3725 Cascade Rd SE Grand Rapids, MI 49546-2144", state: "MI", cost: 25.00, image: "https://cdn.allsquaregolf.com/pictures/pictures/000/072/531/large/cascade_hills_country_club_cover_picture.jpg", final_score: 30)
the_mines = Course.create!(name: "The Mines", address:"330 Covell Ave SW Grand Rapids, MI 49534-5960", state: "MI", cost: 25.00, image: "https://lightspeedweb.site/theminesgolfclub/wp-content/uploads/sites/125/2020/11/237.jpg", final_score: 30)
grand_rapids_country_club = Course.create!(name: "Grand Rapids", address:"4300 Leonard St NE Grand Rapids, MI 49525-3380", state: "MI", cost: 25.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6MyacpVwZzC5NOLGa-MVjISkv1MckBsl7Q&usqp=CAU", final_score: 30)
water_mark = Course.create!(name: "Water Mark", address:"5500 Cascade Rd SE Grand Rapids, MI 49546-9059", state: "MI", cost: 25.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrAmqsstlLmQhC-opt1sLiplbYP3s1OC0fA&usqp=CAU", final_score: 30)

#TeeTimes
tee_times1 = TeeTime.create!(golfer: josh, drink_rating: 4, greens: "fast", course: indian_trails, time: 800)
tee_times2 = TeeTime.create!(golfer: mike, drink_rating: 5, greens: "slow", course: cascade_hills, time: 9000)
tee_times3 = TeeTime.create!(golfer: jared, drink_rating: 3, greens: "fast", course: the_mines, time: 1000)
tee_times4 = TeeTime.create!(golfer: lizzie, drink_rating: 1, greens: "slow", course: grand_rapids_country_club, time: 1100)
tee_times5 = TeeTime.create!(golfer: jordan, drink_rating: 2, greens: "fast", course: water_mark, time: 1200)

puts 'Done Seeding'
