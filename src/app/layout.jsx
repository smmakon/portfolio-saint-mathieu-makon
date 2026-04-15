
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Providers from "../components/Providers";

export const metadata = {
  title: "Portfolio Next.js",
  description: "Mon portfolio personnel",
};

export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}