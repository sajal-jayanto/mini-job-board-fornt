import Header from "@/components/Header";
import { ReactNode } from "react";

const AdminLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AdminLayout;
