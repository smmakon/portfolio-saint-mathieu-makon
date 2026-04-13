import "./globals.css";
import ReduxProvider from "@/redux/provider";

export const metadata = {
  title: "Portfolio Next.js",
  description: "Mon portfolio personnel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}