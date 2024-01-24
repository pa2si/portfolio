import { ImSpinner } from 'react-icons/im';

export const Loader = () => {
  return (
    <div className="flex justify-center animate-spin">
      <ImSpinner />
    </div>
  );
};
