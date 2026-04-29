function App() {
  return (
    <>
      /** Using custom breakpoints **/
      <div className="max-[600px]:bg-sky-300 min-[320px]:text-center">
        Using arbitrary values
      </div>
      <div className="xs:grid-cols-2 3xl:grid-cols-6 grid">
        <button>A</button>
        <button>B</button>
        <button>C</button>
        <button>D</button>
        <button>E</button>
        <button>F</button>
        <button>G</button>
        <button>H</button>
      </div>
      /** Working mobile first**/
      <div className="text-center sm:text-left">Text</div>
      <div className="sm:text-center">Text</div>
      /** Overview **/
      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/house.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Company retreats
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
      <img className="w-16 md:w-32 lg:w-48" src="/brooke-cagle.jpg" />
    </>
  );
}

export default App;
