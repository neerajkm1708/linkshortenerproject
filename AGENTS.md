# Agent Instructions — Link Shortener Project

This file is the entry point for all LLM agents working on this codebase. Read this first, then follow the links to the relevant `/docs/` guide for your task.

> **Critical:** This project runs **Next.js 16.2.3** and **React 19**. These are not your training-data versions. APIs, component patterns, and lifecycle behaviour differ. Always check `node_modules/next/dist/docs/` before implementing Next.js features. Heed all deprecation notices.

---

> [!IMPORTANT]
> ## YOU MUST READ THE RELEVANT `/docs` FILE BEFORE WRITING A SINGLE LINE OF CODE
>
> This is **non-negotiable and applies to every task without exception.**
> Identify which area(s) your task touches, locate the corresponding guide(s) in `/docs/`, and **read them in full** using the `read_file` tool before producing any code, scaffold, or file edit.
> **Do not rely on prior knowledge, training data, or assumptions.** The guides define the exact patterns, APIs, and constraints for this codebase. Ignoring them will produce incorrect, inconsistent, or rejected output.
>
> **If you skip reading the docs, you are doing it wrong. Stop. Go read the docs first.**

---

## Project Overview

A URL shortening web application. Users authenticate, create short links, and are redirected through a proxy server when visiting short URLs.

**Stack at a glance:**

| Layer            | Technology                                 |
|------------------|--------------------------------------------|
| Framework        | Next.js 16.2.3 — App Router                |
| Language         | TypeScript 5 (strict mode)                 |
| Database         | NeonDB (PostgreSQL) via `@neondatabase/serverless` |
| ORM              | Drizzle ORM + drizzle-kit                  |
| Auth             | Clerk (`@clerk/nextjs` v7)                 |
| UI Components    | shadcn/ui (radix-nova style) + Radix UI    |
| Styling          | Tailwind CSS v4                            |
| Icons            | Lucide React                               |
| Package Manager  | npm                                        |

---

## Guides in `/docs/`

> **MANDATORY:** Use `read_file` to read the full content of every relevant guide below **before generating any code.** No exceptions.

| Guide | When to read it |
|-------|----------------|
| [authentication.md](docs/authentication.md) | Any route protection, Clerk usage, or user-identity work |
| [ui-components.md](docs/ui-components.md) | Any UI work — building pages, forms, layouts, or adding new components |

> **Checklist before writing code:**
> - [ ] Have I identified which `/docs` guide(s) apply to this task?
> - [ ] Have I read each relevant guide **in full** using `read_file`?
> - [ ] Am I following the exact patterns described in those guides?
>
> If any box is unchecked, **stop and complete it now.**

---

## Non-Negotiable Rules

These apply everywhere in the codebase, regardless of task:

1. **TypeScript only.** No `.js` or `.jsx` files. All code is `.ts` or `.tsx`.
2. **No `any`.** Use `unknown`, generics, or proper types. If you reach for `any`, stop and rethink.
3. **Server Components by default.** Only add `"use client"` when the component genuinely needs browser APIs or React state/effects.
4. **Never hardcode secrets.** Database URL, Clerk keys, and all credentials live in environment variables only.
5. **Drizzle for all DB access.** Never write raw SQL strings or use any other DB client.
6. **Clerk for all auth.** Never roll custom auth or bypass Clerk middleware.
7. **shadcn/ui + Tailwind for all UI.** Do not install additional CSS frameworks, component libraries, or styling dependencies without discussion.
8. **`cn()` for all className composition.** Import from `@/lib/utils`. Never concatenate class strings manually.
9. **One component per file.** Name the file after the component (PascalCase `.tsx`).
10. **No `console.log` in committed code.** Use structured error handling patterns from [coding-standards.md](docs/coding-standards.md).
