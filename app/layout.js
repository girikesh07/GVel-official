import "./globals.css";

export const metadata = {
  title: "GVel — Every Journey, One Platform",
  description:
    "Discover India's festivals, explore destinations, compare travel routes and plan a trip that fits your budget with GVel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
