import Container from "../layout/container";

export default function Intro() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <Container>
        <div className="max-w-3xl">

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6B7F5F]">
            Computer Science & Data Science
          </p>

          <h1 className="mb-6 text-6xl font-semibold leading-tight text-[#2E2E2E] md:text-7xl">
            Hi, I'm Mim.
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-8 text-gray-600">
            I am currently a Junior pursuing a double major in Computer Science and Data Science-Statistics,
            along with a minor in Critical Intelligence Studies at Rutgers University Honors College.
          </p>

          <div className="flex gap-4">

            <a
              href="#projects"
              className="rounded-full bg-[#40513B] px-6 py-3 text-white transition hover:bg-[#2F3E2A]"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#40513B] px-6 py-3 text-[#40513B] transition hover:bg-[#40513B] hover:text-white"
            >
              Contact Me
            </a>

          </div>

        </div>
      </Container>

      <div 
        aria-hidden="true"
        className="absolute right-12 top-32 h-48 w-48 rounded-full bg-[#A8B79F]/60 blur-3xl"
     />

     <div
        aria-hidden="true"
        className="absolute bottom-12 left-32 h-48 w-48 rounded-full bg-[#A8B79F]/50 blur-3xl"
     />
    </section>
  );
}
