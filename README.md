# GitHub Finder

A React application that lets users to search for GitHub profiles and view their basic information and their repositories.

## Live Demo

Check out the live version here: [GitHub Finder](https://github-finder-react-app-rho.vercel.app/)

## Features

- Search for GitHub users by username
- View user profile details (e.g., avatar, name, bio, location)
- See a list of repositories with basic details
- Responsive and user-friendly UI

## Technologies Used

- React.js
- React Router
- Tailwind CSS (or any styling used)
- GitHub API
- Vercel (for deployment)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/github-finder.git
   ```

2. Navigate to the project directory:
   ```sh
   cd github-finder
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Create a `.env` file in the root directory and add your GitHub API key:
   ```env
   REACT_APP_GITHUB_TOKEN=your_github_api_token
   ```

5. Start the development server:
   ```sh
   npm start
   ```

## Usage

- Enter a GitHub username in the search bar.
- Click on a user to view detailed information and repositories.

## Deployment

The app is deployed on Vercel. To deploy your own version:

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```

2. Deploy the project:
   ```sh
   vercel
   ```

## Contributing

Feel free to fork the repository and submit pull requests. Any contributions to improve the app are welcome!

## License

This project is licensed under the MIT License.
