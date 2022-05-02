import React, { useEffect } from "react";
import { Layout } from "@/components/common";
import Repositories from "@/containers/Repositories";

export const LandingPage: React.FC = () => {
  return (
    <Layout>
      <div className="relative">
        <Repositories />
      </div>
    </Layout>
  );
};

export default LandingPage;
