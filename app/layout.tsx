import { Caudex } from "next/font/google";
import "./globals.css";

const caudex = Caudex({
  subsets: ["latin"],
  weight: ["400", "700"], // Sesuaikan kebutuhan
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={caudex.className}>{children}</body>
    </html>
  );
}
