/** @format */
interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamCard = ({ name, role, image }: TeamCardProps) => {
  return (
    <div>
      <img
        className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44"
        src={image}
        alt=""
      />
      <p className="mt-5 text-lg font-bold sm:text-xl sm:mt-8 font-pj text-black">
        {name}
      </p>
      <p className="text-base font-normal font-pj text-black">{role}</p>
    </div>
  );
};

export default TeamCard;
