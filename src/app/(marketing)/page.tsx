import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { NeonIcon } from "./_icons/Neon";
import { ClerkIcon } from "./_icons/Clerk";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatters";

export default function HomePage () {
  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6l lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">Price Smarter, Sell Bigger!</h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">Optimize your product because it is cool. Also, I have no idea what I am doing, but pay me bitte.</p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2">
            Get started for free <ArrowRightIcon className="size-5"/>
          </Button>
        </SignUpButton>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 flex-col gap-16 px-8 md:px16">
          <h2 className="text-3xl text-center text-balance mb-8">
            Trusted by all companies bro.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://neon.tech">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://neon.tech">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://neon.tech">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://neon.tech">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link className="md:max-x1:hidden" href="https://neon.tech">
              <ClerkIcon />
            </Link>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-8 py-16 bg-accent/5">
        <h2 className="text-4xl text-center text-balance font-semibold">
          Pricing software which pays for itself 20X over!
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map(tier => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
    </>
  )
}

function PricingCard({
  name,
  priceInCents,
  maxNumberOfProducts,
  maxNumberOfVisits,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding,
}: typeof subscriptionTiersInOrder[number]) {
  const isMostPopular = name === "Standard"
  return <Card>
    <CardHeader>
      <div className="text-accent font-semibold mb-8">
        {name}
      </div>
      <CardTitle className="text-xl font-bold">${priceInCents / 100}/month</CardTitle>
      <CardDescription>
         {formatCompactNumber(maxNumberOfVisits)} pricing page visits per month
      </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button className="text-lg w-full rounded-lg" variant={isMostPopular ? "accent" : "default"}>
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter>
        Hello bro
      </CardFooter>
  </Card>
}