import Container from "../layout/container";
import experience from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <Container>

        <p className="mb-2 uppercase tracking-[0.3em] text-sm text-[#6B7F5F]">
          Experience
        </p>

        <h2 className="mb-16 text-5xl">
          Professional Experience
        </h2>

        <div className="space-y-10">

          {experience.map((job) => (
            <div
              key={job.company + job.role}
              className="border-l-2 border-[#A8B79F] pl-8"
            >
              <p className="text-sm text-[#6B7F5F]">
                {job.duration}
              </p>

              <h3 className="mt-2 text-2xl">
                {job.role}
              </h3>

              <p className="font-medium text-gray-700">
                {job.company}
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                {job.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}
