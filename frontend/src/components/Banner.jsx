import bannerImage from '../assets/bannerImg.jpg';

const Banner = () => {
  return (
    <section className="w-full h-[400px] bg-gradient-to-b from-pink-100 to-white flex items-center gap-5 p-2 mt-16">
      <div className="flex flex-col flex-1 gap-3 ">
        <h1 className="text-4xl font-extrabold">Exclusive Offers For You</h1>
        <p className="font-bold text-gray-400 ">
          ONLY THE BEST SELLERS PRODUCTS
        </p>
        <button className="flex items-center self-center justify-center gap-3 px-3 py-1 text-white rounded-2xl bg-amber-600 whitespace-nowrap">
          Check Now
        </button>
      </div>
      <div className="flex-1 h-full overflow-hidden rounded-xl">
        <img
          src={bannerImage}
          alt="banner-image"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};
export default Banner;
