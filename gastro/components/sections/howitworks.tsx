import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle, Cpu, Zap } from "lucide-react";

interface StepCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => {
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
};

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-28 bg-white dark:bg-black px-4 sm:px-6 lg:px-8">
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
  );
};
