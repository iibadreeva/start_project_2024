import React from 'react';

const Svg = () => {
  return (
    <>
      <details>
        <summary>Fill</summary>
        <div>fill-none fill: none;</div>
        <div>fill-transparent fill: transparent;</div>
        <div>fill-black fill: #000;</div>
        <div>fill-gray-700 fill: #374151;</div>

        <div className="relative rounded-xl overflow-auto p-8">
          <div className="flex items-center justify-center">
            <svg
              className="fill-blue-500 h-12"
              viewBox="0 0 46 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.0002 0C12.5068 0 4.00017 8.50659 4.00017 19V32.5335C4.00017 32.8383 3.9145 33.1371 3.75292 33.3956L0.912672 37.94C0.0801118 39.2721 1.0378 41 2.60867 41H43.3917C44.9625 41 45.9202 39.2721 45.0877 37.94L42.2474 33.3956C42.0858 33.1371 42.0002 32.8383 42.0002 32.5335V19C42.0002 8.50659 33.4936 0 23.0002 0ZM23.0002 48C20.2388 48 18.0002 45.7614 18.0002 43H28.0002C28.0002 45.7614 25.7616 48 23.0002 48Z"
              ></path>
            </svg>
          </div>
        </div>
      </details>

      <details>
        <summary>Stroke</summary>
        <div>stroke-none stroke: none;</div>
        <div>stroke-black stroke: #000;</div>
        <div>stroke-zinc-900 stroke: #18181b;</div>
        <div>stroke-yellow-600 stroke: #ca8a04;</div>

        <div className="relative rounded-xl overflow-auto p-8">
          <div className="flex items-center justify-center">
            <svg
              className="stroke-cyan-500 h-10"
              viewBox="0 0 48 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13C1 10.2386 3.23858 8 6 8H13.4914C14.3844 8 15.1691 7.40805 15.4144 6.54944L16.5856 2.45056C16.8309 1.59196 17.6156 1 18.5086 1H29.4914C30.3844 1 31.1691 1.59195 31.4144 2.45056L32.5856 6.54944C32.8309 7.40804 33.6156 8 34.5086 8H42C44.7614 8 47 10.2386 47 13V34C47 36.7614 44.7614 39 42 39H6C3.23858 39 1 36.7614 1 34V13Z"
                strokeWidth="2"
              ></path>
              <circle cx="24" cy="23" r="9" strokeWidth="2"></circle>
            </svg>
          </div>
        </div>
      </details>

      <details>
        <summary>Stroke Width</summary>
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
                stroke-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                strokeWidth: 0;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                stroke-1
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                strokeWidth: 1;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                stroke-2
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                strokeWidth: 2;
              </td>
            </tr>
          </tbody>
        </table>

        <div className="relative rounded-xl overflow-auto p-8">
          <div className="flex items-center justify-center space-x-8">
            <svg
              className="stroke-indigo-500 stroke-1"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="23" stroke-linejoin="round"></circle>
              <path
                d="M23 1C23 1 15 10.4901 15 24C15 37.5099 23 47 23 47"
                strokeLinejoin="round"
              ></path>
              <path
                d="M25 1C25 1 33 10.4901 33 24C33 37.5099 25 47 25 47"
                strokeLinejoin="round"
              ></path>
              <path d="M1 24H47"></path>
            </svg>
            <svg
              className="stroke-indigo-500 stroke-2"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="23" strokeLinejoin="round"></circle>
              <path
                d="M23 1C23 1 15 10.4901 15 24C15 37.5099 23 47 23 47"
                strokeLinejoin="round"
              ></path>
              <path
                d="M25 1C25 1 33 10.4901 33 24C33 37.5099 25 47 25 47"
                strokeLinejoin="round"
              ></path>
              <path d="M1 24H47"></path>
            </svg>
          </div>
        </div>
      </details>
    </>
  );
};

export { Svg };
