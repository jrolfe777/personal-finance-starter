# Local IDE Setup Guide

This guide will help you set up your local development environment for the Personal Finance Workshop using Cursor and Node.js.


## Cursor Installation

You'll need to have Cursor installed. It can be installed via the Intelligent Hub app on Intuit laptops, or by following the instructions in the [Cursor Onboarding Guide](https://devportal.intuit.com/app/dp/capability/CAP-2127/capabilityDocs/main/docs/reference/cursor/onboarding_guide.md).

To check if Cursor is already installed, try launching the Cursor application. If it opens successfully, you're ready to proceed.

## Node.js Installation Options

### Check Node.js Version

Open a terminal and run:
```bash
node --version
```

If you see a version number like `v20.x.x` or higher, you already have Node.js 20+ installed.  Otherwise, pick the option below that matches your setup.

### Option 1: Intuit Laptops 

If you're using an Intuit laptop, the setup is simple:

1. **Open the Intelligent Hub app** on your laptop
2. **Install Node** from the available applications
3. **Done!** Node.js should now be available on your system.

### Option 2: CK Laptops (Traditional Installation)

If you're using a CK laptop or the Intelligent Hub option isn't available, follow these manual installation steps:

1. **Install nvm** by running this command in your terminal:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
   ```

2. **Restart your terminal** 

3. **Install Node.js 20**:
   ```bash
   nvm install 20
   nvm use 20
   ```

4. **Verify installation**:
   ```bash
   node --version
   ```
   You should see something like `v20.x.x`
