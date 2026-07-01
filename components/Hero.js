export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container text-center">
        <h1 className="fw-bold">
          We design brands people <span className="text-accent">remember</span>
        </h1>

        <p className="lead">
          Webion Technology is a small design agency that helps startups and
          businesses build a strong digital presence through thoughtful design
          and development.
        </p>

        <div className="btn-group">
          <a href="#portfolio" className="btn btn-accent btn-lg">
            View Our Work
          </a>
          <a href="#contact" className="btn btn-hero-outline btn-lg">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}