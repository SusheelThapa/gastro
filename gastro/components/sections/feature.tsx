import React from "react";
import { ChefHat, Book, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
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
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-28 bg-white dark:bg-black px-4 sm:px-6 lg:px-8">
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
  );
};
