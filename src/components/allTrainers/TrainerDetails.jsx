import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const TrainerDetails = () => {
  const { id } = useParams();
  console.log(id);
  //   const trainerDetails = useLoaderData();
  //   console.log(trainerDetails.name);
  const axiosPublic = useAxiosPublic();
  const { data: trainerDetails, refetch } = useQuery({
    queryKey: ['trainerDetails'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/trainers/${id}`);
      return res.data;
    },
  });
  console.log(trainerDetails);
  return (
    <div>
      <div>
        {trainerDetails?.map((trainer, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row"
          >
            <figure className="flex-1">
              <img
                src={trainer?.profileImage}
                alt={trainer?.name}
                className="object-cover min-h-full aspect-auto"
              />
            </figure>

            <div className="flex-1 p-6 sm:mx-6 sm:px-0">
              <header className="flex gap-4 mb-4">
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
                >
                  <img
                    src={trainer?.profileImage}
                    alt={trainer?.name}
                    title="user name"
                    width="48"
                    height="48"
                    className="max-w-full rounded-full"
                  />
                </a>
                <div>
                  <h3 className="text-xl font-medium text-slate-700">
                    {trainer?.name}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {trainer?.specialties?.map((specialties) => (
                      <span>{specialties} </span>
                    ))}
                  </p>
                </div>
              </header>
              <p>{trainer?.bio}</p>
              <div className="mt-6">
                years Of Experience: {trainer?.yearsOfExperience}
              </div>
              <div className="flex gap-8 p-4 justify-center mt-6">
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
              <div>
                available Slots:
                {trainer?.availableSlots?.map((availableSlots, idx) => (
                  <div
                    key={idx}
                    className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none text-center m-2"
                  >
                    <Link to="/trainerBooking">
                      {availableSlots.day}:{availableSlots.time}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-14 ">
        <Link
          to="/becomeATrainer"
          className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
        >
          Become a Trainer
        </Link>
      </div>
    </div>
  );
};
export default TrainerDetails;
