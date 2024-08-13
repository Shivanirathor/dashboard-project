
# Dashboard Page Assignment

This project is a dashboard page created as part of a frontend trainee assignment. The dashboard is built using React and Redux, allowing users to dynamically add and remove widgets within categories, search for widgets, and manage the local state effectively.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dynamic Dashboard**: The dashboard is built dynamically from a JSON structure defined in the Redux store.
- **Add Widgets**: Users can add new widgets to specific categories by providing a widget name and text.
- **Remove Widgets**: Each widget has a cross icon that allows users to remove it from its category.
- **Search Widgets**: Users can search for widgets across all categories using the search bar.
- **State Management**: The project uses Redux to manage the state of categories and widgets locally.

## Project Structure

.
├── public
│ ├── index.html
│ └── ...
├── src
│ ├── components
│ │ ├── Dashboard.js
│ │ ├── Widget.js
│ │ ├── AddWidgetForm.js
│ │ └── ...
│ ├── store
│ │ ├── store.js
│ │ └── ...
│ ├── App.js
│ ├── index.js
│ └── ...
├── .gitignore
├── package.json
└── README.md



## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/dashboard-assignment.git
   cd dashboard-assignment


npm install

npm start