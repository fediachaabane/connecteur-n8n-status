import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/logo.png";
import salonInterior from "@/assets/salon-interior.jpg";

const Home = () => (
  <div>
    {/* Hero */}
    <section className="relative">
      <img
        src={heroImage}
        alt="Beautiful woman with gorgeous hair"
        className="w-full h-[500px] object-cover"
        width={1280}
        height={720}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground max-w-lg leading-tight">
            Welcome to our salon "beauty salon"
          </h1>
        </div>
      </div>
    </section>

    {/* Welcome Message */}
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
      <img
        src={logo}
        alt="Glow & Shine logo"
        className="h-40 w-40 mx-auto mb-8" // augmente la taille ici
        loading="lazy"
      />
      <h2 className="text-3xl font-bold text-primary mb-6">
        Welcome to Glow & Shine Beauty Salon ✨
      </h2>
      <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
        <p>
          At Glow & Shine, we believe that beauty is more than just appearance —
          it's about confidence, self-care, and feeling your absolute best. Our
          salon offers a relaxing and friendly environment where our
          professional team is dedicated to bringing out your natural glow.
        </p>
        <p>
          Whether you're looking for a fresh haircut, a new color, or a complete
          transformation, we are here to make your experience enjoyable and
          unforgettable.
        </p>
        <p className="text-xl font-medium text-primary">
          Let us help you shine, every day 💫
        </p>
      </div>
    </section>

    {/* Salon preview */}
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
      <img
        src={salonInterior}
        alt="Our beautiful salon interior"
        className="w-full rounded-2xl shadow-lg"
        loading="lazy"
        width={1280}
        height={720}
      />
    </section>
  </div>
);

export default Home;
