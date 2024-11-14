const Button = ({ isLoading, type, children }: any) => {
  return (
    <>
      <button
        type={type}
        className="w-full h-[60px] flex justify-center items-center rounded-md bg-success px-4 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    </>
  );
};

export default Button;
