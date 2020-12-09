require "faker"

puts "Seeding..."

  5.times do |i|
    user = User.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      # about_me: Faker::Hipster.paragraph,
      email: "test#{i}@example.com",
      password: "123456",
      image: Faker::Avatar.image(slug: "user #{i}", size: "300x300", format: "png", set: "set1")
  )
  puts user.email + " created"

  10.times do |p|
    post = Post.create(
      title: Faker::Commerce.product_name,
      # body: Faker::Hipster.paragraph,
      available: true,
      location: "Salt Lake, UT",
      price: 69,
      size: rand(1..3),
      user_id: user.id,
    )
  end
end

puts  "Done Seeding"