import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Selamat Ulang Tahun🎉🎉",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={""}>
        <ThemeProvider
          enableSystem={false}
          themes={["light", "dark"]}
          defaultTheme="dark"
          attribute="class"
        >
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
