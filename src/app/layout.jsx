import "./globals.css";
import ReduxProvider from "../redux/ReduxProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Portfolio Next.js",
  description: "Mon portfolio personnel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}