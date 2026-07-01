// Services section - shows what the agency offers.
// The data is just a plain array so it's easy to edit or add more services later.

const services = [
  {
    icon: "bi-palette",
    title: "UI/UX Design",
    description:
      "We design clean, easy to use interfaces for websites and apps, focused on how real people use them.",
  },
  {
    icon: "bi-code-slash",
    title: "Web Development",
    description:
      "We build fast, responsive websites using modern tools like Next.js, so your site works well on every device.",
  },
  {
    icon: "bi-award",
    title: "Branding",
    description:
      "From logos to full brand guidelines, we help you build a visual identity that stands out.",
  },
  {
    icon: "bi-megaphone",
    title: "Digital Marketing",
    description:
      "We help you reach the right audience through social media, SEO and content strategy.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Services</h2>
          <p className="text-muted">A few of the things we're good at</p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-12 col-sm-6 col-lg-3" key={service.title}>
              <div className="service-card text-center">
                <i className={`bi ${service.icon} service-icon`}></i>
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="text-muted mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
