/** @format */

import { teamMembers } from "./../constants/index";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="text-black">
      <div className="container flex flex-col items-center text-center mx-auto max-w-5xl px-5">
        <h2 className="my-3 text-2xl font-bold text-pretty lg:text-4xl">
          The Team
        </h2>
        <p className=" max-w-3xl lg:text-xl">
          An open-minded team with the plan of build the next adaptive product
          for the world.
        </p>
      </div>

      <div className="max-w-5xl mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4 mx-auto text-center">
        {teamMembers.map((team) => (
          <TeamCard
            key={team.id}
            name={team.name}
            role={team.title}
            image={team.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
