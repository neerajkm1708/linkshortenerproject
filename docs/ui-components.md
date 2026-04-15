# UI Components — shadcn/ui Guidelines

All UI in this app is built exclusively with **shadcn/ui**. Do not create custom components or install additional component libraries.

---

## Core Rules

1. **Never build custom UI components.** If a shadcn/ui component exists for the use case, use it.
2. **Install via CLI, not by hand.** Add new components with `npx shadcn@latest add <component>`. Never copy-paste component code manually.
3. **Import from `@/components/ui/`.** All installed components live there.
4. **Extend via props, not forks.** Pass `className` with `cn()` to override styles. Do not duplicate or modify files in `components/ui/`.
5. **`cn()` for all className composition.** Import from `@/lib/utils`. Never concatenate class strings manually.

---

## Project Configuration

From `components.json`:

| Setting       | Value           |
|---------------|-----------------|
| Style         | `radix-nova`    |
| Base color    | `neutral`       |
| CSS variables | `true`          |
| Icons         | `lucide`        |
| RSC           | `true`          |

Always use **Lucide React** for icons (already included). Do not install Heroicons, FontAwesome, or any other icon library.

---

## Adding a New Component

```bash
npx shadcn@latest add <component-name>
```

This places the component in `components/ui/<component-name>.tsx`. After adding, import it directly:

```tsx
import { Button } from "@/components/ui/button";
```

---

## Styling Components

Use `cn()` from `@/lib/utils` to merge Tailwind classes:

```tsx
import { cn } from "@/lib/utils";

<Button className={cn("w-full", isLoading && "opacity-50")} />
```

Never use inline `style` attributes for layout or Tailwind-replaceable styles.

---

## Server vs Client Components

shadcn/ui components that use event handlers, state, or browser APIs require `"use client"`. Add the directive only to the smallest component that needs it — never at the page level just to use a UI component.

---

## What Not To Do

- Do **not** create components like `<MyButton>`, `<CustomInput>`, or `<AppCard>` when shadcn/ui equivalents exist.
- Do **not** install Chakra UI, MUI, Ant Design, or any other component library.
- Do **not** modify files inside `components/ui/` directly — use composition and `className` overrides instead.
- Do **not** use raw HTML elements (`<button>`, `<input>`, `<select>`) when a shadcn/ui component covers the case.
