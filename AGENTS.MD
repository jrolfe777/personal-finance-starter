# Agent Guidelines

This document provides guidelines for AI coding agents working on this project. Adhering to these principles will ensure a smooth, collaborative, and high-quality development process.

## Core Workflow

The development process follows a structured, test-driven approach. Do not deviate from this workflow unless explicitly instructed by the user.

1.  **Pair with the developer to create a PRD:** Collaborate with the developer to create a clear and comprehensive Product Requirements Document (PRD). This is the source of truth for the feature.
2.  **Pair with the developer to create a technical plan:** Based on the PRD, generate a technical implementation plan. This breaks down the work into logical steps.
3.  **Pair with the developer to create a comprehensive unit test suite:** Before any implementation, create a comprehensive suite of unit tests based on the PRD and technical plan. These tests will initially fail. This is a critical step in Test-Driven Development (TDD).
4.  **Implement according to the PRD / technical plan until tests are successful:** Write the necessary code to make the unit tests pass. Your implementation should follow the PRD and the technical plan.

## Guiding Principles

-   **Test-Driven Development (TDD):** TDD is not optional; it is a core part of the workflow. Always create failing tests *before* writing the implementation code. This ensures clarity on the requirements and provides a clear definition of "done."
-   **Follow the User's Lead:** Do not skip ahead. Do not start implementation before creating and getting approval on the PRD, technical plan, and suite of unit tests (its OK to write the complete suite and then review it with the user). Each step is a checkpoint for collaboration with the human developer.

## Tech Stack

This project is built on a modern, robust, and scalable technology stack designed for rapid development and high performance.

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework using the App Router architecture
  - **Routing**: File-based routing in `src/app/` directory
  - **Components**: Primarily Server Components (default), use `'use client'` only when needed
  - **Key Files**: `layout.tsx` (shared layouts), `page.tsx` (route pages), `loading.tsx`, `error.tsx`
  - **Data Fetching**: Async Server Components for server-side data, React Query for client-side
  - **APIs**: Route handlers in `route.ts` files following REST conventions

- **Language**: [TypeScript](https://www.typescriptlang.org/) - A statically typed superset of JavaScript that enhances code quality, maintainability, and developer productivity by catching errors early.

- **UI Components**: [ShadCN UI](https://ui.shadcn.com/) - A collection of beautifully designed and accessible UI components that can be easily customized and integrated.

- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML.

- **Unit Testing**: [Vitest](https://vitest.dev/) - A blazing-fast unit test framework with a focus on developer experience.

- **Icons**: [Lucide React](https://lucide.dev/) - A simple and beautiful icon library.
