import { Link2, BarChart2, Zap, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HeroButtons } from "@/components/HeroButtons";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "Instant Short Links",
    description:
      "Generate a compact, shareable URL in seconds. No friction, no delays—just paste and shorten.",
  },
  {
    icon: BarChart2,
    title: "Track Performance",
    description:
      "Monitor every click from your personal dashboard. Understand where your audience comes from.",
  },
  {
    icon: Link2,
    title: "Manage All Your Links",
    description:
      "View, organise, and control every short link you have ever created from one tidy place.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Built on a modern, serverless stack with Clerk authentication to keep your links safe.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <Link2 className="size-4" />
            Free link shortener
          </span>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Shorten Links,{" "}
            <span className="text-primary">Expand Your Reach</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Turn long, unwieldy URLs into clean, shareable short links.
            Create an account to track clicks and manage all your links
            from one dashboard.
          </p>
        </div>
        <HeroButtons />
      </section>

      {/* Features */}
      <section className="border-t px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Everything you need
            </h2>
            <p className="max-w-md text-muted-foreground">
              A simple, powerful tool for anyone who shares links online.
            </p>
          </div>
          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className={cn("gap-4 py-6")}
              >
                <CardHeader className="gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t px-6 py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground">
            Join today and start creating short links for free.
          </p>
          <HeroButtons />
        </div>
      </section>
    </div>
  );
}
