import { occupations, persons } from './bd';
import { Occupation, Person } from './components';

function App() {
  return (
    <>
      /** Child selectors **/
      <div>
        <h2>Categories</h2>
        <ul className="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10">
          <li>Sales</li>
          <li>Marketing</li>
          <li>SEO</li>
          <li>Analítica</li>
          <li>Diseño</li>
          <li>Estrategia</li>
          <li>Seguridad</li>
        </ul>
      </div>
      /** Attribute selectors **/
      <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
        <div dir="ltr">
          <p className="mb-4 text-sm font-medium">
            <span>De izquierda a derecha</span>
          </p>
          <div className="group flex items-center">
            <img
              className="h-12 w-12 shrink-0 rounded-full"
              src="/jurica-koletic.jpg"
            />
            <div className="ml-3 rtl:mr-3 rtl:ml-0">
              <p className='class="text-sm dark:group-hover:text-white" font-medium text-gray-700 group-hover:text-gray-900 dark:text-gray-300'>
                Tom Cook
              </p>
              <p className='class="text-sm dark:group-hover:text-gray-300" font-medium text-gray-500 group-hover:text-gray-700'>
                Director de operaciones
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-active
        className="border border-gray-300 data-active:border-purple-500"
      >
        Data
      </div>
      <div
        aria-checked="true"
        className="bg-gray-600 aria-checked:bg-sky-700"
      ></div>
      /** Media and feature queries **/
      <div className="hidden noscript:block">
        <p>
          This experience requires JavaScript to function. Please enable
          JavaScript in your browser settings
        </p>
      </div>
      <fieldset aria-label="Choose a memory option">
        <div className="flex items-center justify-between">
          <div>RAM</div>
          <a href="#">See performance specs</a>
        </div>
        <div className="mt-4 grid grid-cols-6 gap-2 pointer-coarse:mt-6 pointer-coarse:grid-cols-3 pointer-coarse:gap-4">
          <label className="p-2 pointer-coarse:p-4">
            <input
              type="radio"
              name="memory-option"
              value="4 GB"
              className="sr-only"
            />
            <span>4 GB</span>
          </label>
        </div>
      </fieldset>
      <label className="block">
        <span className="block text-sm font-medium text-gray-700">
          Social Security Number
        </span>
        <input className="placeholer-gray-400 border-gray-200 contrast-more:border-gray-400 contrast-more:placeholder-gray-500" />
        <p className="text-gray-600 opacity-10 contrast-more:opacity-100">
          We need this to steal your identity.
        </p>
      </label>
      <div className="@container">
        <div className="flex flex-col @md:flex-row"></div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6"></div>
      /** Pseudoelements **/
      <div className="text-gray-700">
        <p className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-line:tracking-widest first-line:uppercase">
          {' '}
          Well, let me tell you something, funny boy. Y'know that little stamp,
          the one that says "New York Public Library"?
        </p>
        <p className="mt-6">
          Well that may not mean anything to you, but that means a lot to me.
          One whole hell of a lot.
        </p>
      </div>
      <div className="selection:bg-fuchsia-300 selection:text-fuchsia-900">
        <p>
          So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me. I don't know if it was divine intervention
          or the kinship of all living things but I tell you Jerry at that
          moment, I <em>was</em> a marine biologist.
        </p>
      </div>
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
