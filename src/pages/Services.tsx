import haircutImg from "@/assets/service-haircut.jpg";
import coloringImg from "@/assets/service-coloring.jpg";
import treatmentImg from "@/assets/service-treatment.jpg";
import stylingImg from "@/assets/service-styling.jpg";
import beardImg from "@/assets/service-beard.jpg";

const services = [
  {
    title: "Haircuts",
    description: "From classic styles to modern trends, our expert stylists craft the perfect cut tailored to your face shape, hair type, and personal style. Walk out feeling fresh and confident.",
    image: haircutImg,
  },
  {
    title: "Hair Coloring",
    description: "Whether you want subtle highlights, a bold new shade, or a complete color transformation, our colorists use premium products to achieve vibrant, long-lasting results while keeping your hair healthy.",
    image: coloringImg,
  },
  {
    title: "Hair Treatments",
    description: "Revitalize your hair with our deep conditioning treatments, keratin smoothing, and nourishing masks. We restore shine, strength, and softness to damaged or tired hair.",
    image: treatmentImg,
  },
  {
    title: "Styling (Blow Dry, Curls, Straightening)",
    description: "Getting ready for a special occasion or just want a polished look? Our styling services include professional blow-dries, elegant curls, and sleek straightening for any event.",
    image: stylingImg,
  },
  {
    title: "Beard Grooming",
    description: "Gentlemen, we've got you covered. Our beard grooming services include precise trimming, shaping, and conditioning to keep your beard looking sharp and well-maintained.",
    image: beardImg,
  },
];

const Services = () => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
    <h1 className="text-4xl font-bold text-primary mb-4 text-center">Our Services</h1>
    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      We offer a wide range of professional beauty and hair services to help you look and feel your absolute best.
    </p>

    <div className="space-y-12">
      {services.map((s, i) => (
        <div
          key={s.title}
          className={`flex flex-col gap-6 ${
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full lg:w-1/2 rounded-2xl shadow-lg object-cover h-72"
            loading="lazy"
            width={640}
            height={640}
          />
          <div className="lg:w-1/2 space-y-3">
            <h2 className="text-2xl font-bold text-foreground">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
