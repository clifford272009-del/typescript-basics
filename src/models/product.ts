export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: 'electronics' | 'clothing' | 'books' | 'food'; // Union type for category
    createdAt: Date;
}

export interface CreateProductInput {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: 'electronics' | 'clothing' | 'books' | 'food'; // Union type for category
}