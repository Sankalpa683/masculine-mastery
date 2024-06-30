import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Empowered</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Success Stories
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Lifestyle Tips
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Blog
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Empowering Young Men to Achieve Their Dreams
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Discover practical advice, inspiring stories, and a supportive community to help you unlock your full potential.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>Join the Movement</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
            <img
              src="https://via.placeholder.com/550"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Inspiring Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our community members who have transformed their lives and achieved their goals with our guidance and support.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card className="bg-background p-6 rounded-lg shadow-lg">
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="https://via.placeholder.com/150" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">John Doe</h3>
                      <p className="text-muted-foreground text-sm">Entrepreneur</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "The advice and community support from Empowered helped me overcome my financial struggles and start my own successful business. I'm forever grateful."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background p-6 rounded-lg shadow-lg">
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="https://via.placeholder.com/150" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Jane Smith</h3>
                      <p className="text-muted-foreground text-sm">Software Engineer</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "Empowered's personal development resources and mentorship program helped me build the confidence and skills to land my dream job. I'm forever changed."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background p-6 rounded-lg shadow-lg">
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="https://via.placeholder.com/150" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Michael Johnson</h3>
                      <p className="text-muted-foreground text-sm">Fitness Influencer</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "Empowered's lifestyle tips and community support have been instrumental in my journey to becoming a successful fitness influencer. I'm grateful for the impact it's had on my life."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Practical Lifestyle Tips</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover expert-curated advice on personal finance, style, and self-improvement to help you level up your life.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card className="bg-background p-6 rounded-lg shadow-lg">
                <CardContent>
                  <img
                    src="https://via.placeholder.com/400x225"
                    width="400"
                    height="225"
                    alt="Lifestyle Tip"
                    className="rounded-lg object-cover aspect-video"
                  />
                  <h3 className="text-xl font-bold mt-4">Mastering Personal Finance</h3>
                  <p className="text-muted-foreground mt-2">
                    Learn proven strategies to take control of your finances and build wealth.
                  </p>
                  <Button variant="link" className="mt-4">
                    Read More
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-background p-6 rounded-lg shadow-lg">
                <CardContent>
                  <img
                    src="https://via.placeholder.com/400x225"
                    width="400"
                    height="225"
                    alt="Lifestyle Tip"
                    className="rounded-lg object-cover aspect-video"
                  />
                  <h3 className="text-xl font-bold mt-4">Elevating Your Style</h3>
                  <p className="text-muted-foreground mt-2">
                    Discover the essentials of building a confident, stylish wardrobe.
                  </p>
                  <Button variant="link" className="mt-4">
                    Read More
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-background p-6 rounded-lg shadow-lg">
                <CardContent>
                  <img
                    src="https://via.placeholder.com/400x225"
                    width="400"
                    height="225"
                    alt="Lifestyle Tip"
                    className="rounded-lg object-cover aspect-video"
                  />
                  <h3 className="text-xl font-bold mt-4">Cultivating Self-Improvement</h3>
                  <p className="text-muted-foreground mt-2">
                    Unlock your full potential with proven techniques for personal growth.
                  </p>
                  <Button variant="link" className="mt-4">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">From the Blog</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay inspired and informed with the latest insights and experiences from our community.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card className="bg-background p-6 rounded-lg shadow-lg">
                <CardHeader>
                  <img
                    src="https://via.placeholder.com/400x225"
                    width="400"
                    height="225"
                    alt="Blog Post"
                    className="rounded-lg object-cover aspect-video"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Unlocking Your Potential: 5 Proven Strategies</h3>
                  <p className="text-muted-foreground mt-2">
                    Discover the key steps to achieving your goals and living your best life.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://via.placeholder.com/150" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">June 1, 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background p-6 rounded-lg shadow-lg">
                <CardHeader>
                  <img
                    src="https://via.placeholder.com/400x225"
                    width="400"
                    height="225"
                    alt="Blog Post"
                    className="rounded-lg object-cover aspect-video"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">The Art of Building Wealth: 7 Habits of Financially Successful Men</h3>
                  <p className="text-muted-foreground mt-2">
                    Learn the proven strategies used by high-net-worth individuals to build lasting wealth.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://via.placeholder.com/150" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Jane Smith</p>
                      <p className="text-xs text-muted-foreground">May 15, 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background p-6 rounded-lg shadow-lg">
                <CardHeader>
                  <img
                    src="https://via.placeholder.com/400x225"
                    width="400"
                    height="225"
                    alt="Blog Post"
                    className="rounded-lg object-cover aspect-video"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Mastering the Art of Confidence: 10 Proven Techniques</h3>
                  <p className="text-muted-foreground mt-2">
                    Discover the secrets to building unshakable self-confidence and achieving your goals.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://via.placeholder.com/150" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Michael Johnson</p>
                      <p className="text-xs text-muted-foreground">April 25, 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Empowered</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Mission
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Success Stories
            </Link>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Guides
            </Link>
            <Link href="#" prefetch={false}>
              Podcasts
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Community</h3>
            <Link href="#" prefetch={false}>
              Events
            </Link>
            <Link href="#" prefetch={false}>
              Forum
            </Link>
            <Link href="#" prefetch={false}>
              Meetups
            </Link>
            <Link href="#" prefetch={false}>
              Webinars
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Support</h3>
            <Link href="#" prefetch={false}>
              Help Center
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}



function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
