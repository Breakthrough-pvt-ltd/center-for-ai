type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Bob Smith",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Carol Lee",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
  },
];

export default function Team() {
  return (
    <div className="relative bg-gradient-bg min-h-screen">
      {/* Title Section */}
      <div className="flex items-center justify-start px-8 pt-36 pl-36">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-text-gradient-sub max-w-lg pb-4">
          | Meet Our Team
        </h1>
      </div>

      {/* Team Section */}
      <div className="px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-36">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={`${member.name}'s avatar`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
