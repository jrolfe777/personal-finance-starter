# Vibe like an Engineer: A 30-Minute Workshop

## Introduction

Vibe coding — starting with a vague idea and then YOLO-generating code until it feels right - can be a ton of fun and has a wow factor when you first start. **However, velocity benefits and output quality quickly erode at scale**. How can we bridge the gap between vibe coding and professional engineering practices that harness AI driven acceleration? This workshop demonstrates some of the techniquees we've been finding effective. Structured mechanisms for goal setting. Context as an asset. A test driven development mindset that creates a foundation in validation.

 We'll walk through an example workflow using an AI assistant as a collaborative partner, transforming intuition into a structured, accelerated, and professional process. We'll see how the AI can fulfill the roles of a product manager, a tech lead, and a pair programmer.

This workshop offers two setup options:
1. **Local IDE (Best Experience)** - Using Cursor with Claude Sonnet 4 for superior model quality and stability (requires Node.js and Cursor)
2. **Firebase Studio** - Cloud-based option using Gemini for those who want to use a browser-based environment and/or dont have the needed dependencies (Node.js and Cursor)

We will build a new "Debt Payoff Calculator" feature for our personal finance application. Pay close attention to how we use simple, conversational prompts to generate product requirements, create a test driven implementation plan, and write production-ready code.

**Key Takeaway:** This is about evolving beyond simple code generation. It's about partnering with AI to turn "vibes" into (1) tight and carefully thought out specifications that form the base context for all future development and (2) comprehensive test suites that can be used to validate conformance to these specifications.

> 💡 **Before You Start, or After You Finish:** Also take a look at [Working with Coding Assistants: Tips & Tricks](./working-with-coding-assistants-tips-tricks.md) for some quick pointers and best practices for getting the most out of coding assistants.

**SPOLIER:** If you want a quick TLDR on what this workshop is demonstrating, review the AGENTS.md file.  

---

## Personal Finance Starter App: Initial Setup (5 minutes)

Choose your preferred development environment. The **Local IDE option has for superior model quality and stability**, but may require too much setup if you dont have Node installed already.  

### Option A: Local IDE Setup (Best Experience)

**Prerequisites:** You'll need Node.js 20+ and Cursor installed. If you don't have these, see our [Local Setup Guide](./local-setup-guide.md) first.

1. **Clone the repository** to your desired location:
   ```bash
   git clone https://github.com/jrolfe777/personal-finance-starter
   cd personal-finance-starter
   ```

2. **Open the project** in Cursor by either:
   - Opening Cursor and using File → Open Folder to select the cloned directory

3. **Install dependencies** by opening a terminal in Cursor and running:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **View the application** by opening your browser to `http://localhost:9002`

6. **Enable AI assistance** by opening Chat in Cursor and ensuring you're using Claude Sonnet 4 in Agent Mode for the best results.

### Option B: Firebase Studio Setup

*Note: If you were given a preloaded firebase project link, you can skip this step and go straight to Part 1*

