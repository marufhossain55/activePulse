import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { IoLogoTwitter } from 'react-icons/io';
import { Link } from 'react-router-dom';

const TrainerCard = ({ trainer }) => {
  console.log(trainer);
  return (
    <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
      <figure className="p-6 pb-0">
        <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
          <img
            src={trainer?.profileImage}
            alt={trainer?.name}
            title="user name"
            width="80"
            height="80"
            className="max-w-full rounded-full"
          />
        </span>
      </figure>
      <div className="p-2">
        <header className="mb-1">
          <h3 className="text-xl font-medium text-slate-700">
            {trainer?.name}
          </h3>
          <p className=" text-slate-400">
            {trainer?.specialties?.map((specialties) => (
              <span>{specialties} </span>
            ))}
          </p>
        </header>
      </div>
      <div>Experience: {trainer?.yearsOfExperience} years</div>
      <div>
        <div className="mt-4">Available Slots</div>
        <div>
          {trainer?.availableSlots.map((slots) => (
            <span className="px-2">
              {slots.day} : {slots.time}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-2 p-4 justify-center">
        <div>
          <a href={trainer.socialIcons.facebook}>
            <FaFacebookSquare size={30} />
          </a>
        </div>
        <div>
          <a href={trainer.socialIcons.instagram}>
            <FaSquareInstagram size={30} />
          </a>
        </div>
        <div>
          <a href={trainer.socialIcons.twitter}>
            <IoLogoTwitter size={30} />
          </a>
        </div>
      </div>

      <Link
        to={`/allTrainer/${trainer._id}`}
        class="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none mb-4"
      >
        <span>Know More</span>
      </Link>
    </div>
  );
};
export default TrainerCard;
