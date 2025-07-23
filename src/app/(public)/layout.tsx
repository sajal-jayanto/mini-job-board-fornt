import Header from "@/components/Header";
import { ReactNode } from "react";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PublicLayout;
