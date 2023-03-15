puts "Seeding golf data! 🏌️ 🏌️‍♂️ 🏌️‍♀️ "
puts "Destroying golf data! ☠️ "

Golfer.destroy_all
Course.destroy_all
TeeTime.destroy_all

#Golfers
mike = Golfer.create!(name: "Mike", password: "1234", password_confirmation: "1234", username: "mike")
jared = Golfer.create!(name: "Jared", password: "1234", password_confirmation: "1234", username: "jared")
lizzie = Golfer.create!(name: "Lizzie", password: "1234", password_confirmation: "1234", username: "lizzie")
jordan = Golfer.create!(name: "Jordan", password: "1234", password_confirmation: "1234", username: "jordan")

#Courses
indian_trails = Course.create!(name: "Indian Trails", address:"2776 Kalamazoo Ave SE Grand Rapids, MI 49507-3940", cost: 25.00, image: "https://www.indiantrailsgc.org/wp-content/uploads/sites/806/2020/05/Banner-photo.jpg")
cascade_hills = Course.create!(name: "Cascade Hills", address:"3725 Cascade Rd SE Grand Rapids, MI 49546-2144", cost: 25.00, image: "https://cdn.allsquaregolf.com/pictures/pictures/000/072/531/large/cascade_hills_country_club_cover_picture.jpg")
the_mines = Course.create!(name: "The Mines", address:"330 Covell Ave SW Grand Rapids, MI 49534-5960", cost: 25.00, image: "https://lightspeedweb.site/theminesgolfclub/wp-content/uploads/sites/125/2020/11/237.jpg")
grand_rapids_country_club = Course.create!(name: "Grand Rapids", address:"4300 Leonard St NE Grand Rapids, MI 49525-3380", cost: 25.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6MyacpVwZzC5NOLGa-MVjISkv1MckBsl7Q&usqp=CAU")
water_mark = Course.create!(name: "Water Mark", address:"5500 Cascade Rd SE Grand Rapids, MI 49546-9059", cost: 25.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrAmqsstlLmQhC-opt1sLiplbYP3s1OC0fA&usqp=CAU")

#TeeTimes
tee_times2 = TeeTime.create!(golfer: mike, course: cascade_hills, time: "9:30")
tee_times3 = TeeTime.create!(golfer: jared, course: the_mines, time: "9:30")
tee_times4 = TeeTime.create!(golfer: lizzie, course: grand_rapids_country_club, time: "9:30")
tee_times5 = TeeTime.create!(golfer: jordan, course: water_mark, time: "9:30")

puts 'Done Seeding'
