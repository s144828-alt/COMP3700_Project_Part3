CREATE DATABASE sakan_store;
USE sakan_store;

 USERS
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO users (name, email) VALUES
('Ali', 'ali@gmail.com'),
('Sara', 'sara@gmail.com'),
('Omar', 'omar@gmail.com'),
('Noor', 'noor@gmail.com'),
('Hassan', 'hassan@gmail.com');

PRODUCTS
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,3)
);

INSERT INTO products (name, price) VALUES
('Meal Plan', 2.500),
('First Aid Kit', 5.000),
('Engineering Book', 15.000),
('Snacks Box', 1.200),
('Notebook Set', 0.800);


CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT
);

INSERT INTO orders (user_id, product_id, quantity) VALUES
(1,1,2),
(2,2,1),
(3,3,3),
(4,4,1),
(5,5,4);