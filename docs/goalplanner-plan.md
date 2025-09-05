# Goal Planner Implementation Plan

This document breaks down the work required to implement the "Goal Planner" feature as specified in the PRD.

### Step 1: Create the Goal Planner Widget

-   **Task:** Create a new component `src/components/dashboard/goal-planner-widget.tsx`.
-   **Details:**
    -   This will be a client-side React component.
    -   It will display a user's financial goal, including the goal name, a progress bar, and key metrics (e.g., "Current Amount / Target Amount").
    -   Use ShadCN components like `Card`, `CardHeader`, `CardContent`, and `Progress` for the UI.
    -   Initially, the widget will be populated with static mock data.

### Step 2: Create Goal Strategy Flow

-   **Task:** Create a new Genkit flow `src/ai/flows/goal-strategy-flow.ts` to generate a personalized savings plan.
-   **Details:**
    -   Define input and output schemas using Zod. The input will include the user's goal (type, target amount, date) and relevant financial data. The output will be a structured plan.
    -   Write a prompt that instructs the model to analyze the user's financial situation and recommend a monthly savings amount, a projected timeline, and actionable tips for cutting expenses.
    -   Export a server action from `src/app/actions.ts` that invokes this flow.

### Step 3: Integrate the Widget into the Dashboard

-   **Task:** Add the new `GoalPlannerWidget` to the main dashboard.
-   **Details:**
    -   Import the `GoalPlannerWidget` into `src/app/page.tsx`.
    -   Place it within the existing grid layout on the dashboard.

### Step 4: Develop the "Add Goal" Wizard (Future)

-   **Task:** Implement the multi-step "Add Goal" wizard.
-   **Details:**
    -   This will be a client-side flow, likely using a `Dialog` or `Sheet` component.
    -   It will guide the user through selecting a goal type and inputting parameters (target amount, date).
    -   Upon completion, it will call the `goal-strategy-flow` server action to generate the plan and save the new goal.
