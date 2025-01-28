import { Link } from "react-router-dom";

export default function Highlight({ title, description, imageUrl, link }) {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 md:h-64 lg:h-96">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-6 bg-white">
        <div className="space-y-2">
          <Link to={link} className="inline-block group">
            <h3 className="text-xl font-semibold relative">
              <span className="bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                {title}
              </span>
            </h3>
          </Link>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
