Everyday Market App Routing and Form Validation
By Mehsim Jamani

Overview
This project is an Angular application based on the Everyday Market App from Assignment 1. The goal of this assignment is to demonstrate routing using the Angular Router and to build a template driven form with client side validation.

Assignment Requirements Implemented

• Routing is implemented using Angular Router
• The default route redirects from / to /register
• The Register page is part of the CoreModule
• The Products page is part of the MarketModule
• Navigation between pages works without page reload
• A template driven registration form is used
• Client side validation is applied to all required fields
• Custom validator directives are used where needed
• The Submit button remains disabled until the form is valid
• On successful submission, the user is redirected to the Products page

Pages
• Register Page
Contains a template driven form with validation for name, email, phone number, date of birth, address, province, country, and terms and conditions.

• Products Page
Displays the Everyday Market products and is accessible after form submission or through routing.



How to Run
• Open the project folder in VS Code
• Open the integrated terminal
• Run npm install
• Run ng serve
• Open a browser and go to http://localhost:4200