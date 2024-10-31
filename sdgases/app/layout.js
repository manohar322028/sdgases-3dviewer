import "./globals.css";

export const metadata = {
  title: "3D Viewer",
  description: "3D model viewer application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
