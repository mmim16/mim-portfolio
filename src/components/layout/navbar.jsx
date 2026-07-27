import Container from "./container";

const links = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#FFF6E3]/80 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-6">

          <a
            href="/"
            className="font-serif text-3xl text-[#40513B]"
          >
            Muntaha Mim
          </a>

          <div className="hidden gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[#2E2E2E] transition hover:text-[#6B7F5F]"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>
      </Container>
    </nav>
  );
}
