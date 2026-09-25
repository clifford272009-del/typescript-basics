import { Product, CreateProductInput} from '../models/product';

let products: Product[] = [
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
export function getAllProducts(): Product[] {
    return products;
}

export function getProductById(id: number): Product | undefined {
    return products.find(p => p.id === id);
}

export function getProductsByCategory(category: Product['category']): Product[] {
    return products.filter(p => p.category === category);
}

export function createProduct(input: CreateProductInput): Product {
    const newProduct: Product = {
        id: nextId++,
        ...input,
        createdAt: new Date()
    };

    products.push(newProduct);
    return newProduct;
}

export function updateProductStock(id: number, newStock: number): Product | null {
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

export function deleteProduct(id: number): boolean {
    const initialLength = products.length;
    products = products.filter(p => p.id !== id);
    return products.length < initialLength;
}