// src/models/user.ts

export interface User {
  id: number;
  name: string;
  email: string;
  age?: number;           // Optional property
  isActive: boolean;
  createdAt: Date;
}

// You can also define types for function parameters
export interface CreateUserInput {
  name: string;
  email: string;
  age?: number;
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
  age?: number;
  isActive?: boolean;
}