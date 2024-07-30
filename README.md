Project Overview

LA Gym is a fitness website designed to provide users with information about gym membership plans, classes, trainers, and contact details. The website features a modern design with responsive layouts, animations, and user interactions to enhance the user experience.

Features
Responsive Design: Adapts to various screen sizes and devices.
Interactive Calendar: Displays gym classes with details and allows users to filter and view class information.
Trainer Profiles: Showcases gym trainers with images, names, and social media links.
Membership Plans: Lists different membership plans with features and pricing.
Contact Form: Allows users to contact the gym with a form and includes a map.
Smooth Animations: Enhances user interactions with smooth animations and hover effects.

Installation
To set up the project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/your-username/levels-gym.git
cd levels-gym

2. Install dependencies:
npm install

3. Start the development server:
npm run dev

4. Open the project in your browser:

Navigate to http://localhost:3000 to see the website in action.

Usage
Navigate the Website: Use the navigation bar to explore different sections of the website.
View Classes: Check the calendar for available classes and their details.
Learn About Trainers: View trainer profiles with their social media links.
Explore Membership Plans: Review the available gym membership plans.
Contact the Gym: Use the contact form to get in touch with the gym.


The project follows a structured folder organization:
.
├── components
│   ├── calendar
│   │   ├── BigCalendar.jsx
│   │   ├── Filter.jsx
│   │   └── GlobalStyle.js
│   ├── common
│   │   ├── Button.jsx
│   │   ├── PlansCard.jsx
│   │   └── TrainerCard.jsx
│   ├── layouts
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages
│   │   ├── About.jsx
│   │   ├── Classes.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Plans.jsx
│   │   └── Trainers.jsx
├── pages
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public
│   └── assets
│       └── img
├── styles
│   └── globals.css
├── classData.json
├── next.config.js
├── package.json
└── tailwind.config.js

Configuration
Next.js Configuration: Basic configuration in next.config.js.
Tailwind CSS Configuration: Tailwind CSS setup in tailwind.config.js.
Class Data: Class information stored in classData.json.