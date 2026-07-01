// Portfolio section - a simple grid of past projects.
// Using picsum.photos as placeholder images for demo purposes.


const projects = [
  {
    title: "Bloom Cafe Website",
    category: "Web Development",
    image: "https://picsum.photos/seed/bloom-cafe/600/450",
  },
  {
    title: "Nimbus App Redesign",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/nimbus-app/600/450",
  },
  {
    title: "Orbit Fitness Branding",
    category: "Branding",
    image: "https://picsum.photos/seed/orbit-fitness/600/450",
  },
  {
    title: "Northpeak Real Estate",
    category: "Web Development",
    image: "https://picsum.photos/seed/northpeak/600/450",
  },
  {
    title: "Sunday Market Campaign",
    category: "Digital Marketing",
    image: "https://picsum.photos/seed/sunday-market/600/450",
  },
  {
    title: "Voyage Travel App",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/voyage-app/600/450",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Work</h2>
          <p className="text-muted">A few projects we've worked on recently</p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-12 col-sm-6 col-lg-4" key={project.title}>
              <div className="portfolio-item">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div>
                    <h6 className="fw-bold mb-1">{project.title}</h6>
                    <small>{project.category}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
