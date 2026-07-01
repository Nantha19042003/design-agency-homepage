// Hero section - the first thing visitors see.
// Kept as a server component since there is no interactivity here.

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3">
          We design brands people <span className="text-accent">remember</span>
        </h1>

        <p className="lead mb-4 mx-auto" style={{ maxWidth: "600px" }}>
          Webion Technology is a small design agency that helps startups and businesses
          build a strong digital presence through thoughtful design and development.
        </p>

        <a href="#portfolio" className="btn btn-accent btn-lg px-4 me-2">
          View Our Work
        </a>
        <a href="#contact" className="btn btn-outline-light btn-lg px-4">
          Get Started
        </a>
      </div>
    </section>
  );
}
