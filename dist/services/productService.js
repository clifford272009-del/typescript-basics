"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = getAllProducts;
exports.getProductById = getProductById;
exports.getProductsByCategory = getProductsByCategory;
exports.createProduct = createProduct;
exports.updateProductStock = updateProductStock;
exports.deleteProduct = deleteProduct;
let products = [
    {
        id: 1,
        name: "MacBook Pro",
        description: "16-inch laptop with M3 chip",
        price: 2499,
        stock: 15,
        category: 'electronics',
        createdAt: new Date("2024-01-10")
    },
    {
        id: 2,
        name: "The Progmatic Programmer",
        description: "Classic software engineering book",
        price: 39.99,
        stock: 50,
        category: 'books',
        createdAt: new Date("2024-01-12")
    }
];
let nextId = 3;
function getAllProducts() {
    return products;
}
function getProductById(id) {
    return products.find(p => p.id === id);
}
function getProductsByCategory(category) {
    return products.filter(p => p.category === category);
}
function createProduct(input) {
    const newProduct = {
        id: nextId++,
        ...input,
        createdAt: new Date()
    };
    products.push(newProduct);
    return newProduct;
}
function updateProductStock(id, newStock) {
    const product = products.find(p => p.id === id);
    if (!product) {
        return null;
    }
    if (newStock < 0) {
        throw new Error("Stock cannot be negative");
    }
    product.stock = newStock;
    return product;
}
function deleteProduct(id) {
    const initialLength = products.length;
    products = products.filter(p => p.id !== id);
    return products.length < initialLength;
}
