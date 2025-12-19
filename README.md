Everyday Market Cloud-Based Application Deployment
By Mehsim Jamani

Overview
This project is an Angular application based on the Everyday Market App from previous assignments. The goal of Assignment 4 is to deploy the application to the cloud using Azure Static Web Apps and demonstrate continuous integration and continuous deployment using GitHub Actions.

Assignment Requirements Implemented

• Angular application is hosted on Azure Static Web Apps
• Application is publicly accessible through an Azure Static Web App URL
• GitHub repository is connected to Azure Static Web Apps
• Continuous Integration is implemented using GitHub Actions
• Continuous Deployment is triggered automatically on push to the main branch
• Successful build and deployment runs are visible in GitHub Actions
• The deployed application loads correctly in the browser
• Client side routing works correctly in the deployed environment
• Form validation continues to function after deployment

Application Features

• Register Page
Contains a template driven registration form with client side validation for name, email, phone number, date of birth, address, province, country, and terms and conditions.

• Products Page
Displays the Everyday Market products and is accessible through routing after successful form submission or direct navigation.

Deployment Details

• Cloud Platform: Azure Static Web Apps
• Source Control: GitHub
• CI/CD Tool: GitHub Actions
• Deployment Branch: main

Live Application
https://yellow-bay-0ce6e320f.3.azurestaticapps.net

GitHub Repository
https://github.com/mehsamj/assignment-4-cloud-based-application

How to Run Locally

• Open the project folder in VS Code
• Open the integrated terminal
• Run npm install
• Run ng serve
• Open a browser and go to http://localhost:4200
