# AI-Accelerated Prototyping: A 30-Minute Workshop

**Audience:** Technology & Engineering Executives (Directors, VPs)
**Goal:** Understand a mature method of leveraging a large language model (LLM) as an AI partner to accelerate application prototyping, from concept to code.
**Theme:** Personal Finance
**Platform:** Firebase Studio

---

## Introduction (2 minutes)

Vibe coding — starting with a vague idea and then YOLO-generating code until it feels right - can be a ton of fun and has a wow factor when you first start. However, velocity benefits and output quality quickly erode at scale. How can we bridge the gap between vibe coding and professional engineering practices that harness AI driven acceleration? This workshop demonstrates some of the techniquees we've been finding effective. Structured mechanisms for goal setting. Context as an asset. A test driven development mindset that creates a foundation in validation.

 We'll walk through an example workflow in Firebase Studio where an AI assistant acts as a collaborative partner, transforming intuition into a structured, accelerated, and professional process. We'll see how the AI can fulfill the roles of a product manager, a tech lead, and a pair programmer.

We will build a new "Debt Payoff Calculator" feature for our personal finance application. Pay close attention to how we use simple, conversational prompts to generate product requirements, create a test driven implementation plan, and write production-ready code.

**Key Takeaway:** This is about evolving beyond simple code generation. It's about partnering with AI to turn "vibes" into (1) tight and carefully thought out specifications that form the base context for all future development and (2) comprehensive test suites that can be used to validate conformance to these specifications.

---

## Part 1: The AI as a Product Manager (8 minutes)

In this section, we will task the AI with thinking through the product requirements for our new feature, just as a Product Manager would.

### Step 1: Create the Initial Product Requirements Document (PRD)

First, let's have the AI create a first draft of a PRD for a "Debt Payoff Calculator". This feature will help users strategize how to pay off a specific debt.

**Action:** Enter the following prompt into the chat:

> Create a Product Requirements Document in a new file, `docs/debt-calculator.md`. The feature is a "Debt Payoff Calculator" that lets a user select a debt, input their desired monthly payment, and see a projection of their payoff timeline. The PRD should include user stories and feature requirements.

**(Wait for the AI to generate the file.)**

**Takeaway:** The AI has instantly created a structured requirements document. This process, which can often take hours or days of meetings and writing, is completed in seconds. It provides a solid foundation for the feature and a "single source of truth" for the team, ensuring alignment from the very beginning.

### Step 2: Review and Refine the PRD

Now, let's review the PRD. Your role is to use your domain expertise - and understanding of the business - to spot gaps and opportunities. To take the PRD from good to great. Review the PRD and add your own spin to it - remove weak ideas, add improvements, tweak and refine.

**Action:** Here's an example prompt, but you should replace with your own ideas, add success criteria, etc - iteratively, until you are happy with the PRD:

> This is a good start, but I want to make the calculator more helpful. Update `docs/debt-calculator.md` to add a feature requirement for an "AI-Powered Insight". This insight should analyze the user's proposed payment plan and provide feedback. For example, it could tell them if their payment is too low and will accrue more interest, or congratulate them if it's an aggressive, effective plan.

**(Wait for the AI to update the file.)**

**Takeaway:** This demonstrates the iterative and collaborative nature of the AI partnership. The human developer provides the strategic direction and product sense, and the AI handles the documentation and refinement. We've just made the feature significantly more valuable without writing a single line of code, and we've created a durable asset that will form the basis of our context engineering during initial development and through the lifetime of maintenance for this feature.

---

## Part 2: The AI as a Tech Lead (5 minutes)

Now, let's switch hats from product to engineering. A good tech lead translates product requirements into a concrete technical plan. We'll ask the AI to do just that.

### Step 3: Generate the Implementation Plan

**Action:** Enter the following prompt:

> Based on the PRD at `docs/debt-calculator.md`, create a technical implementation plan in a new file named `docs/debt-calculator-plan.md`. Break down the work into discrete steps for a Next.js app using Genkit for the AI component.

