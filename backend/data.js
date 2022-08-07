import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('asdfg'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Nike BlackTik',
      aka: 'Nike-men-blacktik',
      category: 'Men',
      image: '/images/p6.jpg',
      price: 160,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.8,
      numReviews: 510,
      description:
        'Great design everyday shoe best for casual wear. Designed by Nike sold by Sneakr Gemz',
    },

    {
      name: 'Nike Colorful',
      aka: 'Nike-unisex-colorful',
      category: 'women',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 110,
      description:
        'Great design everyday shoe. Designed by Nike sold by Sneakr Gemz',
    },
    {
      name: 'Nike Blue',
      aka: 'nike-kids-blue',
      category: 'Kids',
      image: '/images/p3.jpg',
      price: 70,
      countInStock: 15,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 14,
      description:
        'High quality everyday shoe for kids. Designed by Nike sold by Sneakr Gemz',
    },
    {
      name: 'Fila BlackPink',
      aka: 'Fila-women-blackpink',
      category: 'Women',
      image: '/images/p11.jpg',
      price: 140,
      countInStock: 8,
      brand: 'Fila',
      rating: 4.0,
      numReviews: 212,
      description:
        'Great design everyday shoe superb flexible. Designed by Fila sold by Sneakr Gemz',
    },

    {
      name: 'Fila Red',
      aka: 'Fila-men-red',
      category: 'Men',
      image: '/images/p7.jpg',
      price: 115,
      countInStock: 8,
      brand: 'Adidas',
      rating: 4.6,
      numReviews: 110,
      description:
        'High quality running and everyday shoe. Designed by Adidas sold by Sneakr Gemz',
    },

    {
      name: 'Fila Black',
      aka: 'Fila-men-black',
      category: 'Men',
      image: '/images/p10.jpg',
      price: 160,
      countInStock: 8,
      brand: 'Fila',
      rating: 4.0,
      numReviews: 320,
      description:
        'Great design everyday shoe superb flexible. Designed by Fila sold by Sneakr Gemz',
    },

    {
      name: 'Adidas Red',
      aka: 'adidas-men-red',
      category: 'Men',
      image: '/images/p12.jpg',
      price: 200,
      countInStock: 8,
      brand: 'Adidas',
      rating: 4.7,
      numReviews: 487,
      description:
        'High quality running and everyday shoe. Designed by Adidas sold by Sneakr Gemz',
    },
    {
      name: 'Adidas Pink',
      aka: 'adidas-kids-pink',
      category: 'Kids',
      image: '/images/p9.jpg',
      price: 75,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 89,
      description:
        'High quality everyday shoe for kids. Designed by Adidas sold by Sneakr Gemz',
    },
    {
      name: 'Adidas Yellow',
      aka: 'adidas-men-yellow',
      category: 'Men',
      image: '/images/p8.jpg',
      price: 140,
      countInStock: 25,
      brand: 'Adidas',
      rating: 4.3,
      numReviews: 210,
      description:
        'High quality running and everyday shoe. Designed by Adidas sold by Sneakr Gemz',
    },
  ],
};
export default data;
