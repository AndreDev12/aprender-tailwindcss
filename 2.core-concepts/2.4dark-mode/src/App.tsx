function App() {
  return (
    <>
      {/* Overview  */}
      <div className="rounded-lg bg-white px-6 shadow-xl ring ring-gray-900/5 dark:bg-gray-800">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
          </span>
        </div>
        <h3 className="mt-5 text-base font-medium tracking-tight text-gray-900 dark:text-white">
          Writes upside-down
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </>
  );
}

export default App;
