import { FaTrophy, FaAward, FaMedal, FaCertificate } from "react-icons/fa";

const achievementsList = [
  {
    icon: <FaTrophy className="text-blue-400 text-2xl" />,
    title: "Hack the Bronx 3 Winner",
    category: "Programmers with Experience Category",
    description: "1st Place Winner in the Programmers with Experience category",
  },
  {
    icon: <FaMedal className="text-blue-400 text-2xl" />,
    title: "MLH Hack This Fall",
    category: "Runner-Up",
    description: "1st Runner-Up at India's biggest hackathon",
  },
  {
    icon: <FaTrophy className="text-blue-400 text-2xl" />,
    title: "Best Use of GitHub",
    category: "MLH React vs Angular HackBattle",
    description: "Winner of the Best Use of GitHub award",
  },
  {
    icon: <FaMedal className="text-blue-400 text-2xl" />,
    title: "Nillion AI Bounty",
    category: "2nd Place",
    description: "2nd Place Winner in Nillion AI Bounty competition",
  },
  {
    icon: <FaMedal className="text-blue-400 text-2xl" />,
    title: "WaffleHacks",
    category: "Honorable Mention",
    description: "Honorable Mention for Student Food Insecurity solution",
  },
  {
    icon: <FaMedal className="text-blue-400 text-2xl" />,
    title: "Best Networking Hack",
    category: "MLH Hack Your Portfolio",
    description: "Award for Best Networking Hack",
  },
  {
    icon: <FaMedal className="text-blue-400 text-2xl" />,
    title: "Build on Aptos Hackathon",
    category: "2nd Place - Consumer Track",
    description: "1st Runner-Up in the Consumer Track",
  },
  {
    icon: "✨",
    title: "TON Open Hack",
    category: "Top-10 Finalist",
    description: "Selected as Top-10 Finalist",
  },
  {
    title: "LinkedIn Skill Badge",
    description: "Validated skills and expertise in web development",
    icon: <FaCertificate className="text-blue-400 text-2xl" />,
    tags: ["Certification", "Skills"],
  },
  {
    title: "Google Cloud Program",
    description: "30 days of Google Cloud Challenge",
    icon: <FaAward className="text-green-500 text-2xl" />,
    date: "2022",
    link: "https://google.qwiklabs.com",
    tags: ["Cloud", "Google"],
  },
];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-20 px-6 border-t border-slate-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Hackathon Achievements & Competitions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-2xl min-w-fit">{achievement.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">
                  {achievement.title}
                </h3>
                <p className="text-cyan-400 text-sm mb-2">
                  {achievement.category}
                </p>
                <p className="text-slate-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
