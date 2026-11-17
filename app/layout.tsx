import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhyana Anandotsavam 2026 | PRAGNAX",
  description:
    "Join PRAGNAX for Dhyana Anandotsavam on 29 November 2026 at Visvesvaraya Auditorium, Khairatabad, Hyderabad."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
