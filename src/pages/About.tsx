import salonTeam from "@/assets/salon-team.jpg";
import salonInterior from "@/assets/salon-interior.jpg";

const About = () => (
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
    <h1 className="text-4xl font-bold text-primary mb-8 text-center">
      About Us
    </h1>

    <div className="grid gap-10 lg:grid-cols-2 items-center mb-12">
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          At <strong className="text-foreground">Glow & Shine</strong>, we are
          passionate about helping you look and feel your best. Founded with the
          belief that everyone deserves to feel beautiful and confident, our
          salon has grown into a trusted destination for hair care and beauty
          services.
        </p>

        <p>
          Our mission is simple: to provide exceptional beauty services in a
          warm, welcoming environment. We value customer satisfaction above all
          else, and every visit is an opportunity for us to exceed your
          expectations.
        </p>
        <p>
          We believe in the power of beauty to transform not just your
          appearance, but your confidence and self-esteem. That's why our team
          takes the time to listen, understand your needs, and deliver results
          that make you shine.
        </p>
      </div>
      <img
        src={salonInterior}
        alt="Our salon environment"
        className="rounded-2xl shadow-lg w-full"
        loading="lazy"
        width={1280}
        height={720}
      />
    </div>

    <div className="grid gap-10 lg:grid-cols-2 items-center">
      <img
        src={salonTeam}
        alt="Our professional team"
        className="rounded-2xl shadow-lg w-full lg:order-first"
        loading="lazy"
        width={1280}
        height={720}
      />
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <h2 className="text-2xl font-bold text-foreground">Our Team</h2>
        <p>
          Our team of professional and friendly stylists brings years of
          experience and a genuine passion for beauty. Each member is dedicated
          to staying up-to-date with the latest trends and techniques to offer
          you the best possible service.
        </p>
        <p>
          From the moment you walk in, you'll be greeted with warmth and care.
          We treat every client like family and take pride in building lasting
          relationships based on trust, quality, and exceptional results.
        </p>
      </div>
    </div>
  </div>
);

export default About;
