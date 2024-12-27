import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  image,
}) => {
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
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-28 bg-white dark:bg-black px-4 sm:px-6 lg:px-8">
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
  );
};
