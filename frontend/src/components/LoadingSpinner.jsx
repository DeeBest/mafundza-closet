import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import { MdShoppingBag } from 'react-icons/md';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center flex-1 w-full h-full animate-glow ">
      <Link to="/" className="flex items-center animate-bounce ">
        <h1 className="self-start -mr-32 font-serif text-4xl font-bold text-pink-700">
          Mafundza
        </h1>
        <div className="flex items-end">
          <FaShoppingBag className="text-8xl opacity-55 text-amber-600" />
          <MdShoppingBag className="-ml-4 text-4xl text-pink-700 opacity-55" />
        </div>
        <h1 className="self-end -ml-1 font-serif text-6xl font-extrabold text-amber-600">
          Closet
        </h1>
      </Link>
    </div>
  );
};
export default LoadingSpinner;
