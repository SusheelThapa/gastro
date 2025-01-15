import { BookOpen } from "lucide-react";
import { RecipeCard } from "./recipe-card";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { RecipeModal } from "./recipe-model";

export interface Recipe {
  id: string;
  title: string;
  image?: string;
  ingredients: string[];
  instructions: string;
  source_url?: string;
  rating?: number;
}

interface GastroAnswerProps {
  type: "chat" | "recipe";
  result: string;
  recipes: Recipe[];
}

export const GastroAnswer = ({ type, result, recipes }: GastroAnswerProps) => {
  const [selectedRecipe, setSelectedRecipe] = useState<
    (typeof recipes)[0] | null
  >(null);

  const handleShowMore = (recipe: (typeof recipes)[0]) => {
    setSelectedRecipe(recipe);
  };

  console.log(selectedRecipe);

  if (type === "chat") {
    console.log(result);
    return (
      <div className="max-w-5xl w-full">
        <div>
          <div className="flex items-center gap-2 mb-4 text-gray-200"></div>
          <ReactMarkdown>{result}</ReactMarkdown>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center gap-2 mb-6 ">
        <BookOpen className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Found Recipes</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            handleShowMore={handleShowMore}
            title={recipe.title}
            image={recipe.image}
            rating={recipe.rating}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            sourceUrl={recipe.source_url}
          />
        ))}
      </div>

      {selectedRecipe && (
        <RecipeModal
          isOpen={!!selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          recipe={selectedRecipe}
        />
      )}
    </div>
  );
};
