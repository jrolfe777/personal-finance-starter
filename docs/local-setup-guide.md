# Local IDE Setup Guide

This guide will help you set up your local development environment for the Personal Finance Workshop using Cursor and Node.js.

## Prerequisites Check

Before installing anything, let's check if you already have the required tools installed.

### Check Cursor Installation

You'll need to have Cursor installed. It can be installed via the Intelligent Hub app on Intuit laptops, or by following the instructions in the [Cursor Onboarding Guide](https://devportal.intuit.com/app/dp/capability/CAP-2127/capabilityDocs/main/docs/reference/cursor/onboarding_guide.md).

To check if Cursor is already installed, try launching the Cursor application. If it opens successfully, you're ready to proceed.

### Check Node.js Version

Open a terminal and run:
```bash
node --version
```

If you see a version number like `v20.x.x` or higher, you already have Node.js 20+ installed and can skip the Node.js installation step below.

If the command is not found or shows a version lower than 20, follow the Node.js installation instructions below.

## Node.js Installation Options

Choose the option that matches your laptop type:

### Option 1: Intuit Laptops 

If you're using an Intuit laptop, the setup is simple:

1. **Open the Intelligent Hub app** on your laptop
2. **Install Node** from the available applications
3. **Done!** Node.js should now be available on your system.

### Option 2: CK Laptops (Traditional Installation)

If you're using a CK laptop or the Intelligent Hub option isn't available, follow these manual installation steps:

## Node.js 20 Installation (macOS)


Node Version Manager allows you to install and switch between multiple Node.js versions easily.

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


## Troubleshooting

### Common Issues

**Permission errors when installing Node.js packages globally:**
- Solution: Use nvm (as described above) which manages permissions better, or configure npm to use a different directory for global packages.

**Cursor not opening or crashing:**
- Make sure your system meets the minimum requirements
- Try reinstalling Cursor using the [Cursor Onboarding Guide](https://devportal.intuit.com/app/dp/capability/CAP-2127/capabilityDocs/main/docs/reference/cursor/onboarding_guide.md)

**Node.js command not found after installation:**
- Restart your terminal application
- If using nvm, make sure you've run `nvm use 20`
- Check that your PATH environment variable includes the Node.js installation directory
