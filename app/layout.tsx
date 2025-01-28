import "@/app/ui/global.css"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Acme Dashboard | %s",
    default: "Acme Dasboard"
  },
  description: "The official Next.js Course Dashboard.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh")
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="{`${inter.className} antialiased`}">{children}</body>
    </html>
  );
}
