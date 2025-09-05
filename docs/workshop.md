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

Now, let's review the PRD. A key part of the developer's role is to use their domain expertise to spot gaps and opportunities. The current PRD is good, but it's basic. It calculates a timeline, but it doesn't help the user understand *if their plan is good*. Let's ask the AI to think like a financial advisor and improve the feature.

**Action:** Enter the following prompt:

> This is a good start, but I want to make the calculator more helpful. Update `docs/debt-calculator.md` to add a feature requirement for an "AI-Powered Insight". This insight should analyze the user's proposed payment plan and provide feedback. For example, it could tell them if their payment is too low and will accrue more interest, or congratulate them if it's an aggressive, effective plan.

**(Wait for the AI to update the file.)**

**Takeaway:** This demonstrates the iterative and collaborative nature of the AI partnership. The human developer provides the strategic direction and product sense, and the AI handles the documentation and refinement. We've just made the feature significantly more valuable without writing a single line of code.

### Step 3: Refine the PRD with Success Metrics

A good PM knows that a feature isn't complete without a way to measure its success. Let's ask the AI to add that to the PRD.

**Action:** Enter the following prompt:

> This is much better. Now, add a "Success Metrics" section to `docs/debt-calculator.md` to help us understand if the feature is successful.

**(Wait for the AI to update the file.)**

**Takeaway:** You can refine and enhance the product specification with simple, natural language commands. The AI understands the context and modifies the existing document, acting as a true partner in the product definition phase.

---

## Part 2: The AI as a Tech Lead (5 minutes)

Now, let's switch hats from product to engineering. A good tech lead translates product requirements into a concrete technical plan. We'll ask the AI to do just that.

### Step 4: Generate the Implementation Plan

**Action:** Enter the following prompt:

> Based on the PRD at `docs/debt-calculator.md`, create a technical implementation plan in a new file named `docs/debt-calculator-plan.md`. Break down the work into 3-4 discrete steps for a Next.js app using Genkit for the AI component.

**(Wait for the AI to generate the new plan file.)**

**Takeaway:** The AI has successfully bridged the gap between the "what" (the PRD) and the "how" (the technical plan). It has analyzed the requirements and proposed a logical sequence of engineering tasks, including creating new UI components and AI flows. This provides immediate clarity for the development team and creates a ready-to-use backlog of work.

---

## Part 3: The AI as a Pair Programmer (15 minutes)

This is where the plan turns into product. We will now instruct the AI to execute the implementation plan it just created.

### Step 5: Implement the Feature

We will give the AI a single, high-level command to execute the plan it created.

**Action:** Enter the following prompt:

> Now, follow the plan in `docs/debt-calculator-plan.md` and implement the Debt Payoff Calculator feature.

**(Wait for the AI to generate the code changes.)**

**Takeaway:** This is the core of AI-accelerated development. The AI is not just writing isolated snippets; it is implementing a full-stack feature by creating and modifying multiple files across the codebase. It understands the component structure, the server-side action and flow architecture, and the UI library (React/ShadCN). This step transforms hours or days of coding into a few minutes of AI-driven execution.

### Step 6: Test and Identify Issues

After the AI has implemented the feature, a human developer's role shifts to testing and validation. Let's test the "Add Goal" button and see what happens. You'll notice it doesn't work. This is a realistic scenario where the initial implementation may have a bug or an omission.

**Action:** Click the "New Goal" button in the "My Financial Goal" widget. You will see that it does nothing. Now, enter the following prompt:

> The "New Goal" button in the Goal Planner Widget doesn't do anything when I click it. Please fix this by connecting it to the Add Goal Wizard.

**(Wait for the AI to identify the issue and propose a fix.)**

**Takeaway:** This is a critical part of the modern developer workflow. The developer's role evolves from pure code authoring to that of a senior reviewer and quality assurance lead. The AI does the heavy lifting of writing the code, and the developer uses their expertise to test, identify issues, and guide the AI to a correct and complete solution. This interactive debugging loop is far faster than traditional code-write-debug cycles.

---

## Workshop Conclusion (1 minute)

In 30 minutes, we have:
1.  **Defined** a new feature with a complete PRD.
2.  **Planned** the technical implementation.
3.  **Executed** the plan to build a full-stack feature.
4.  **Validated** the implementation and guided the AI to fix a bug.

This workflow, which blends human expertise with AI-driven execution, represents a fundamental shift in software development. It allows teams to move with unprecedented speed, test more ideas, and focus their creative energy on product vision and quality rather than routine coding tasks.
