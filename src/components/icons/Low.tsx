interface IconProps {
  name?: string;
}

export const Low: React.FC<IconProps> = ({ name }) => {
  return (
    <div className="w-6 mx-1 inline-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 ml-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
        />
      </svg>
      <span className="absolute -top-7 left-31 hidden group-hover:block bg-white text-inherit p-1 rounded shadow-lg">
        {name}
      </span>
    </div>
  );
};