**(Wait for the AI to generate the new plan file.)**

**Takeaway:** The AI has successfully bridged the gap between the "what" (the PRD) and the "how" (the technical plan). It has analyzed the requirements and proposed a logical sequence of engineering tasks, including creating new UI components and AI flows. This provides immediate clarity for the development team and creates a ready-to-use backlog of work.

---

## Part 3: The AI as a Test Engineer (5 minutes)

With a solid plan in place, we now shift to a test-driven mindset. Before writing a single line of implementation code, we'll have the AI create a suite of failing unit tests. This ensures we have a clear, machine-verifiable definition of "done."

### Step 4: Generate and Review Failing Unit Tests

**Action:** First, enter the following prompt into the chat:

> Based on the PRD, create a new test file at `src/ai/flows/tests/debt-calculator.test.ts` with a suite of failing unit tests for the "Debt Payoff Calculator" AI flow. These tests should cover the core logic defined in the acceptance criteria. The tests will obviously fail since the implementation doesn't exist yet.

**(Wait for the AI to generate the new test file.)**

Now, take a moment to **review the generated tests**. Do they accurately reflect the PRD? Are there any edge cases the AI missed? As a developer, your role is to ensure the tests are comprehensive before any implementation begins.

**Takeaway:** This is the core of a test-driven mindset. We now have a concrete, executable contract that defines what our feature must do. By reviewing and refining the tests upfront, we create an objective benchmark for success. When all tests pass, the core feature is complete.

---

## Part 4: The AI as a Pair Programmer (8 minutes)

This is where the plan turns into product. We will now instruct the AI to execute the implementation plan it created.

### Step 5: Implement the Feature

We will give the AI a single, high-level command to execute the plan it created.

**Action:** Enter the following prompt:

> Now, follow the plan in `docs/debt-calculator-plan.md` and implement the Debt Payoff Calculator feature. Make the tests in `src/ai/flows/tests/debt-calculator.test.ts` pass.

**(Wait for the AI to generate the code changes.)**

**Takeaway:** This is the core of AI-accelerated development. The AI is not just writing isolated snippets; it is implementing a full-stack feature by creating and modifying multiple files across the codebase. It understands the component structure, the server-side action and flow architecture, and the UI library (React/ShadCN). This step transforms hours or days of coding into a few minutes of AI-driven execution.

### Step 6: Validate and Identify Issues

After the AI has implemented the feature, the developer's role shifts to that of a senior reviewer and quality assurance lead. We use our test plan from Step 5 to validate the implementation.

**Action:** Manually walk through the test cases defined in `docs/debt-calculator-tests.md`. You will likely find that some functionality is missing or incorrect. For example, you might notice the "New Goal" button in the Goal Planner Widget doesn't do anything. Now, enter the following prompt:

> The "New Goal" button in the Goal Planner Widget doesn't do anything when I click it. Please fix this by connecting it to the Add Goal Wizard.

**(Wait for the AI to identify the issue and propose a fix.)**

**Takeaway:** This is a critical part of the modern developer workflow. The developer's role evolves from pure code authoring to that of a senior reviewer and quality assurance lead. The AI does the heavy lifting of writing the code, and the developer uses their expertise to test, identify issues, and guide the AI to a correct and complete solution. This interactive debugging loop is far faster than traditional code-write-debug cycles, and it is a durable investment in the long term quality of the code.

---

## Workshop Conclusion (2 minute)

In 30 minutes, we have:
1.  **Defined** a new feature with a complete PRD.
2.  **Planned** the technical implementation.
3.  **Authored** a test plan to guide validation.
4.  **Executed** the plan to build a full-stack feature.
5.  **Validated** the implementation and guided the AI to fix a bug.

This workflow, which blends human expertise with AI-driven execution, represents a fundamental shift in software development. It allows teams to move with unprecedented speed, test more ideas, and focus their creative energy on product vision and quality rather than routine coding tasks.
