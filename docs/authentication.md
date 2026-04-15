# Authentication

All authentication is handled exclusively by **Clerk (`@clerk/nextjs` v7)**. No other auth method, library, or custom implementation is permitted.

---

## Non-Negotiable Rules

1. **Clerk only.** Never use NextAuth, custom JWT, sessions, or any other auth mechanism.
2. **Modal only.** All sign-in and sign-up flows must use Clerk modals. No dedicated `/sign-in` or `/sign-up` pages.
3. **Never bypass Clerk middleware.** All route protection must go through `clerkMiddleware` in `middleware.ts`.

---

## Route Protection

| Route        | Behaviour                                                   |
|--------------|-------------------------------------------------------------|
| `/dashboard` | Protected. Unauthenticated users are redirected to `/`.    |
| `/`          | If the user is signed in, redirect to `/dashboard`.        |

### `middleware.ts`

```ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const { pathname } = req.nextUrl;

  if (userId && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
```

---

## Sign In / Sign Up (Modal Only)

Always use `mode="modal"`. Wrap with shadcn/ui `<Button>` as needed.

```tsx
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

<SignedOut>
  <SignInButton mode="modal">
    <Button>Sign in</Button>
  </SignInButton>
  <SignUpButton mode="modal">
    <Button>Sign up</Button>
  </SignUpButton>
</SignedOut>
<SignedIn>
  <UserButton />
</SignedIn>
```

---

## Accessing User Identity

| Context          | Method                                                          |
|------------------|-----------------------------------------------------------------|
| Server Component | `const { userId } = await auth()` from `@clerk/nextjs/server`  |
| Route Handler    | `const { userId } = await auth()` from `@clerk/nextjs/server`  |
| Client Component | `const { userId } = useAuth()` from `@clerk/nextjs`            |
| Full user object | `const user = await currentUser()` from `@clerk/nextjs/server` |

Never store credentials in the database — only the Clerk `userId` as a foreign key.

---

## Environment Variables

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

Set in `.env.local` only. Never hardcode.
