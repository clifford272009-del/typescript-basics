"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
let users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        age: 30,
        isActive: true,
        createdAt: new Date("2024-01-15")
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        age: 25,
        isActive: true,
        createdAt: new Date("2024-01-20")
    }
];
let nextId = 3;
function getAllUsers() {
    return users;
}
function getUserById(id) {
    return users.find(user => user.id === id);
}
function createUser(input) {
    const newUser = {
        id: nextId++,
        name: input.name,
        email: input.email,
        age: input.age,
        isActive: true,
        createdAt: new Date()
    };
    users.push(newUser);
    return newUser;
}
function updateUser(id, input) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return null;
    }
    users[userIndex] = {
        ...users[userIndex],
        ...input
    };
    return users[userIndex];
}
function deleteUser(id) {
    const initialLength = users.length;
    users = users.filter(user => user.id !== id);
    return users.length < initialLength;
}
