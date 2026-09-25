1.Catching Type Mismatches and Missing Properties at Compile Time: Instead of waiting for runtime errors or silent undefined bugs (e.g., trying to access a property that doesn't exist), TypeScript flags invalid property accesses, wrong argument types, and missing required fields directly in the IDE as you write code.

2.Accessing Non-Existent Properties on Nullable Returns: In the getUserById(id) or user?.phoneNumber example, JavaScript would silently evaluate user?.phoneNumber to undefined without letting you know that phoneNumber was never declared on the User model in the first place. TypeScript caught this immediately at build time with Property 'phoneNumber' does not exist on type 'User'.

3.Interface vs. Type Alias:

interface: Used primarily to define object shapes and classes. Interfaces support declaration merging (adding fields across multiple declarations) and can be extended using extends.

type: Used for defining primitives, unions (e.g., 'electronics' | 'books'), tuples, and complex mapped/utility types.

When to use: Use interface by default for public API contracts, data models, and object structures. Use type when defining union types, primitive aliases, or utility types (such as Omit or Pick).

4.Module Scoping and Encapsulation: By default, TypeScript files without imports/exports are treated as global scripts. Using import and export turns a file into an isolated module, preventing variable name collisions across the codebase and cleanly exposing only the necessary functions, types, and constants.

5.Interfaces are Completely Stripped Out: TypeScript interfaces do not generate any code in the compiled JavaScript files (/dist). TypeScript's type system exists purely at compile time for developer tooling and type checking. Because JavaScript runtime engines do not support type annotations or interfaces, TypeScript completely removes them during compilation.

6.Review Interface Example:

TypeScript
// src/models/review.ts

export interface Review {
  id: number;
  userId: number;       // Foreign key referencing User
  productId: number;    // Foreign key referencing Product
  rating: number;       // e.g., 1 to 5
  comment: string;
  createdAt: Date;
}

// Utility type for creating a review (omitting auto-generated fields)
export type CreateReviewInput = Omit<Review, 'id' | 'createdAt'>;