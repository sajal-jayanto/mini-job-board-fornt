import Header from "@/components/Header";
import { ReactNode, Suspense } from "react";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <Suspense fallback={<div>Loading job details...</div>}>
      <Header />
      {children}
    </Suspense>
  );
};

export default PublicLayout;
