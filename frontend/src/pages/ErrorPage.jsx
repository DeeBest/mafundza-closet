import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-2 ">
      <FaExclamationTriangle className="text-3xl text-red-600 " />
      <p className="text-xl">
        Page Not Found! Go Back{' '}
        <Link className="text-amber-600 italic font-bold " to="/">
          Home
        </Link>
        .
      </p>
    </section>
  );
};
export default ErrorPage;
