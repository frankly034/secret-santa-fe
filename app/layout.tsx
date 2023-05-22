import "./globals.css";

export const metadata = {
  title: "Secret Santa APP",
  description: "Gift sharing app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
