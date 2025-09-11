import "./globals.css";

export const metadata = {
  title: "Interval Timer",
  description: "Minimal Next.js interval timer app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
