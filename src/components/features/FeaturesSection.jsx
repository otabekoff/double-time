import "./features.css";

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-content">
        <h2 className="features-heading">
          Don't take our word for it.
          <br />
          Take theirs...
        </h2>

        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src="/model.png" alt="Tanya Singer" />
          </div>
          <div className="testimonial-text">
            <h3 className="testimonial-name">Tanya Singer</h3>
            <p className="testimonial-role">Director of Digital Marketing</p>
            <p className="testimonial-quote">
              Your product helped us to learn about our customers, intimately.
            </p>
          </div>
        </div>

        <div className="features-logos">
          <div className="logo-card">
            <img src="/pepsi.svg" alt="Pepsi" />
          </div>
          <div className="logo-card">
            <img src="/starbucks.svg" alt="Starbucks" />
          </div>
          <div className="logo-card">
            <img src="/twitch.svg" alt="Twitch" />
          </div>
          <a href="#customers" className="logo-more">
            More customers →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
