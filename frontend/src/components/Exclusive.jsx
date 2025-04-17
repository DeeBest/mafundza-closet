const Exclusive = () => {
  return (
    <section className="flex flex-col items-center w-full gap-5 p-2 mt-16 bg-gradient-to-b from-pink-100 to-white ">
      <h1 className="text-4xl font-extrabold text-center">
        Get Exclusive Offers on Your Phone
      </h1>
      <p className="text-gray-400 ">
        Follow us on Whatsapp and Facebook and stay updated
      </p>
      <a
        href="https://wa.me/+27799887080"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center self-center justify-center gap-3 px-3 py-1 text-white rounded-2xl bg-amber-600 whitespace-nowrap ">
          Connect
        </button>
      </a>
    </section>
  );
};
export default Exclusive;
