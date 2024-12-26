import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <nav className="border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-black py-3">
      <div className="container max-w-6xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-3xl font-bold text-black dark:text-white"
        >
          Gastro
        </Link>
        <div className="flex-1 flex justify-center items-center">
          {["Features", "How It Works", "Testimonials"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              asChild
              className="text-black dark:text-white hover:underline tracking-wider font-medium text-lg"
            >
              <Link href={"#" + item.toLowerCase().replace(" ", "-")}>
                {item}
              </Link>
            </Button>
          ))}
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
