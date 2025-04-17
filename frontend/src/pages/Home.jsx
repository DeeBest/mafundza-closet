import Banner from '../components/Banner';
import Exclusive from '../components/Exclusive';
import Hero from '../components/Hero';
import NewCollections from '../components/NewCollections';
import Popular from '../components/Popular';

const Home = () => {
  return (
    <section className="flex flex-col w-full">
      <Hero />
      <Popular />
      <Banner />
      <NewCollections />
      <Exclusive />
    </section>
  );
};
export default Home;
