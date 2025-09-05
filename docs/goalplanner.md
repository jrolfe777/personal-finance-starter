# Product Requirements Document: Goal Planner

## 1. Introduction

This document outlines the requirements for the "Goal Planner," a new feature within the Protofolio application. The Goal Planner will empower users to define, strategize, and track their financial goals. This feature aims to move beyond simple financial tracking and provide users with actionable, personalized plans to achieve significant life milestones, such as buying a home, saving for a major purchase, or eliminating debt.

## 2. Problem Statement

Users often struggle to translate their financial goals into concrete, achievable plans. They may know they want to save for a down payment on a house, but they lack the tools to understand how much they need to save, how long it will take based on their current finances, and what adjustments they need to make to their spending habits. Existing financial tools often show data but don't provide a clear, personalized roadmap for the future.

The Goal Planner will solve this by:
-   **Providing Clarity:** Helping users define specific, measurable goals.
-   **Offering Strategy:** Analyzing their financial situation and generating a personalized action plan.
-   **Maintaining Motivation:** Visualizing progress through an interactive dashboard widget and offering encouragement.

## 3. User Stories

-   **As a user, I want to set up a new financial goal** so that I can start planning for a significant life event (e.g., getting approved for a mortgage, saving for a vacation, or paying off my credit card debt).
-   **As a user, I want the app to help me define the parameters of my goal** (e.g., target amount, desired completion date) because I may not know exactly what is realistic.
-   **As a user, I want the app to analyze my finances and suggest a personalized strategy** to reach my goal, including how much I should save monthly and where I can cut back on spending.
-   **As a user, I want to see my goal progress visually on my main dashboard** so that I can stay motivated and track how close I am to achieving it.
-   **As a user, I want to receive tips and encouragement** as I work towards my goal, helping me stay on track.

## 4. Feature Requirements

### 4.1. Goal Setup Flow

A new "Add Goal" wizard will guide the user through the setup process.

-   **Goal Selection:** The user will choose from a predefined list of common financial goals:
    -   Save for a Large Purchase (e.g., vacation, car)
    -   Save for a Home Down Payment
    -   Reduce/Pay Off Debt
-   **Parameter Definition:** Based on the goal type, the user will input specific details:
    -   **Savings Goals:** Target Amount, Target Date.
    -   **Debt Reduction:** Debt Account, Target Payoff Date.
-   **Assisted Planning:**
    -   After the user provides initial parameters, the app will analyze their current financial profile (income, recurring expenses, transaction history).
    -   The app will generate a recommended plan, which includes:
        -   A projected timeline.
        -   A suggested monthly contribution/payment amount.
        -   Insights on spending categories where the user could save money.
    -   The user can review and accept the plan or make adjustments.

### 4.2. Dashboard Widget

Once a goal is created, a new widget will appear on the user's main dashboard.

-   **Widget Content:**
    -   Goal Name (e.g., "Vacation to Hawaii").
    -   Progress Bar showing percentage complete.
    -   Key Metric Display:
        -   For Savings: `Current Amount Saved / Target Amount`.
        -   For Debt: `Remaining Balance / Initial Balance`.
    -   A "Tip" section with a brief, actionable insight (e.g., "You're spending 20% more on dining out this month. Cutting back could add $150 to your goal!").
-   **Interactivity:**
    -   Clicking the widget will open a detailed view of the goal plan and progress over time.

### 4.3. Technical Requirements

-   **New Component (`components/dashboard/goal-planner-widget.tsx`):**
    -   A client-side component that displays the goal progress.
    -   It will fetch the goal status and tips.
    -   It should present the information clearly and concisely, using UI elements like `Progress` and `Card`.

## 5. Success Metrics

-   **Adoption Rate:** Percentage of active users who create at least one financial goal within the first month of launch.
-   **Engagement:** Number of times users interact with their goal widget or detailed plan view per week.
-   **Goal Completion Rate:** Percentage of goals that are successfully completed by users.
-   **User Feedback:** Qualitative feedback collected via surveys on how helpful and motivating the feature is.
