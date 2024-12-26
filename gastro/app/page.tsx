import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  ChefHat,
  Book,
  MessageCircle,
  Cpu,
  Zap,
  CheckCircle,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-24 bg-white text-black dark:bg-black dark:text-white py-32">
        <div className="container mx-auto text-center py-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-black dark:text-white drop-shadow-lg">
            Your AI-Powered Culinary Assistant
          </h1>
          <p className="text-xl md:text-xl mb-8 text-gray-700 dark:text-gray-100 drop-shadow">
            Discover recipes, get cooking tips, and explore the world of
            gastronomy with Gastro
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <Input
                type="text"
                placeholder="Ask about a recipe or cooking technique..."
                className="w-full block py-6 px-4 pl-4 pr-12 rounded-full text-xl bg-white bg-opacity-20 text-white placeholder-white shadow-xl focus:ring-2 focus:ring-blue-300 border-none"
              />
              <Button
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-white text-black shadow-lg hover:bg-black hover:text-white transition-colors overflow-hidden"
                size="icon"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-28 bg-white dark:bg-black px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center pb-20 text-black dark:text-white">
            What Gastro Can Do For You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ChefHat className="h-12 w-12" />}
              title="Recipe Suggestions"
              description="Get personalized recipe ideas based on your preferences and available ingredients."
            />
            <FeatureCard
              icon={<Book className="h-12 w-12" />}
              title="Cooking Techniques"
              description="Learn new cooking methods and improve your culinary skills with step-by-step guides."
            />
            <FeatureCard
              icon={<MessageCircle className="h-12 w-12" />}
              title="Culinary Q&A"
              description="Ask any food-related question and get expert answers instantly."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-28 bg-white dark:bg-black px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-black dark:text-white">
            How Gastro Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <StepCard
              icon={<Cpu className="h-8 w-8" />}
              title="Powered by Coagent"
              description="Gastro utilizes Coagent, developed by Copilotkit, for advanced AI processing and natural language understanding."
            />
            <StepCard
              icon={<Zap className="h-8 w-8" />}
              title="Real-time Analysis"
              description="Coagent analyzes your input in real-time, leveraging its vast culinary knowledge base to provide accurate responses."
            />
            <StepCard
              icon={<CheckCircle className="h-8 w-8" />}
              title="Personalized Results"
              description="Receive tailored recipes, cooking tips, or answers to your questions, all powered by Coagent's intelligent processing."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-28 bg-white dark:bg-black px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-black dark:text-white">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-1">
            <TestimonialCard
              quote="Gastro has revolutionized my cooking! It's like having a professional chef at my fingertips."
              author="Emily S., Home Cook"
              image="/placeholder.svg"
            />
            <TestimonialCard
              quote="As a professional chef, I'm impressed by the depth of knowledge Gastro provides. It's an invaluable tool in my kitchen."
              author="Chef Michael R."
              image="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-black dark:bg-black dark:text-white px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6">
            Ready to Transform Your Cooking?
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-200">
            Join thousands of food enthusiasts and culinary professionals using
            Gastro today.
          </p>
          <Button
            size="default"
            variant="ghost"
            className="bg-black text-white border-black  dark:bg-black dark:text-white dark:border-white  border-2 text-xl font-medium   py-6 px-8 rounded-xl shadow-sm  dark:hover:bg-white dark:hover:text-black my-8 "
          >
            Get Started for Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black dark:bg-black dark:text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4"> Gastro</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-sm hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-sm hover:underline"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-sm hover:underline"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-sm hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p>&copy; 2025 Gastro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-white text-black dark:bg-black dark:text-white border border-gray-200 dark:border-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-4 text-xl">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}

function StepCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-white text-black dark:bg-black dark:text-white border border-gray-200 dark:border-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({
  quote,
  author,
  image,
}: {
  quote: string;
  author: string;
  image: string;
}) {
  return (
    <Card className="bg-white text-black dark:bg-black dark:text-white border border-gray-200 dark:border-gray-800">
      <CardContent className="flex items-start gap-4 pt-6">
        <Image
          src={image}
          alt={author}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-lg mb-4">&quot;{quote}&quot;</p>
          <p className="font-semibold">- {author}</p>
        </div>
      </CardContent>
    </Card>
  );
}
