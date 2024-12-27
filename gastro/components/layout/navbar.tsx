import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";

export function Navbar() {
  return (
    <nav className="w-full max-w-5xl space-y-8 flex justify-between items-end border-b-2 pb-4 border-gray-600">
      <Link href={"/"} className="text-4xl md:text-5xl font-bold">
        Gastro
      </Link>
      <div className="flex-1 flex justify-center items-center">
        {["Features", "How It Works", "Testimonials"].map((item) => (
          <Button
            key={item}
            variant="ghost"
            asChild
            className=" hover:underline tracking-wider font-medium text-lg"
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
