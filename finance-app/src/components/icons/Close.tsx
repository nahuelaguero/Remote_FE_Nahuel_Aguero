interface IconProps {
  name?: string;
}

export const Close: React.FC<IconProps> = ({ name }) => {
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
          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
      <span className="absolute -top-7 left-31 hidden group-hover:block bg-white text-inherit p-1 rounded shadow-lg">
        {name}
      </span>
    </div>
  );
};
