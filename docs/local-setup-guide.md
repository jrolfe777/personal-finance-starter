# Local IDE Setup Guide

This guide will help you set up your local development environment for the Personal Finance Workshop using Cursor and Node.js.

## Prerequisites Check

Before installing anything, let's check if you already have the required tools installed.

### Check Node.js Version

Open a terminal and run:
```bash
node --version
```

If you see a version number like `v20.x.x` or higher, you already have Node.js 20+ installed and can skip the Node.js installation step below.

If the command is not found or shows a version lower than 20, follow the Node.js installation instructions below.

## Node.js 20 Installation (macOS)

### Option 1: Using Node Version Manager (nvm) - Recommended

Node Version Manager allows you to install and switch between multiple Node.js versions easily.  *Note - this is the canonical way to install nvm/node at CK, and might differ from typical Intuit instructions*

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

### Option 2: Direct Installation from Node.js Website

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version (should be 20.x.x)
3. Run the installer and follow the setup wizard
4. Verify installation by opening a new terminal and running `node --version`

## Cursor Installation

Cursor is a powerful AI-powered code editor that provides excellent integration with Claude Sonnet 4.

**Installation Instructions:** Please follow the comprehensive setup guide at:
[Cursor Onboarding Guide](https://devportal.intuit.com/app/dp/capability/CAP-2127/capabilityDocs/main/docs/reference/cursor/onboarding_guide.md)

## Verification

Once you have both Node.js and Cursor installed:

1. **Verify Node.js**: Open a terminal and run `node --version` - you should see version 20.x.x or higher
2. **Verify npm**: Run `npm --version` - this comes with Node.js and should show a version number
3. **Launch Cursor**: Open the Cursor application to ensure it starts correctly

## Next Steps

With Node.js and Cursor installed, you're ready to proceed with the [Workshop](./workshop.md) using the Local IDE Setup option.

## Troubleshooting

### Common Issues

**Permission errors when installing Node.js packages globally:**
- Solution: Use nvm (Option 1 above) instead of the direct installer, or configure npm to use a different directory for global packages.

**Cursor not opening or crashing:**
- Make sure your system meets the minimum requirements
- Try reinstalling Cursor using the official installation guide linked above

**Node.js command not found after installation:**
- Restart your terminal application
- If using nvm, make sure you've run `nvm use 20`
- Check that your PATH environment variable includes the Node.js installation directory
