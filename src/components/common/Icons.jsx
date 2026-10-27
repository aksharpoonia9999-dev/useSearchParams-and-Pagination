const Icons = ({ icon }) => {
  const icons = {
    down: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#ffffff"
      >
        <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
      </svg>
    ),
    left: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="#ffffff"
      >
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>
    ),
    right: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="#ffffff"
      >
        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
      </svg>
    ),
    arrowRight: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#ffffff"
      >
        <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
      </svg>
    ),
    arrowLeft: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#ffffff"
        className="group-hover:fill-black"
      >
        <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
      </svg>
    ),
  };

  return icons[icon];
};

export default Icons;
