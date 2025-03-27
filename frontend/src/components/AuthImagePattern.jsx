const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-base-200 to-primary/10 p-12">
      <div className="max-w-md text-center">
        <div className="relative mb-8">
          <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-primary/20 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/30 animate-pulse delay-100"></div>
          <div className="relative z-10 mx-auto w-48 h-48 flex items-center justify-center rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;