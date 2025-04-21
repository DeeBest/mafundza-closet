import { FaArrowRight } from 'react-icons/fa';
import heroImage from '../assets/heroImg.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="w-full h-[400px] bg-gradient-to-b from-pink-100 to-white flex items-center gap-1 p-2 flex-col sm:flex-row sm:gap-5 ">
      <div className="flex flex-col flex-1 gap-3 ">
        <p className="text-sm font-bold text-gray-400 sm:text-lg ">
          NEW ARRIVALS ONLY
        </p>
        <h1 className="text-xl font-extrabold sm:text-4xl">
          new collections for everyone
        </h1>
        <a href="#new-collections">
          <button className="flex items-center self-center justify-center gap-3 px-3 py-1 text-sm text-white rounded-2xl bg-amber-600 whitespace-nowrap sm:text-lg ">
            Latest Collections <FaArrowRight />
          </button>
        </a>
      </div>
      <div className="flex-1 w-full h-full overflow-hidden rounded-xl">
        <img
          src={heroImage}
          alt="hero-image"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};
export default Hero;
