import { contributors } from './bd';
import { Avatar } from './components';

function App() {
  return (
    <>
      {/* <div className="bg-red-500! bg-teal-500">Text</div> */}

      {/* <div className="flex grid"></div> */}

      <div>
        <div className="flex items-center space-x-2 text-base">
          <h4 className="font-semibold text-slate-900">Contributors</h4>
          <span className="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
            204
          </span>
        </div>
        <div className="mt-3 flex -space-x-2 overflow-hidden">
          {contributors.map(({ id, src }) => (
            <Avatar key={id} src={src} />
          ))}
        </div>
        <div className="mt-3 text-sm font-medium">
          <a href="#" className="text-blue-500">
            + 198 others
          </a>
        </div>
      </div>

      <a className="group rounded-lg p-8">
        <span className="group-hover:underline">Read more...</span>
      </a>

      <div className="grid grid-cols-[24rem_2.5rem_minmax(0,1fr)]">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
      </div>

      <button className="bg-[#316ff6]">Sign in with Facebook</button>

      <div className="blur-sm grayscale">
        <span>-</span>
      </div>

      <div className="rounded-lg bg-white px-6 py-8 shadow-xl ring ring-gray-900/5 dark:bg-gray-800">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            <img className="size-6" src="/favicon.svg" />
          </span>
        </div>
        <h3 className="mt-5 text-base font-medium tracking-tight text-gray-900 dark:text-white">
          Writes upside-down
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {' '}
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-center font-mono font-medium text-white sm:grid-cols-3">
        <div className="rounded-lg bg-sky-500 p-4">01</div>
        <div className="rounded-lg bg-sky-500 p-4">02</div>
        <div className="rounded-lg bg-sky-500 p-4">03</div>
        <div className="rounded-lg bg-sky-500 p-4">04</div>
        <div className="rounded-lg bg-sky-500 p-4">05</div>
        <div className="rounded-lg bg-sky-500 p-4">06</div>
      </div>

      <button className="mx-auto rounded-2xl bg-sky-500 p-2 disabled:hover:bg-sky-500">
        Save changes
      </button>

      <div className="mx-auto flex flex-col gap-2 rounded-xl bg-white p-8 ring ring-black/5 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
        <img
          className="mx-auto block size-24 rounded-full sm:mx-0 sm:shrink-0"
          src="/stefan-stefancik.jpg"
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Erin Lindford</p>
            <p className="font-medium text-gray-500">Product engineer</p>
          </div>
          <button className="rounded-full border border-purple-200 px-4 py-1 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
            Message
          </button>
        </div>
      </div>

      <div className="dar:shadow-none mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:-outline-offset-1 dark:outline-white/10">
        <img
          className="size-12 shrink-0"
          src="/favicon.svg"
          alt="ChitChat logo"
        />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            ChitChat
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            You have a new message!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
