// Photo: point `photo` at a real image under public/images/team/ to show it.
// Any path containing "placeholder" (or a falsy value) falls back to
// auto-generated initials in TeamCard.PhotoOrInitials. All members use initials
// today; drop in a real photo path per member to replace them.
// Links: an empty string ("") hides that icon. TeamCard renders only populated
// links via isUsableLink(), so a card degrades cleanly while entries are pending
// (e.g. Vincent has none yet). Fill in a real URL or email to surface the icon.
export const team = [
  {
    id: 1,
    name: "Victor Salazar",
    role: "Founder & Technical Lead",
    specialty: "Full Stack Development",
    bio: "Leads product direction, software architecture, data systems, client discovery, and development of the OptimalDevs platform.",
    photo: "/images/team/placeholder.jpg",
    links: {
      website: "https://github.com/victor0302/portfolio",
      github: "https://github.com/victor0302",
      linkedin: "",
      email: "",
    },
  },
  {
    id: 2,
    name: "Diyor Rudov",
    role: "Security Lead",
    specialty: "Security & Full Stack",
    bio: "Focuses on application security, platform security, secure architecture, and security practices across OptimalDevs infrastructure and products.",
    photo: "/images/team/placeholder.jpg",
    links: {
      website: "https://0xdiyor.com",
      github: "https://github.com/0xDiyor",
      linkedin: "https://www.linkedin.com/in/diyor-r/",
      email: "",
    },
  },
  {
    id: 3,
    name: "Luis Padilla",
    role: "DevOps Lead",
    specialty: "DevOps & Full Stack",
    bio: "Builds deployment, CI/CD, observability, and cloud infrastructure supporting OptimalDevs applications and platform services.",
    photo: "/images/team/placeholder.jpg",
    links: {
      website: "",
      github: "https://github.com/Luis2GR",
      linkedin: "",
      email: "",
    },
  },
  {
    id: 4,
    name: "Vincent Vitacco",
    role: "Infrastructure Lead",
    specialty: "Infrastructure & Full Stack",
    bio: "Works on cloud architecture, infrastructure, reliability, and scalable systems supporting OptimalDevs products and deployments.",
    photo: "/images/team/placeholder.jpg",
    links: {
      website: "",
      github: "",
      linkedin: "",
      email: "",
    },
  },
]
