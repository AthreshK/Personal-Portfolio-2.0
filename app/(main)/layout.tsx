import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <div className="pt-28 md:pt-36">
          <Header />
          {children}
          <Footer />
        </div>

        <Toaster position="top-right" />
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
