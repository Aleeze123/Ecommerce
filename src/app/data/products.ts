export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;  
}

export const products: Product[] = [
  // Women’s Clothing
{
  id: '1',
  name: ' Classic Denim Jacket',
  price: 59.99,
  image: '/womens/d1.jpeg',
  description: 'Stay effortlessly stylish with our Classic Dean Denim Jacket for Women. This timeless piece features a flattering cut and durable denim, making it perfect for layering. With its classic blue wash and subtle distressing, it adds a relaxed vibe to any outfit. Whether paired with a casual dress or your favorite jeans, this jacket is an essential addition to your wardrobe for year-round chic.',
  category: 'Women\'s Clothing',
},
{
  id: '2',
  name: 'Classic White Shirt',
  price: 79.99,
  image: '/womens/white.jpeg',
  description: 'Elevate your wardrobe with our Classic White Womens Shirt. This timeless piece features a tailored fit and breathable fabric, making it perfect for any occasion. Whether you are dressing it up with a blazer for the office or pairing it with jeans for a casual outing, this versatile shirt offers endless styling options. The crisp white color ensures a fresh and polished look, making it a must-have staple in every womens closet.',
  category: 'Women\'s Clothing',
},
{
  id: '3',
  name: 'Denim Short Jacket',
  price: 79.99,
  image: '/womens/d2.jpeg',
  description: 'Elevate your casual style with our Chic Denim Short Jacket. Crafted from high-quality denim, this jacket features a trendy cropped fit and classic button-up design. Its versatile light wash makes it easy to pair with dresses, skirts, or high-waisted jeans. Perfect for layering on cooler days, this jacket adds a touch of effortless flair to any outfit, making it a must-have for your wardrobe.',
  category: 'Women\'s Clothing',
},
{
  id: '4',
  name: 'Classic Black Shirt',
  price: 79.99,
  image: '/womens/black.jpeg',
  description: 'Embrace elegance with our Classic Black Womens Shirt. Designed for versatility, this shirt features a flattering fit and soft, breathable fabric. Perfect for both professional settings and casual outings, it pairs beautifully with skirts, trousers, or jeans. The rich black color adds a touch of sophistication, making it an essential piece for any wardrobe. Whether layered or worn alone, this shirt is your go-to choice for effortless style.',
  category: 'Women\'s Clothing',
},
{
  id: '5',
  name: 'Sunny Yellow Shirt',
  price: 79.99,
  image: '/womens/imag.jpeg',
  description: 'Brighten up your wardrobe with our Sunny Yellow Womens Shirt! Crafted from lightweight, breathable fabric, this shirt offers both comfort and style. Its cheerful yellow hue is perfect for adding a pop of color to any outfit, whether you are dressing up for a brunch or going casual with jeans. Featuring a tailored fit and classic design, this versatile piece is a must-have for every fashionista looking to embrace sunny vibes.',
  category: 'Women\'s Clothing',
},
{
  id: '6',
  name: 'Cool Green Shirt',
  price: 79.99,
  image: '/womens/shirts.jpeg',
  description: 'Refresh your style with our Cool Green Womens Shirt! Made from soft, breathable fabric, this shirt offers a relaxed fit perfect for any occasion. The soothing green shade adds a touch of nature to your wardrobe, making it ideal for both casual outings and laid-back office wear. Pair it with your favorite jeans or shorts for an effortlessly chic look. Elevate your everyday ensemble with this versatile piece!',
  category: 'Women\'s Clothing',
},
{
  id: '7',
  name: 'Classic Maroon Shirt',
  price: 79.99,
  image: '/womens/shirt1.jpeg',
  description: 'Elevate your wardrobe with our Classic Maroon Womens Shirt! Crafted from comfortable, breathable fabric, this shirt features a flattering fit that suits any body type. The rich maroon color adds a touch of sophistication, making it perfect for both casual outings and semi-formal events. Style it with jeans or a skirt for an effortlessly chic look. Make a statement with this timeless piece!',
  category: 'Women\'s Clothing',
},
{
  id: '8',
  name: 'Sunny Yellow Shirt',
  price: 79.99,
  image: '/womens/shirt2.jpeg',
  description: 'Brighten up your wardrobe with our Sunny Yellow Womens Shirt! Made from lightweight, breathable fabric, this shirt offers a relaxed fit that’s perfect for all-day wear. The cheerful yellow hue adds a pop of color, making it ideal for sunny days or casual outings. Pair it with jeans, shorts, or skirts for a fresh and vibrant look that stands out in any crowd!',
  category: 'Women\'s Clothing',
},
{
  id: '9',
  name: 'Blush Pink Shirt',
  price: 79.99,
  image: '/womens/dress.jpeg',
  description: 'Embrace elegance with our Blush Pink Womens Shirt! Crafted from soft, breathable fabric, this shirt features a flattering fit that accentuates your silhouette. The delicate pink shade adds a touch of femininity, making it perfect for both casual and semi-formal occasions. Pair it with your favorite denim or dress it up with a skirt for a chic and stylish look!',
  category: 'Women\'s Clothing',
},

// Jewelry
{
  id: '10',
  name: 'Classic Pearl Necklace',
  price: 199.99,
  image: '/jewelry/Whitenecklace.jpeg',
  description: 'Elevate your elegance with the Classic Pearl Necklace. This timeless piece features lustrous, hand-selected pearls that radiate sophistication and charm. Perfect for both formal occasions and everyday wear, its versatile design effortlessly complements any outfit. The necklace is secured with a durable clasp, ensuring it remains a cherished accessory for years to come. With the Classic Pearl Necklace, embrace a look that transcends trends and celebrates timeless beauty.',
  category: 'Jewelry',
},
{
  id: '11',
  name: 'Radiant Gold Bracelet',
  price: 99.99,
  image: '/jewelry/SimpleBracelet.jpeg',
  description: 'Add a touch of sophistication with the Golden Elegance Bracelet. This sleek, high-quality gold piece is perfect for any occasion, effortlessly enhancing your style. Secure and comfortable, its a must-have accessory for your collection.',
  category: 'Jewelry',
},
{
  id: '12',
  name: 'Elegant Gold Ring',
  price: 299.99,
  image: '/jewelry/gold.jpeg',
  description: 'Elevate your elegance with the Classic Gold Ring This stunning piece features lustrous gold ring, perfect for adding a timeless touch to any outfit. Ideal for special occasions or everyday wear, its a must-have accessory that exudes grace and sophistication.',
  category: 'Jewelry',
},
{
  id: '13',
  name: 'Classic Pearl Bracelet ',
  price: 149.99,
  image: '/jewelry/percelbraclet.jpeg',
  description: 'Elevate your style with the Pearl Elegance Bracelet. This stunning piece features lustrous pearls, perfect for adding a timeless touch to any outfit. Ideal for special occasions or everyday wear, its a must-have accessory that exudes grace and sophistication.',
  category: 'Jewelry',
},
{
  id: '14',
  name: 'Radiant Diamond Ring',
  price: 89.99,
  image: '/jewelry/ring.jpeg',
  description: 'Discover the allure of the Radiant Diamond Ring, a breathtaking piece that showcases a brilliant diamond at its center. Crafted with exquisite precision, this ring is perfect for engagements or special celebrations, symbolizing love and commitment with timeless elegance.',
  category: 'Jewelry',
},
{
  id: '15',
  name: 'Golden Diamond Bracelet',
  price: 59.99,
  image: '/jewelry/braclet.jpeg',
  description: 'Elevate your style with the Golden Diamond Bracelet, a stunning accessory that combines the warmth of gold with the sparkle of diamonds. This elegant bracelet is perfect for any occasion, adding a touch of luxury and sophistication to your outfit. Make a statement with this exquisite piece that embodies both beauty and grace.',
  category: 'Jewelry',
},
{
  id: '16',
  name: 'Elegant Pearl Set',
  price: 179.99,
  image: '/jewelry/sett.jpeg',
  description: 'The Elegant Pearl Set is a timeless accessory that exudes sophistication and charm. Featuring lustrous pearls delicately crafted into a stunning necklace and matching earrings, this set is perfect for any occasion, from formal events to casual outings. Enhance your jewelry collection with this classic set that embodies grace and elegance.',
  category: 'Jewelry',
},
{
  id: '17',
  name: 'Radiant White Crystal Necklace',
  price: 129.99,
  image: '/jewelry/pearl.jpeg',
  description: 'The Radiant White Crystal Necklace is a stunning piece that captures light and attention. Crafted with shimmering white crystals, this necklace adds a touch of elegance to any outfit. Perfect for special occasions or everyday wear, it effortlessly elevates your style with its timeless beauty. A must-have for every jewelry collection!',
  category: 'Jewelry',
},
{
  id: '18',
  name: 'Golden Elegance Necklace',
  price: 39.99,
  image: '/jewelry/zircon.jpeg',
  description: 'The Golden Elegance Necklace is a luxurious statement piece that exudes sophistication. Made from high-quality gold, it features a sleek design that complements both casual and formal attire. Whether worn alone or layered with other necklaces, this timeless accessory adds a touch of glamour to any outfit. Perfect for elevating your everyday look or making a statement at special events!',
  category: 'Jewelry',
},

// Men's Clothing
{
  id: '19',
  name: 'Classic Green Button-Up Shirt',
  price: 29.99,
  image: '/mens/green-shirt.jpeg',
  description: 'Elevate your wardrobe with this Classic Green Button-Up Shirt. Crafted from breathable cotton, it offers a comfortable fit perfect for any occasion, from casual outings to semi-formal events. The rich green hue adds a vibrant touch, while the tailored design ensures a polished look. Pair it with jeans or chinos for a stylish, laid-back vibe!',
  category: 'Men\'s Clothing',
},
{
  id: '20',
  name: 'Black & White Checkered Winter ',
  price: 49.99,
  image: '/mens/m3.jpeg',
  description: 'Stay warm and stylish this winter with our Black & White Checkered Winter Shirt. Made from soft, durable flannel, this shirt offers comfort and warmth for chilly days. The timeless checkered pattern adds a classic touch, making it versatile for layering or wearing on its own. Perfect for both casual outings and cozy nights in!',
  category: 'Men\'s Clothing',
},
{
  id: '21',
  name: 'Classic Blue Button-Up Shirt',
  price: 99.99,
  image: '/mens/mr.jpeg',
  description: 'Elevate your wardrobe with our Classic Blue Button-Up Shirt. Crafted from high-quality cotton, this shirt features a crisp, clean design thats perfect for both casual and formal occasions. The rich blue color adds a refreshing touch to any outfit, making it a must-have staple for every mens closet. Ideal for layering or wearing solo, its a versatile piece that exudes style and sophistication.',
  category: 'Men\'s Clothing',
},
{
  id: '22',
  name: 'Cozy Knit Sweater',
  price: 39.99,
  image: '/mens/m5.jpeg',
  description: 'Stay warm and stylish with our Cozy Knit Sweater. Made from soft, breathable fabric, this sweater features a relaxed fit and ribbed cuffs for added comfort. The classic design and versatile color make it perfect for layering over shirts or wearing alone. Whether you are heading out for a casual day or enjoying a cozy night in, this sweater is the ideal choice for effortless style.',
  category: 'Men\'s Clothing',
},
{
  id: '23',
  name: ' Classic Green Button-Up Shirt',
  price: 19.99,
  image: '/mens/jacket.jpeg',
  description: 'Elevate your wardrobe with our Classic Green Button-Up Shirt. Crafted from breathable cotton, this shirt combines comfort and style effortlessly. Its timeless design features a tailored fit, button-down collar, and subtle detailing, making it perfect for both casual and formal occasions. Pair it with jeans for a relaxed look or dress it up with chinos for a smart-casual ensemble. A versatile staple for every mens closet!',
  category: 'Men\'s Clothing',
},
{
  id: '24',
  name: 'Classic Gray Button-Up Shirt',
  price: 39.99,
  image: '/mens/shirt.jpeg',
  description: 'Discover effortless style with our Classic Gray Button-Up Shirt. Made from soft, breathable fabric, this shirt offers a perfect blend of comfort and sophistication. Its tailored fit and crisp button-down collar make it suitable for any occasion, from casual outings to professional settings. Pair it with dark jeans for a laid-back look or dress it up with slacks for a polished appearance. A must-have staple for your wardrobe!',
  category: 'Men\'s Clothing',
},
{
  id: '25',
  name: 'Chic Stylish Shirt',
  price: 34.99,
  image: '/mens/m4.jpeg',
  description: 'Elevate your wardrobe with our Chic Stylish Shirt. Crafted from premium fabric, this shirt features a modern cut and trendy details that make it a standout piece. Whether you are heading to a brunch or a night out, its versatile design pairs effortlessly with jeans or tailored trousers. Available in eye-catching colors and patterns, its the perfect choice for those who want to make a fashion statement. Stay stylish, stay confident!',
  category: 'Men\'s Clothing',
},
{
  id: '26',
  name: 'Timeless Black Classic Suit',
  price: 199.99,
  image: '/mens/m1.jpeg',
  description: 'Step into sophistication with our Elegant Black Classic Suit. Perfect for formal events, this suit features a tailored cut that ensures a sharp and polished appearance. Crafted from premium fabric, it offers both comfort and style, making it an ideal choice for any occasion. Pair it with a stylish shirt for a timeless look that exudes confidence and elegance.',
  category: 'Men\'s Clothing',
},
{
  id: '27',
  name: 'Black and White Elegant Shirt',
  price: 149.99,
  image: '/mens/m2.jpeg',
  description: 'Elevate your casual wardrobe with our Chic Black and White Elegant T-Shirt. This stylish tee features a sleek design that seamlessly blends comfort with sophistication. Made from high-quality fabric, it offers a soft feel against the skin and a flattering fit. Perfect for dressing up or down, it pairs effortlessly with jeans or tailored pants for a versatile look. Embrace timeless elegance with this must-have addition to your collection!',
  category: 'Men\'s Clothing',
},

// Watches
{
  id: '28',
  name: ' Black Luxury Watch',
  price: 599.99,
  image: '/watches/watch5.jpeg',
  description: 'Elevate your style with our Black Luxury Watch, a perfect fusion of elegance and sophistication. Crafted with precision, this timepiece features a sleek black dial and a refined design that complements any outfit, whether for a business meeting or a night out. Its durable materials ensure longevity while making a bold statement on your wrist.',
  category: 'Watches',
},
{
  id: '29',
  name: 'Majestic Gold Watch',
  price: 199.99,
  image: '/watches/watch3.jpeg',
  description: 'Discover timeless elegance with our Golden Watch. This exquisite timepiece features a radiant gold finish that exudes luxury and sophistication. With a classic design and attention to detail, its perfect for any occasion—be it a formal event or a casual outing. Elevate your accessory game and make a lasting impression.',
  category: 'Watches',
},
{
  id: '30',
  name: 'Radiance Watch',
  price: 249.99,
  image: '/watches/watch4.jpeg',
  description: 'Elevate your style with our Shimmer Time watch, a perfect blend of elegance and sophistication. Crafted with precision, this timepiece features a gleaming dial that captures the light beautifully, ensuring you stand out in any setting. The sleek design is complemented by a durable yet luxurious strap, making it suitable for both formal occasions and everyday wear.',
  category: 'Watches',
},

{
  id: '31',
  name: 'Eclipse Gold Watch',
  price: 129.99,
  image: '/watches/watch2.jpeg',
  description: 'Experience elegance with the Eclipse Gold Watch. This striking timepiece pairs a rich black face with radiant gold details, striking the perfect balance between bold and refined. Designed for both durability and style, its stainless steel casing and adjustable strap ensure a comfortable fit. Ideal for both day and night, this watch is a timeless accessory that enhances any outfit, making it a must-have addition to your collection.',
  category: 'Watches',
},
{
  id: '32',
  name: 'Chic Time Fashion Watch',
  price: 89.99,
  image: '/watches/watch8.jpeg',
  description: 'Elevate your style with the Chic Time Fashion Watch. This contemporary piece features a sleek design with a minimalist face and a variety of vibrant strap options to suit any outfit. Whether you are dressing up for a special occasion or going casual this watch adds a touch of sophistication and flair. Lightweight and comfortable, its perfect for daily wear while making a bold statement. Timekeeping has never looked this good!',
  category: 'Watches',
},
{
  id: '33',
  name: 'Eclipse Black Watch',
  price: 349.99,
  image: '/watches/watch7.jpeg',
  description: 'Wmbrace timeless elegance with the Eclipse Black Watch. Crafted for those who appreciate the beauty of simplicity, this watch features a sleek, all-black design that exudes sophistication. The minimalist face ensures easy readability, while the durable strap guarantees comfort for all-day wear. Whether you are in a formal setting or enjoying a casual outing, the Eclipse Black Watch seamlessly complements any style, making it the perfect accessory for every occasion. Experience the allure of understated luxury with this essential timepiece.',
  category: 'Watches',
},
//women shoes
{
  id: '34',
  name: 'Soft Glow Women’s Shoes',
  price: 49.99,
  image: '/womenshoes/shoes11.jpeg',
  description: 'Discover effortless elegance with our Soft Glow Womens Shoes. Crafted from lightweight materials, these light-colored shoes combine comfort with style, making them ideal for any occasion. The subtle hue pairs beautifully with various outfits, ensuring you step out in confidence and charm!',
  category: 'Women\'s Shoes',
},
{
  id: '35',
  name: 'Blush Breeze Women’s Shoes',
  price: 89.99,
  image: '/womenshoes/shoes2.jpeg',
  description: 'Step into style with our Blush Breeze Womens Shoes, featuring a delightful pink and white combination. Designed for ultimate comfort and chic flair, these shoes are perfect for casual outings or dressed-up events. Their fresh, playful colors add a touch of elegance to any outfit, making them a must-have in your wardrobe!',
  category: 'Women\'s Shoes',
},
{
  id: '36',
  name: 'Monochrome Charm Womens Shoes',
  price: 39.99,
  image: '/womenshoes/shoes3.jpeg',
  description: 'Embrace timeless elegance with our Monochrome Charm Womens Shoes. The classic black and white design offers versatility for any occasion, effortlessly complementing both casual and formal looks. Crafted for comfort and style, these shoes are your perfect go-to for a chic, modern appearance!',
  category: 'Women\'s Shoes',
},
{
  id: '37',
  name: 'Pure Elegance Womens Shoes',
  price: 129.99,
  image: '/womenshoes/shoes4.jpeg',
  description: 'Step into sophistication with our Pure Elegance Womens Shoes. Featuring a crisp white design, these shoes provide a fresh and clean look that pairs beautifully with any outfit. Designed for all-day comfort and style, they are perfect for elevating your everyday wardrobe!',
  category: 'Women\'s Shoes',
},
{
  id: '38',
  name: 'Midnight Chic Womens Shoes',
  price: 129.99,
  image: '/womenshoes/shoes.jpeg',
  description: 'Embrace timeless elegance with our Midnight Chic Womens Shoes. Crafted in sleek black, these shoes effortlessly enhance any ensemble, from casual to formal. With a focus on comfort and style, they are the perfect choice for any occasion, ensuring you step out with confidence and grace.',
  category: 'Women\'s Shoes',
},
{
  id: '39',
  name: 'Golden Shine Womens Shoes',
  price: 129.99,
  image: '/womenshoes/shoes5.jpeg',
  description: 'Step into the spotlight with our Golden Shine Womens Shoes. These stunning footwear pieces feature a radiant golden hue, designed to add a touch of glamour to any outfit. Perfect for special occasions or a night out, they combine elegance and comfort, ensuring you shine brightly wherever you go.',
  category: 'Women\'s Shoes',
},

// Men's Shoes
{
  id: '40',
  name: 'Best White and Black Shoes',
  price: 59.99,
  image: '/mensshoes/mshoes1.jpeg',
  description: 'Discover the perfect blend of style and versatility with our White and Black Mix Shoes. These shoes offer a sleek design that complements any outfit, making them ideal for both casual and formal occasions. The classic black and white contrast not only looks great but also ensures you stand out effortlessly.',
  category: 'Men\'s Shoes',
},
{
  id: '41',
  name: 'Blue Shoes',
  price: 79.99,
  image: '/mensshoes/mshoes2.jpeg',
  description: 'Step out in style with our Blue Amazing Shoes! Crafted for comfort and flair, these shoes feature a vibrant blue hue that instantly elevates any outfit. Perfect for casual outings or making a statement, they blend functionality with fashion effortlessly.',
  category: 'Men\'s Shoes',
},
{
  id: '42',
  name: 'Brown and White Mix Elegant Shoes',
  price: 99.99,
  image: '/mensshoes/mshoes3.jpeg',
  description: 'Elevate your style with our Brown and White Mix Elegant Shoes. Combining rich brown hues with crisp white accents, these shoes offer a sophisticated look perfect for any occasion. Whether for a formal event or a smart-casual outing, they bring a touch of elegance to your ensemble.',
  category: 'Men\'s Shoes',
},
{
  id: '43',
  name: 'Dark Blue Sneakers',
  price: 29.99,
  image: '/mensshoes/mshoes4.jpeg',
  description: 'Step up your shoe game with our Dark Blue Sneakers. Their sleek design and versatile color make them perfect for both casual outings and active wear.',
  category: 'Men\'s Shoes',
},
{
  id: '44',
  name: 'Classic White Sneakers',
  price: 119.99,
  image: '/mensshoes/mshoes5.jpeg',
  description: 'Add sophistication with our Stylish White Loafers. Premium leather and a slip-on design make them perfect for business or smart-casual events.',
  category: 'Men\'s Shoes',
},
{
  id: '45',
  name: 'Stylish Contrast Joggers',
  price: 69.99,
  image: '/mensshoes/mshoes6.jpeg',
  description: 'Make a statement with our Stylish Contrast Joggers. The striking black and white mix adds a modern twist to your everyday look.',
  category: 'Men\'s Shoes',
},


]
