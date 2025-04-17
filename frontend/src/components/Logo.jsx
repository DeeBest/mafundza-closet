import { FaShoppingBag } from 'react-icons/fa';
import { MdShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center ">
      <h1 className="self-start -mr-20 font-serif text-xl font-bold text-pink-700">
        Mafundza's
      </h1>
      <div className="flex items-end">
        <FaShoppingBag className="text-5xl opacity-55 text-amber-600" />
        <MdShoppingBag className="-ml-2 text-2xl text-pink-700 opacity-55" />
      </div>
      <h1 className="self-end -ml-1 font-serif text-2xl font-extrabold text-amber-600">
        Closet
      </h1>
    </Link>
  );
};
export default Logo;
