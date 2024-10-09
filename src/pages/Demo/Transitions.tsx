import React from 'react';

const Transitions = () => {
  return (
    <>
      <details>
        <summary>Transition Property</summary>
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
                transition-none
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                transition-property: none;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-all
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-property: all; transition-timing-function:
                cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-property: color, background-color, border-color,
                text-decoration-color, fill, stroke, opacity, box-shadow,
                transform, filter, backdrop-filter; transition-timing-function:
                cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-colors
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-property: color, background-color, border-color,
                text-decoration-color, fill, stroke; transition-timing-function:
                cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-opacity
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-property: opacity; transition-timing-function:
                cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-shadow
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-property: box-shadow; transition-timing-function:
                cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-transform
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-property: transform; transition-timing-function
                cubic-bezier(0.4, 0, 0.2, 1) transition-duration 150ms
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-around text-white text-sm font-bold leading-6">
          <button className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300">
            Save Changes
          </button>
        </div>
      </details>

      <details>
        <summary>Transition Duration</summary>
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
                duration-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                transition-duration: 0s;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                duration-75
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-duration: 75ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                duration-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-duration: 100ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                duration-150
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-duration: 150ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                duration-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-duration: 200ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                duration-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-duration: 300ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                duration-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-duration: 500ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                duration-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-duration: 700ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                duration-1000
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-duration: 1000ms;
              </td>
            </tr>
          </tbody>
        </table>

        <div className="relative rounded-xl overflow-auto p-8">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-around text-white text-sm font-bold leading-6">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                duration-150
              </p>
              <button className="px-4 py-2 font-semibold text-sm bg-violet-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-150">
                Button A
              </button>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                duration-300
              </p>
              <button className="px-4 py-2 font-semibold text-sm bg-violet-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300">
                Button B
              </button>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                duration-700
              </p>
              <button className="px-4 py-2 font-semibold text-sm bg-violet-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-700">
                Button C
              </button>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Transition Timing Function</summary>
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
                ease-linear
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                transition-timing-function: linear;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                ease-in
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                ease-out
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                ease-in-out
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              </td>
            </tr>
          </tbody>
        </table>
        <div className="relative rounded-xl overflow-auto p-8">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-around text-white text-sm font-bold leading-6">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                ease-in
              </p>
              <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm hover:scale-125 ease-in duration-300">
                Button A
              </button>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                ease-out
              </p>
              <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm hover:scale-125 ease-out duration-300">
                Button B
              </button>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                ease-in-out
              </p>
              <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300">
                Button C
              </button>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Transition Delay</summary>
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
                delay-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                transition-delay: 0s;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                delay-75
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-delay: 75ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                delay-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-delay: 100ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                delay-150
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-delay: 150ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                delay-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-delay: 200ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                delay-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-delay: 300ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                delay-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-delay: 500ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                delay-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-delay: 700ms;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                delay-1000
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                transition-delay: 1000ms;
              </td>
            </tr>
          </tbody>
        </table>

        <div className="relative rounded-xl overflow-auto p-8">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-around text-white text-sm font-bold leading-6">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                delay-150
              </p>
              <button className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300 delay-150">
                Button A
              </button>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                delay-300
              </p>
              <button className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300 delay-300">
                Button B
              </button>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                delay-700
              </p>
              <button className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300 delay-700">
                Button C
              </button>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Animation</summary>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="sticky top-0 bg-white text-sm leading-6 font-semibold text-slate-700 p-0 dark:bg-slate-900 dark:text-slate-300">
                <div className="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">
                  Class
                </div>
              </th>
              <th className="sticky top-0 bg-white text-sm leading-6 font-semibold text-slate-700 p-0 dark:bg-slate-900 dark:text-slate-300">
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
                className="py-2 pr-2 font-mono font-bold text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400"
              >
                animate-none
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                animation: none;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-bold text-xs leading-6 text-sky-500 whitespace-nowrap border-t border-slate-100 dark:border-slate-400/10 dark:text-sky-400"
              >
                animate-spin
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre border-t border-slate-100 dark:border-slate-400/10 dark:text-indigo-300"
              >
                animation: spin 1s linear infinite;
                {`@keyframes spin {
                            from {
                            transform: rotate(0deg);
                        }
                            to {
                            transform: rotate(360deg);
                        }
                        }`}
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-bold text-xs leading-6 text-sky-500 whitespace-nowrap border-t border-slate-100 dark:border-slate-400/10 dark:text-sky-400"
              >
                animate-ping
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre border-t border-slate-100 dark:border-slate-400/10 dark:text-indigo-300"
              >
                animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
                {`@keyframes ping {
                            75 %, 100% {
                            transform: scale(2);
                            opacity: 0;
                        }
                        }`}
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-bold text-xs leading-6 text-sky-500 whitespace-nowrap border-t border-slate-100 dark:border-slate-400/10 dark:text-sky-400"
              >
                animate-pulse
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre border-t border-slate-100 dark:border-slate-400/10 dark:text-indigo-300"
              >
                animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                {`@keyframes pulse {
                            0 %, 100% {
                            opacity: 1;
                        }
                            50% {
                            opacity: .5;
                        }
                        }`}
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-bold text-xs leading-6 text-sky-500 whitespace-nowrap border-t border-slate-100 dark:border-slate-400/10 dark:text-sky-400"
              >
                animate-bounce
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre border-t border-slate-100 dark:border-slate-400/10 dark:text-indigo-300"
              >
                animation: bounce 1s infinite;
                {' @keyframes bounce {\n' +
                  '                            0 %, 100% {\n' +
                  '                            transform: translateY(-25%);\n' +
                  '                            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n' +
                  '                        }\n' +
                  '                            50% {\n' +
                  '                            transform: translateY(0);\n' +
                  '                            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n' +
                  '                        }\n' +
                  '                        }'}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex items-center justify-center">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
            disabled
          >
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </button>
        </div>

        <div className="flex items-center justify-center  p-8">
          <span className="relative inline-flex">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-not-allowed ring-1 ring-slate-900/10 dark:ring-slate-200/20"
              disabled
            >
              Transactions
            </button>
            <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </span>
        </div>

        <div className="relative rounded-xl overflow-auto p-8">
          <div className="flex items-center justify-center">
            <div className="bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-900/5 rounded-lg shadow-lg max-w-xs w-full h-28">
              <div className="flex space-x-4 animate-pulse">
                <div className="rounded-full bg-slate-200 dark:bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-auto p-8">
          <div className="flex justify-center">
            <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-violet-500"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </details>
    </>
  );
};

export { Transitions };
