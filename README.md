eCommerce Website Project
🔖 Introduction
About the project
This project is a full-stack eCommerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js), designed for the fashion industry. 
The goal was to create a modern online store where users can explore clothing, manage carts, and place orders, while providing an admin dashboard for product management. 
The project was developed to learn and apply React with virtual DOM, Firebase authentication, and MongoDB schemas, resulting in a functional prototype deployed on Vercel.

🤔 Problem space
Problems to solve/Requirements to Create

Problem/Requirement: Users cannot easily navigate or filter clothing items.

Extended problem statement: Users need a seamless way to browse and filter clothes by category, size, and price, but the current static site lacks dynamic navigation and filtering options.
Current solution: Users manually search or rely on basic links, which is inefficient.

How do we know it is a problem: User feedback indicated frustration with finding specific items.


Problem: Users cannot securely log in or view past purchases.

Extended problem statement: Without authentication, the site lacks personalization and security for order history.
Current solution: No login system exists yet, limiting user-specific features.

How do we know it is a problem: Metrics show high abandonment rates on purchase pages.



Why solve these problems? (Highly Optional)

Reason: Enhancing user experience drives sales and customer retention.
Reason: Security and personalization are critical for eCommerce success.

User satisfaction matrix
💡 The current solution scores low on navigation and security satisfaction, aiming for high satisfaction post-implementation.
Goals
Company objective 🎯
💡 To create a modern eCommerce platform and admin dashboard to manage sales.
Project goals

Project goal: Built a React-based UI ecosystem with reusable components for consistency.
Project goal: Implemented Firebase Auth and JWT for secure user management.

User Stories

 Visitor 1

Description: The Visitor 1 is viewing the website to find different types of clothes.
Goals: Find clothes listed on the website.
Needs: Filtering and modular navigation by gender and category.
Other characteristic: Casual shopper.


 Admin

Description: The Admin manages products and orders on the dashboard.
Goals: Upload, delete, or check products.
Needs: Real-time order tracking and product management tools.
Other characteristic: Tech-savvy manager.



🌟 Design space
UI Design
The UI features a Navbar for navigation, ClothingCard components for products, and a consistent AppLayout. The flow includes browsing, cart management, and checkout.
Low-fidelity Wireframe
💡 Initial sketches created in Excalidraw show key screens like the homepage and cart.



High-fidelity design
💡 High-fidelity mockups include the product listing and admin dashboard.



Design system 🎨
💡 Used a custom design system to ensure consistent styling across components.
Development Phase
Technology Stack Selection

1. Frontend - React.js with useState

Why React.js?
Component-Based Architecture: Enables reusable UI components.
Efficient UI Updates: Uses virtual DOM for performance.
Rich Ecosystem: Supports ongoing improvements.


Why useState for Data Fetching?
Simple state management for cart items during learning phase.




 2. Backend - Node.js with Express.js

Why Node.js and Express.js?
Fast server setup and middleware support for error handling.




3. Database - MongoDB with Mongoose

Why MongoDB?
Flexibility for JSON-like clothing data with varying attributes.





High-Level Architecture Diagram
💡 Built a monolithic system with React frontend, Express.js backend, and MongoDB database.
Entity-Extended Relationship Diagram
💡 Designed schemas for Product, Order, and Category with ObjectId links.
Key Features of the Software


Description and Decisions: Chose MongoDB for dynamic product data (e.g., size variants). Designed schemas with embedded documents and indexed fields like category.



Challenges Faced and Solutions

Problem: Managing cart state across pages caused inconsistencies.
Solution: Used useState initially, planning to switch to Redux for better state management.



Future Vision / next steps
Long-term vision

Add Stripe and Razorpay payment gateways.
Enhance admin dashboard with analytics.
Improve UI with a design system like ShadCN.
