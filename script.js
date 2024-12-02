        const app = document.getElementById('app');

        const products = [
            {
                name: 'BMW i8',
                price: 'Rs. 40,000,000/-',
                imageUrl: 'bmw.jpg'
            },
            {
                name: 'IPhone 16 pro max',
                price: 'Rs. 519999/-',
                imageUrl: 'iphone.jpg'
            },
            {
                name: 'T10 ultra 2 smart watch',
                price: '1399/-.',
                imageUrl: 'smart.jpg'
            },
            {
                name: 'Macbook Pro',
                price: 'Rs. 339,999/-',
                imageUrl: 'macbook.jpg'
            }
        ];

        const headerHTML = `
            <header class="bg-orange-600 text-white p-4">
                <div class="container mx-auto flex justify-between items-center">
                    <h1 class="text-xl font-bold">Shop</h1>
                    <nav>
                        <ul class="flex space-x-4">
                            <li><a href="#" class="hover:text-gray-300">Home</a></li>
                            <li><a href="#" class="hover:text-gray-300">Shop</a></li>
                            <li><a href="#" class="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;

        const heroHTML = `
            <section class="bg-red-500 text-white text-center py-16">
                <h2 class="text-3xl font-semibold">Discover the Best Products</h2>
                <p class="mt-4">Top brands, best prices, and fast shipping!</p>
            </section>
        `;

        let productsHTML = `
            <section class="container mx-auto py-8">
                <h3 class="text-2xl font-semibold text-center mb-8">Products</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        `;

        products.forEach(product => {
            productsHTML += `
                <div class="product-card bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-56 object-cover">
                    <div class="p-4">
                        <h4 class="font-semibold text-lg">${product.name}</h4>
                        <p class="text-gray-500 mt-2">${product.price}</p>
                        <button class="w-full mt-4 bg-red-300 text-white py-2 rounded hover:bg-red-700 focus:outline-none">Add to Cart</button>
                    </div>
                </div>
            `;
        });

        productsHTML += `
                </div>
            </section>
        `;

        const footerHTML = `
            <footer class="bg-orange-800 text-white text-center py-4">
                <p>&copy; 2024 | Hasnain Ali. All Rights Reserved.</p>
            </footer>
        `;

        app.innerHTML = headerHTML + heroHTML + productsHTML + footerHTML;

        const addToCartButtons = document.querySelectorAll('button');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Item added to cart!');
            });
        });