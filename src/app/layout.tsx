import "./globals.css";
import Nav from "../components/navigation/Nav";
// import UrlBar from "@/lib/UrlBar/UrlBar";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
      <html lang="en">
        <body>
          <div className="mb-5">
            <Nav/>
          </div>
          {children}
        </body>
      </html>
  );
}
