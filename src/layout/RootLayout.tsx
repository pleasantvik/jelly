import { ReactNode } from "react";
import SideNav from "./SideNav";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="grid grid-cols-[260px_1fr] h-screen overflow-auto">
      <aside className="h-screen  sticky  top-0">
        <SideNav />
      </aside>
      <main className="bg-white min-h-screen grid auto-rows-max-auto">
        {children}
      </main>
    </section>
  );
};

export default RootLayout;
