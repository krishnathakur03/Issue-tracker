
# Isssue Tracker

A simple Node.js application to track issues and bugs for projects, inspired by popular platforms like GitHub. This application allows users to create projects, track related issues, and filter or search through them with various options.


## Features

- **Home Page**
    - Displays a list of all projects.
    - Provides a button to create a new project.

- **Add Project Page**
    - Form to create a new project with the following fields:
        - Name
        - Description
        - Author

- **Project Detail Page**
    - Displays all issues related to a specific project.
    - Provides a button to create a new issue.


- **Home Page**
    - Form to create a new project with the following fields:
        - Name
        - Description
        - Labels (allow multiple Labels)
        - Author

## Tech Stack

**Frontend:** EJS, CSS, JavaScript

**Backend:** Node.js, Express.js, Mongoose

**Database:** MongoDB


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URL=mongodb://localhost:27017/issue-tracker`

`port=3000`


## Run Locally

Clone the project

```bash
  git clone https://github.com/krishnathakur03/Issue-tracker.git
```

Go to the project directory

```bash
  cd issue-tracker
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Demo

👉 https://issue-tracker-p7xy.onrender.com/

## 🛠 Skills
 Node.js, Express.js, Javascript, HTML, CSS...


## Contributing

Contributions are always welcome!

Feel free to fork this repository, submit pull requests, and create issues to contribute to the project.


## Acknowledgements

- Inspiration from GitHub issue tracker and similar platforms.

- Special thanks to the open-source community for providing resources and tools.