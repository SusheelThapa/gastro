import React from 'react';
import { Card } from '../ui/card';

interface CategoryCardProps {
  icon: string;
  title: string;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, className }) => {
  return (
    <Card className={`p-4 transition-all duration-200 cursor-pointer flex items-center gap-3 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] ${className}`}>
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{title}</span>
    </Card>
  );
};
