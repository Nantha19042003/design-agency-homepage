export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer py-4">
      <div className="container text-center">
        <p className="mb-0 small">
          &copy; {year} Webion Technology. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
