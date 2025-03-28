import { Link } from "react-router-dom";

const HomeCard = ({ icon, title, description, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 h-full">
      {/* Fixed size wrapper with uniform image */}
      <div className="w-24 h-24 flex items-center justify-center bg-gray-800 rounded-full overflow-hidden mb-4">
        <img src={icon} alt={title} className="w-[80%]  object-contain" />
      </div>
      
      <h3 className="text-white text-lg mb-2">{title}</h3>
      <p className="text-white text-sm mb-4 flex-grow">{description}</p>
      
      <Link
        to={buttonLink}
        className="bg-white hover:bg-gray-300 text-[var(--primary-color)] font-bold px-6 py-2 rounded-full transition duration-300 mt-auto"
      >
        {buttonText}
      </Link>
    </div>
  );
};




export default HomeCard;
