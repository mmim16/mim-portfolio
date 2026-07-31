import Container from "../layout/container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#6B7F5F]">
            Contact
          </p>

          <h2 className="mb-6 text-5xl">
            Let's Connect!
          </h2>

          <p className="mb-12 text-lg leading-8 text-gray-600">
            Whether you have an opportunity, a project, or simply want
            to connect, I'd love to hear from you.
          </p>

          <div className="flex flex-col gap-4">

            <a
              href="mailto:your@email.com"
              className="rounded-xl border border-[#A8B79F] p-4 transition hover:bg-[#F1F5EF]"
            >
              📧 mmm685@rutgers.edu
            </a>

            <a
              href="https://github.com/mmim16"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#A8B79F] p-4 transition hover:bg-[#F1F5EF]"
            >
              💻 GitHub
            </a>

            <a
              href="https://linkedin.com/in/m16mim"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#A8B79F] p-4 transition hover:bg-[#F1F5EF]"
            >
              💼 LinkedIn
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}