1. Navigate to [studio.firebase.google.com](https://studio.firebase.google.com).
2. Choose the **"Import Repo"** option.
3. Import the starter project from the following URL: `https://github.com/jrolfe777/personal-finance-starter`
4. Once the import process completes, click the **"Switch to Code"** button in the upper-right corner.
5. In the file explorer on the left, right-click the `package.json` file and select **"Open in Integrated Terminal"**.
6. In the terminal that appears at the bottom, type the command `npm install` and press Enter.
7. Wait for the installation to complete - it will take 3-4 minutes. Once the terminal command prompt is back, click "Try Again" in the web preview pane on the right, and the app will start and display after about 1 minute. 
8. Click the "Open in New Window" button in the web preview's toolbar and orient yourself with the layout of the starter app.
---

## Part 1: The AI as a Product Manager (6 minutes)

In this section, we will task the AI with thinking through the product requirements for our new feature, just as a Product Manager would.

### Step 1: Create the Initial Product Requirements Document (PRD)

First, let's have the AI create a first draft of a PRD for a "Debt Payoff Calculator". This feature will help users strategize how to pay off a specific debt.

**Action:** Enter the following prompt into the chat:

> Create a Product Requirements Document in a new file, `docs/debt-calculator.md`. The feature is a "Debt Payoff Calculator" that lets a user select a debt, input their desired monthly payment, and see a projection of their payoff timeline. The PRD should include user stories and feature requirements.

**(Wait for the AI to generate the file, and be sure to save the file once its done.)**

**Takeaway:** The AI has instantly created a structured requirements document. This process, which can often take hours or days or weeks of meetings and writing, is completed in seconds. It provides a solid foundation for the feature and a "single source of truth" for the team, ensuring alignment from the very beginning.

### Step 2: Review and Refine the PRD

Now, let's review the PRD. Your role is to use your domain expertise - and understanding of the business - to spot gaps and opportunities. To take the PRD from basic to great. Review the PRD and add your own spin to it - remove weak ideas, add improvements, tweak and refine.

**Action:** Here's an example prompt, but you should replace with your own ideas, add success criteria, etc - iteratively, until you are happy with the feature you'll build:

> This is a good start, but I want to make the calculator more visual. Update `docs/debt-calculator.md` to add a feature requirement for a "Payoff Projection Chart". This chart should visually represent the debt balance decreasing over time based on the user's proposed monthly payment. It will make the payoff journey more tangible for the user.

**(Wait for the AI to update the file.)**

**Takeaway:** This demonstrates the iterative and collaborative nature of the AI partnership. Critically, this approach results in a durable specification, saved adjacent to our code.  This asset will be the foundation of our context engineering for this feature, both during initial development and throughout the feature's lifetime.

---

## Part 2: The AI as a Tech Lead (2 minutes)

Now, let's switch hats from product to engineering. A good tech lead translates product requirements into a concrete technical plan. We'll ask the AI to do just that.

### Step 3: Generate the Implementation Plan

**Action:** Enter the following prompt:

> Based on the PRD at docs/debt-calculator.md, create a technical implementation plan in a new file named docs/debt-calculator-plan.md. Break down the work into discrete steps for our existing Next.js app.

**(Wait for the AI to generate the new plan file, and be sure to save the file.)**

**Takeaway:** The AI has successfully bridged the gap between the "what" (the PRD) and the "how" (the technical plan). It has analyzed the requirements and proposed a logical sequence of engineering tasks, including creating new UI components and AI flows. This provides immediate clarity for the development team and creates a ready-to-use backlog of work.

---

## Part 3: The AI as a Test Engineer (5 minutes)

With a solid plan in place, we now shift to a test-driven mindset. Before writing a single line of implementation code, we'll have the AI create a suite of failing unit tests. This ensures we have a clear, machine-verifiable definition of "done."

### Step 4: Generate and Review Failing Unit Tests

**Action:** First, enter the following prompt into the chat:

> Based on the PRD, and using the vitest framework, create a new test file at `src/ai/flows/tests/debt-calculator.test.ts` with a suite of failing unit tests for the "Debt Payoff Calculator" flow. These tests should cover the core logic defined in the acceptance criteria. The tests will obviously fail since the implementation doesn't exist yet.

**(Wait for the AI to generate the new test file, and be sure to save it.)**

Now, take a moment to **review the generated tests**. Do they accurately reflect the PRD? Are there any edge cases the AI missed? As a developer, your role is to ensure the tests are comprehensive before any implementation begins.

**Takeaway:** This is the core of a test-driven mindset. We now have a concrete, executable contract that defines what our feature must do. By reviewing and refining the tests upfront, we create an objective benchmark for success. When all tests pass, the core feature is complete.

---

## Part 4: The AI as a Pair Programmer (8 minutes)

This is where the plan turns into product. We will now instruct the AI to execute the implementation plan it created.

### Step 5: Implement the Feature

We will give the AI a single, high-level command to execute the plan it created.

**Action:** Enter the following prompt:

> Now, follow the plan in `docs/debt-calculator-plan.md` and implement the Debt Payoff Calculator feature. Make the tests in `src/ai/flows/tests/debt-calculator.test.ts` pass. Replace the "Your Personal Finance Experience Goes Here" placeholder widget with the new component.

**(Wait for the AI to generate the code changes.)**

**Takeaway:** This is the core of AI-accelerated development. The AI is not just writing isolated snippets; it is implementing a full-stack feature by creating and modifying multiple files across the codebase. It understands the component structure, the server-side action and flow architecture, and the UI library (React/ShadCN). This step transforms hours or days of coding into a few minutes of AI-driven execution.

### Step 6: Validate and Identify Issues

After the AI has implemented the feature, the developer's role shifts to that of a senior reviewer and quality assurance lead. We use our test plan from Step 5 to validate the implementation.

**Action:** Manually walk through the test cases defined in `docs/debt-calculator-tests.md`. You will likely find that some functionality is missing or incorrect. As you refine, follow the same basic process. (1) Update the PRD and/or the technical plan if you are changing the way the feature works, (2) Update the tests if they are incomplete or did not catch the issue you identified, and (3) Update the implementation so that the tests succeed.

**Takeaway:** This is a critical part of the modern developer workflow. The developer's role evolves from pure code authoring to that of a senior reviewer and quality assurance lead. The AI does the heavy lifting of writing the code, and the developer uses their expertise to test, identify issues, and guide the AI to a correct and complete solution. This interactive debugging loop is far faster than traditional code-write-debug cycles, and it is a durable investment in the long term quality of the code.

---

## Optional Part 5: Your Turn (Time Permitting)

Now that you've seen the end-to-end workflow, it's your turn. If time remains, think of a new and creative personal finance feature you'd like to build. It could be anything:
- A "Subscription Tracker" to find and cancel unwanted recurring payments.
- An "Upcoming Bills" widget to avoid late fees.
- A "Savings Goal" visualizer.
- A tool to categorize transactions automatically using AI.

Once you have an idea, use the exact same process you just learned:
1.  **Act as the Product Manager:** Have the AI create a PRD. Review and refine it.
2.  **Act as the Tech Lead:** Ask for an implementation plan.
3.  **Act as the Test Engineer:** Generate failing tests that define success.
4.  **Act as the Pair Programmer:** Instruct the AI to implement the feature and make the tests pass.
5.  **Validate:** Review the result and guide the AI to fix any issues.

This is your chance to experience the full power of this collaborative workflow.

---

## Workshop Conclusion (2 minute)

In 30 minutes, we have:
1.  **Defined** a new feature with a complete PRD.
2.  **Planned** the technical implementation.
3.  **Authored** a test plan to guide validation.
4.  **Executed** the plan to build a full-stack feature.
5.  **Validated** the implementation and guided the AI to fix a bug.

This workflow, which blends human expertise with AI-driven execution, represents a fundamental shift in software development. It allows teams to move with unprecedented speed, test more ideas, and focus their creative energy on product vision and quality rather than routine coding tasks.
