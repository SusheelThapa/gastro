"use client";

import React, { useState } from "react";
import GastroWrapper from "@/components/gastro-wrapper";
import { GastroProvider } from "@/lib/gastro-provider";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import InfoModal from "@/components/info-modal";

const GastroPage: React.FC = () => {
  const [showInfo, setShowInfo] = useState(true);

  const handleCloseButton = () => {
    setShowInfo(false);
  };

  return (
    <>
      {showInfo && <InfoModal handleCloseButton={handleCloseButton} />}
      <div>
        <CopilotKit runtimeUrl="/api/copilotkit" agent="gastro_agent">
          <GastroProvider>
            <GastroWrapper />
          </GastroProvider>
        </CopilotKit>
      </div>
    </>
  );
};

export default GastroPage;
