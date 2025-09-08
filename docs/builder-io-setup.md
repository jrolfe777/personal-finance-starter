# Builder.io Setup Guide

This guide provides an alternative cloud-based IDE option using Builder.io for the Personal Finance Starter workshop. Builder.io offers a browser-based development environment that requires no local installation.

## Prerequisites

You'll need:
- A personal GitHub account
- A Builder.io account - Sign up at [builder.io](https://builder.io)

## Setup Steps

### Step 1: Fork the Repository

1. **Navigate to the starter repository**: Go to [https://github.com/jrolfe777/personal-finance-starter](https://github.com/jrolfe777/personal-finance-starter)

2. **Fork the repository**: Click the "Fork" button in the top-right corner of the GitHub page to create a copy in your personal GitHub account.

### Step 2: Connect Builder.io to Your GitHub Account

1. **Login to Builder.io**: Navigate to [builder.io](https://builder.io) and sign in to your account.

2. **Choose "Connect to a Repo"**: Look for the option to connect to a repository from your dashboard.

3. **Authorize GitHub integration**: You'll be prompted to connect your Builder.io account with your GitHub account. Follow the authorization flow to grant the necessary permissions.

### Step 3: Import Your Fork

1. **Select your fork**: Once connected, choose your forked copy of the `personal-finance-starter` repository from the list of available repositories.

2. **Configure the project settings**:
   - **Change the Next.js port**: Update the port from the default `3000` to `9002`
   - **Leave other options as defaults**: Keep all other configuration options at their default settings

3. **Import the project**: Click import to set up your development environment.

### Step 4: Wait for Setup

Builder.io will automatically:
- Clone your repository
- Install dependencies (`npm install`)
- Start the development server
- Set up the IDE environment

This process typically takes 2-3 minutes.

## Next Steps

Once your Builder.io environment is ready:

1. **Familiarize yourself with the interface**: Take a moment to explore the Builder.io IDE layout and available tools.

2. **Verify the application is running**: Check that the personal finance starter app is accessible and functioning properly.

3. **Continue with the workshop**: Return to the main workshop instructions in `workshop.md` and proceed with **Part 1: The AI as a Product Manager**. All subsequent steps in the workshop remain the same regardless of your chosen IDE.

---

**Note**: Builder.io provides a full-featured cloud IDE experience with integrated AI assistance, making it an excellent alternative for those who prefer not to install local development tools or want to work from any device with a web browser.
