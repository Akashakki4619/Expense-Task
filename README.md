## How can I edit this code?

There are several ways of editing your application.
**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS


## About approach
1. Tech Stack Used:

Frontend: React.js

Styling: CSS (modular and responsive)

State Management: React Hooks (useState, useEffect)

Storage: localStorage (to persist data across page reloads)

2. Functional Approach:

Component-Based Structure:

The app is broken into modular components like:

Header: Displays app title and balance.

TransactionList: Lists all transactions.

AddTransaction: Form to input new transactions.

IncomeExpense: Summary of income vs expenses.

Transaction: Individual transaction item.

Chart (optional): May use a chart to visualize spending.

Transaction Flow:

User adds a transaction (income or expense).

Data is stored in localStorage.

React updates state and UI re-renders accordingly.

Persistent Data:

The app uses localStorage to keep transactions saved even after a browser refresh.

Responsive UI:

The layout is optimized for different screen sizes and looks clean on desktop and mobile.

User Feedback:

Visual cues like colors (e.g., green for income, red for expense) help users easily interpret their financial data.

3. Goal of the App:

To provide users with a simple, user-friendly interface to track their daily expenses, understand their financial habits, and maintain a clear overview of income vs expenditure.



