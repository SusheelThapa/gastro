import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";

export function Navbar() {
  return (
    <nav className=" container mx-auto border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-black py-3 flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-24">
      <Link href="/" className="text-3xl font-bold text-black dark:text-white">
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
            <Link href={`#${item.toLowerCase().replace(" ", "-")}`}>
              {item}
            </Link>
          </Button>
        ))}
      </div>
      <ModeToggle />
    </nav>
  );
}
