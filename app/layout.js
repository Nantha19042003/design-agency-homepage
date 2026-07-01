// Root layout - this wraps every page in the app.
// We load Bootstrap's CSS + icon font here so they are available everywhere.

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

export const metadata = {
  title: "Webion Technology | Design Agency",
  description:
    "Webion Technology is a design agency helping brands with UI/UX design, web development, branding and digital marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
