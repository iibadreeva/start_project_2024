import React from 'react';

import Img from './photo.jpg';

const Accessibility = () => {
  return (
    <>
      <details>
        <summary>Screen Readers</summary>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                <div className="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">
                  Class
                </div>
              </th>
              <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                <div className="py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20">
                  Properties
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="align-baseline">
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400"
              >
                sr-only
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                position: absolute; width: 1px; height: 1px; padding: 0; margin:
                -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space:
                nowrap; border-width: 0;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                not-sr-only
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                position: static; width: auto; height: auto; padding: 0; margin:
                0; overflow: visible; clip: auto; white-space: normal;
              </td>
            </tr>
          </tbody>
        </table>

        <div className="relative">
          <a href="#">
            <span className="sr-only">Settings1</span>
          </a>
        </div>
        <div>
          <a href="#">
            <span className="sr-only sm:not-sr-only">Settings2</span>
          </a>
        </div>
      </details>

      <details>
        <summary>Forced Color Adjust</summary>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                <div className="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">
                  Class
                </div>
              </th>
              <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                <div className="py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20">
                  Properties
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="align-baseline">
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400"
              >
                forced-color-adjust-auto
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                forced-color-adjust: auto;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                forced-color-adjust-none
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                forced-color-adjust: none;
              </td>
            </tr>
          </tbody>
        </table>

        <div className="relative rounded-xl overflow-auto p-8">
          <div className="mx-auto max-w-sm overflow-clip rounded-lg bg-white shadow">
            <div className="aspect-h-3 aspect-w-3 overflow-hidden">
              <img
                src={Img}
                alt="Two each of gray, white, and black shirts laying flat."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4">
              <div>
                <h3 className="font-medium text-gray-900">Basic Tee</h3>
                <h3 className="text-sm font-medium text-gray-900">$35</h3>
              </div>
              <fieldset>
                <legend className="sr-only">Choose a color</legend>
                <div className="forced-color-adjust-none grid grid-flow-col items-center gap-3">
                  <label className="has-[:checked]:ring-gray-400 has-[:checked]:ring-1 has-[:checked]:ring-offset-1 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-0 focus:outline-none">
                    <input
                      type="radio"
                      name="color-choice"
                      value="White"
                      className="sr-only"
                      aria-labelledby="color-choice-0-label"
                    />
                    <span id="color-choice-0-label" className="sr-only">
                      White
                    </span>
                    <span
                      aria-hidden="true"
                      className="size-6 rounded-full border border-black border-opacity-10 bg-white"
                    ></span>
                  </label>
                  <label className="has-[:checked]:ring-gray-400 has-[:checked]:ring-1 has-[:checked]:ring-offset-1 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-0 focus:outline-none">
                    <input
                      type="radio"
                      name="color-choice"
                      value="Gray"
                      className="sr-only"
                    />
                    <span id="color-choice-1-label" className="sr-only">
                      Gray
                    </span>
                    <span
                      aria-hidden="true"
                      className="size-6 rounded-full border border-black border-opacity-10 bg-gray-200"
                    ></span>
                  </label>
                  <label className="has-[:checked]:ring-gray-900 has-[:checked]:ring-1 has-[:checked]:ring-offset-1 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-0 focus:outline-none">
                    <input
                      type="radio"
                      name="color-choice"
                      value="Black"
                      className="sr-only"
                      aria-labelledby="color-choice-2-label"
                    />
                    <span id="color-choice-2-label" className="sr-only">
                      Black
                    </span>
                    <span
                      aria-hidden="true"
                      className="size-6 rounded-full border border-black border-opacity-10 bg-gray-900"
                    ></span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Columns</summary>
        <table className="w-full text-left border-collapse"></table>
      </details>
    </>
  );
};

export { Accessibility };
