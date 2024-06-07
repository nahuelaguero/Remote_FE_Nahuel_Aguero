
interface IconProps {
  name?: string;
}

export const High: React.FC<IconProps> = ({ name }) => {
  return (
    <div className="w-6 mx-1 inline-block">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-5 ml-1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
      />
    </svg>
      <span className="absolute -top-7 left-31 hidden group-hover:block bg-white text-inherit p-1 rounded shadow-lg">
        {name}
      </span>
    </div>
  );
};
