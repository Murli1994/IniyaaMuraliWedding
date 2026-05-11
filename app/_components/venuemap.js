import Image from "next/image";
import Link from "next/link";

export default function VenueMap() {
  return (
    <section className="w-full flex flex-col items-center py-10">
      <h2 className="text-5xl mb-6 font-amatic">Venue</h2>

      <Link
        href="https://maps.app.goo.gl/wLizXVbhFUBiVboa6"
        target="_blank"
        className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-lg"
      >
        <Image
          src="/venuemap1.png"
          alt="Wedding Venue Map"
          width={400}
          height={400}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <h2 className="bg-white px-5 py-2 rounded-full font-semibold shadow-md hover:scale-110 transition duration-300">
            Open in Maps
          </h2>
        </div>
      </Link>
    </section>
  );
}
