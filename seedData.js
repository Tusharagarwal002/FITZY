const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Genre = require('./models/Genre');
const Category = require('./models/Category');
const Product = require('./models/Product');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 30000,
});

const seedDatabase = async () => {
    try {
        // Clear existing data
        await Genre.deleteMany({});
        await Category.deleteMany({});
        await Product.deleteMany({});

        // Create Genres
        const maleGenre = await Genre.create({ name: 'Male', status: true });
        const femaleGenre = await Genre.create({ name: 'Female', status: true });
        const kidsGenre = await Genre.create({ name: 'Kids', status: true });

        console.log('Genres created:', { maleGenre: maleGenre._id, femaleGenre: femaleGenre._id, kidsGenre: kidsGenre._id });

        // Create Categories
        const shirtCategory = await Category.create({ 
            name: 'Shirts', 
            genre: maleGenre._id, 
            status: true 
        });
        const pantsCategory = await Category.create({ 
            name: 'Pants', 
            genre: maleGenre._id, 
            status: true 
        });
        const dressCategory = await Category.create({ 
            name: 'Dresses', 
            genre: femaleGenre._id, 
            status: true 
        });
        const skirtCategory = await Category.create({ 
            name: 'Skirts', 
            genre: femaleGenre._id, 
            status: true 
        });
        const kidsShirtCategory = await Category.create({ 
            name: 'Kids Shirts', 
            genre: kidsGenre._id, 
            status: true 
        });

        console.log('Categories created successfully');

        // Create Products (Demo Clothes)
        const products = [
            // Male Shirts
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=Blue+Shirt',
                name: 'Classic Blue Shirt',
                color: 'Blue',
                sizes: ['S', 'M', 'L', 'XL'],
                description: 'A comfortable and stylish blue casual shirt perfect for everyday wear.',
                category: shirtCategory._id,
                gender: 'Male',
                price: 49.99,
                status: true
            },
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=White+Shirt',
                name: 'White Cotton Shirt',
                color: 'White',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                description: 'Premium quality white cotton shirt for formal and casual occasions.',
                category: shirtCategory._id,
                gender: 'Male',
                price: 59.99,
                status: true
            },
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=Black+Shirt',
                name: 'Black Slim Fit Shirt',
                color: 'Black',
                sizes: ['S', 'M', 'L', 'XL'],
                description: 'Modern black slim fit shirt with a contemporary design.',
                category: shirtCategory._id,
                gender: 'Male',
                price: 54.99,
                status: true
            },
            // Male Pants
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=Blue+Jeans',
                name: 'Classic Blue Jeans',
                color: 'Blue',
                sizes: ['28', '30', '32', '34', '36'],
                description: 'Comfortable and durable blue denim jeans for everyday wear.',
                category: pantsCategory._id,
                gender: 'Male',
                price: 79.99,
                status: true
            },
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=Black+Pants',
                name: 'Black Formal Pants',
                color: 'Black',
                sizes: ['28', '30', '32', '34', '36'],
                description: 'Elegant black formal pants perfect for office and formal events.',
                category: pantsCategory._id,
                gender: 'Male',
                price: 89.99,
                status: true
            },
            // Female Dresses
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=Red+Dress',
                name: 'Red Casual Dress',
                color: 'Red',
                sizes: ['XS', 'S', 'M', 'L', 'XL'],
                description: 'Beautiful red casual dress perfect for weekend outings.',
                category: dressCategory._id,
                gender: 'Female',
                price: 69.99,
                status: true
            },
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=Black+Dress',
                name: 'Black Evening Dress',
                color: 'Black',
                sizes: ['XS', 'S', 'M', 'L'],
                description: 'Elegant black evening dress for special occasions.',
                category: dressCategory._id,
                gender: 'Female',
                price: 129.99,
                status: true
            },
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=Floral+Dress',
                name: 'Floral Summer Dress',
                color: 'Multicolor',
                sizes: ['XS', 'S', 'M', 'L', 'XL'],
                description: 'Vibrant floral summer dress with a comfortable fit.',
                category: dressCategory._id,
                gender: 'Female',
                price: 59.99,
                status: true
            },
            // Female Skirts
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=Blue+Skirt',
                name: 'Blue Denim Skirt',
                color: 'Blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL'],
                description: 'Trendy blue denim skirt with a classic look.',
                category: skirtCategory._id,
                gender: 'Female',
                price: 54.99,
                status: true
            },
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=Black+Skirt',
                name: 'Black Midi Skirt',
                color: 'Black',
                sizes: ['XS', 'S', 'M', 'L'],
                description: 'Elegant black midi skirt perfect for work and social events.',
                category: skirtCategory._id,
                gender: 'Female',
                price: 64.99,
                status: true
            },
            // Kids Shirts
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=Red+Kids+Shirt',
                name: 'Red Kids T-Shirt',
                color: 'Red',
                sizes: ['2Y', '4Y', '6Y', '8Y', '10Y'],
                description: 'Fun and colorful red t-shirt for kids with comfortable fabric.',
                category: kidsShirtCategory._id,
                gender: 'Kids',
                price: 24.99,
                status: true
            },
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=Blue+Kids+Shirt',
                name: 'Blue Kids T-Shirt',
                color: 'Blue',
                sizes: ['2Y', '4Y', '6Y', '8Y', '10Y'],
                description: 'Soft blue t-shirt designed for active kids.',
                category: kidsShirtCategory._id,
                gender: 'Kids',
                price: 24.99,
                status: true
            },
            {
                imageUrl: 'https://via.placeholder.com/300x400?text=Green+Kids+Shirt',
                name: 'Green Kids T-Shirt',
                color: 'Green',
                sizes: ['2Y', '4Y', '6Y', '8Y', '10Y'],
                description: 'Vibrant green t-shirt with playful design for kids.',
                category: kidsShirtCategory._id,
                gender: 'Kids',
                price: 26.99,
                status: true
            }
        ];

        await Product.insertMany(products);
        console.log('Demo products created successfully!');

        // Display summary
        const genreCount = await Genre.countDocuments();
        const categoryCount = await Category.countDocuments();
        const productCount = await Product.countDocuments();

        console.log('\n========== Database Seeded Successfully ==========');
        console.log(`Total Genres: ${genreCount}`);
        console.log(`Total Categories: ${categoryCount}`);
        console.log(`Total Products: ${productCount}`);
        console.log('=================================================\n');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
