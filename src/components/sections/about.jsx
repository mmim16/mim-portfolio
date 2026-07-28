import Container from "../layout/container";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>

        <div className="grid gap-16 md:grid-cols-2">

          <div className="flex justify-center">

            <div className="h-80 w-80 rounded-3xl flex items-center justify-center">
              <Image
                src="/images/Muntaha.Mim_Headshot05272026.png"
                alt="Professional headshot of Mim"
                width={320}
                height={320}
                className="rounded-3xl object-cover"
              />

            </div>

          </div>

          <div>

            <p className="mb-2 uppercase tracking-[0.3em] text-sm text-[#6B7F5F]">
              About
            </p>

            <h2 className="mb-6 text-5xl">
              A little about me
            </h2>

            <p className="mb-6 leading-8 text-gray-600">
              I am an aspiring software engineer who enjoys
              solving problems through code.
            </p>

            <p className="mb-8 leading-8 text-gray-600">
              Outside of the classroom, I enjoy exploring new places, caring for plants, and watching movies/shows.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <h3 className="font-semibold mb-2">
                  Education
                </h3>

                <p className="text-gray-600">
                  Computer Science  · 
                  Data Science · 
                  Critical Intelligence Studies
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Interests
                </h3>

                <p className="text-gray-600">
                  Photography · Crocheting · Cooking
                </p>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
