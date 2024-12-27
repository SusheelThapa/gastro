"use client";

import React from "react";

import GastroWrapper from "@/components/gastro-wrapper";
import { GastroProvider } from "@/lib/gastro-provider";

import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";

const GastroPage: React.FC = () => {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit" agent="gastro_agent">
      <GastroProvider>
        <GastroWrapper />
      </GastroProvider>
    </CopilotKit>
  );
};

export default GastroPage;
