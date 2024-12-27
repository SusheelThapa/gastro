import React from "react";
import { Card } from "./ui/card";
import { CategoryCard } from "./layout/category-card";
import { Textarea } from "./ui/textarea";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

const RecipeSearch: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto p-6 space-y-32 flex flex-col items-center">
        <div className="w-full max-w-5xl space-y-8 flex justify-between items-end border-b-2 pb-4 border-gray-600">
          <Link href={"/"} className="text-4xl md:text-5xl font-bold">
            Gastro
          </Link>
          <ModeToggle />
        </div>
        <div className="w-full max-w-5xl space-y-8">
          <div className="relative">
            <Card className="shadow-lg dark:bg-card">
              <Textarea
                placeholder="Search delicious recipes..."
                className="min-h-[200px] resize-none border-0 focus:ring-0 text-6xl p-6 bg-transparent "
                maxLength={250}
              />
              <div className="absolute bottom-4 right-6 text-sm text-muted-foreground">
                0 / 250
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CategoryCard
              icon="🍽️"
              title="Top recipes for dinner"
              className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            />
            <CategoryCard
              icon="🥑"
              title="Healthy breakfast options"
              className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            />
            <CategoryCard
              icon="🥪"
              title="Quick lunch recipes"
              className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            />
            <CategoryCard
              icon="🍰"
              title="Best dessert discoveries"
              className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeSearch;
