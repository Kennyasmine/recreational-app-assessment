import { teams } from "../constants"

const AboutTeams = () => {
  return (
    <div className="max-w-6xl m-auto">
      <h2 className="text-navy-blue text-2xl font-bold mb-6 ml-10 lg:md-0">Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-[100px] items-center">
        {teams.map((team) => (
            <div key={team.image} className="flex flex-col items-center justify-center text-center">
                <img src={team.image} alt="team image" className="relative w-[100px] h-[100px] mb-4 flex items-center justify-center rounded-full overflow-hidden" />
                <p className="text-navy-blue text-m font-bold mb-2">{team.value}</p>
                <h3 className="text-navy-blue text-lg font-bold">{team.position}</h3>
            </div>
        ))}
      </div>
    </div>
  )
}

export default AboutTeams
