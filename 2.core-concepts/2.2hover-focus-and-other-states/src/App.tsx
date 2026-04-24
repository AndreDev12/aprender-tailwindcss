import { occupations, persons } from './bd';
import { Occupation, Person } from './components';

function App() {
  return (
    <>
      <ul
        role="list"
        className="mt-3 list-disc space-y-3 pl-5 text-gray-500 marker:text-sky-400 dark:text-gray-400"
      >
        <li>5 cups chopped Porcini mushrooms</li>
        <li>1/2 cup of olive oil</li>
        <li>3lb of celery</li>
      </ul>

      <input
        className="block w-full rounded-md border border-gray-300 py-2 pr-3 pl-9 text-gray-700 shadow-sm placeholder:text-gray-400 placeholder:italic focus:border-sky-500 focus:outline focus:outline-sky-500 sm:text-sm dark:border-gray-600 dark:text-white"
        placeholder="Search for anything ..."
        type="text"
        name="search"
      />

      <blockquote className="text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
        When you look
        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
          <span className="relative text-white dark:text-gray-950">
            annoyed
          </span>
        </span>
        all the time, people think that you're busy.
      </blockquote>

      <label>
        <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
          Email
        </span>
        <input type="email" name="email" placeholder="you@example.com" />
      </label>

      <div tabIndex={0}>
        <div className="opacity-50 in-focus:opacity-100">Save</div>
      </div>

      <div className="group is-published">
        <div className="hidden group-[.is-published]:block">Published</div>
      </div>

      <a
        href="#"
        className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-900/5 hover:bg-sky-500 hover:ring-sky-500 dark:bg-white/5 dark:ring-white/10"
      >
        <div>
          <img
            className="stroke-sky-500 group-hover:stroke-white"
            src="/icons.svg"
          />
          <h3 className="text-gray-900 group-hover:text-white">New project</h3>
        </div>
        <p className="text-gray-500 group-hover:text-white">
          Create a new project from a variety of starting templates
        </p>
      </a>

      <table>
        <tbody>
          <tr className="bg-gray-50 dark:bg-gray-900/50">
            <td>Nombre</td>
            <td>Título</td>
            <td>Correo electrónico</td>
          </tr>
          {occupations.map(({ id, ...props }) => (
            <Occupation key={id} {...props} />
          ))}
        </tbody>
      </table>

      <ul role="list">
        {persons.map(({ id, ...props }) => (
          <Person key={id} {...props} />
        ))}
      </ul>

      <button className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
        Save changes
      </button>

      <button className="dark:md:hover:bg-fuchsia-600">Save changes</button>

      <button className="bg-sky-500 hover:bg-sky-700">Save changes</button>
    </>
  );
}

export default App;
