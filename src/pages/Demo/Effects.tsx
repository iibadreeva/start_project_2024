import React from 'react';

import Img from './photo.jpg';

const Effects = () => {
  return (
    <>
      <details>
        <summary>Blur</summary>
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
                blur-none
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                filter: ;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                blur-sm
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: blur(4px);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                blur
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: blur(8px);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                blur-md
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: blur(12px);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                blur-lg
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: blur(16px);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                blur-xl
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: blur(24px);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                blur-2xl
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: blur(40px);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                blur-3xl
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: blur(64px);
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex items-center justify-around gap-12 sm:gap-4 font-mono font-bold shrink-0 p-8">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
              blur-none
            </p>
            <div className="relative blur-none">
              <img
                className="w-24 h-24 object-cover rounded-lg shadow-xl"
                src={Img}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
              blur-sm
            </p>
            <div className="relative blur-sm">
              <img
                className="w-24 h-24 object-cover rounded-lg shadow-xl"
                src={Img}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
              blur-lg
            </p>
            <div className="relative blur-lg">
              <img
                className="w-24 h-24 object-cover rounded-lg shadow-xl"
                src={Img}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
              blur-2xl
            </p>
            <div className="relative blur-2xl">
              <img
                className="w-24 h-24 object-cover rounded-lg shadow-xl"
                src={Img}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Brightness</summary>
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
                brightness-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                filter: brightness(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                brightness-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: brightness(.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                brightness-75
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: brightness(.75);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                brightness-90
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: brightness(.9);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                brightness-95
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: brightness(.95);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                brightness-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: brightness(1);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                brightness-105
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: brightness(1.05);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                brightness-110
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: brightness(1.1);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                brightness-125
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: brightness(1.25);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                brightness-150
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: brightness(1.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                brightness-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: brightness(2);
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                brightness-50
              </p>
              <div className="relative brightness-50">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                brightness-100
              </p>
              <div className="relative brightness-100">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                brightness-125
              </p>
              <div className="relative brightness-125">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                brightness-200
              </p>
              <div className="relative brightness-200">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Contrast</summary>
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
                contrast-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                filter: contrast(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                contrast-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: contrast(.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                contrast-75
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: contrast(.75);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                contrast-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: contrast(1);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                contrast-125
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: contrast(1.25);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                contrast-150
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: contrast(1.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                contrast-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: contrast(2);
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                contrast-50
              </p>
              <div className="relative contrast-50">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                contrast-100
              </p>
              <div className="relative contrast-100">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                contrast-125
              </p>
              <div className="relative contrast-125">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                contrast-200
              </p>
              <div className="relative contrast-200">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </details>
      <details>
        <summary>Drop Shadow</summary>
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
                drop-shadow-sm
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                drop-shadow
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0
                1px 1px rgb(0 0 0 / 0.06));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                drop-shadow-md
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0
                2px 2px rgb(0 0 0 / 0.06));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                drop-shadow-lg
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0
                4px 3px rgb(0 0 0 / 0.1));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                drop-shadow-xl
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0
                8px 5px rgb(0 0 0 / 0.08));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                drop-shadow-2xl
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                drop-shadow-none
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: drop-shadow(0 0 #0000);
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                drop-shadow-md
              </p>
              <svg
                className="drop-shadow-md h-28 w-28"
                viewBox="0 0 84 84"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                drop-shadow-lg
              </p>
              <svg
                className="drop-shadow-lg h-28 w-28"
                viewBox="0 0 84 84"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                drop-shadow-xl
              </p>
              <svg
                className="drop-shadow-xl h-28 w-28"
                viewBox="0 0 84 84"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                drop-shadow-2xl
              </p>
              <svg
                className="drop-shadow-2xl h-28 w-28"
                viewBox="0 0 84 84"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Grayscale</summary>
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
                grayscale-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                filter: grayscale(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                grayscale
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: grayscale(100%);
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                grayscale-0
              </p>
              <div className="relative grayscale-0">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                grayscale
              </p>
              <div className="relative grayscale">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Hue Rotate</summary>
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
                hue-rotate-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                filter: hue-rotate(0deg);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                hue-rotate-15
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: hue-rotate(15deg);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                hue-rotate-30
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: hue-rotate(30deg);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                hue-rotate-60
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: hue-rotate(60deg);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                hue-rotate-90
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: hue-rotate(90deg);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                hue-rotate-180
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: hue-rotate(180deg);
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
              hue-rotate-15
            </p>
            <div className="relative hue-rotate-15">
              <img
                className="w-24 h-24 object-cover rounded-lg shadow-xl"
                src={Img}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
              hue-rotate-90
            </p>
            <div className="relative hue-rotate-90">
              <img
                className="w-24 h-24 object-cover rounded-lg shadow-xl"
                src={Img}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
              hue-rotate-180
            </p>
            <div className="relative hue-rotate-180">
              <img
                className="w-24 h-24 object-cover rounded-lg shadow-xl"
                src={Img}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
              -hue-rotate-60
            </p>
            <div className="relative -hue-rotate-60">
              <img
                className="w-24 h-24 object-cover rounded-lg shadow-xl"
                src={Img}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Invert</summary>
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
                invert-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                filter: invert(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                invert
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: invert(100%);
              </td>
            </tr>
          </tbody>
        </table>
      </details>

      <details>
        <summary>Saturate</summary>
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
                saturate-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                filter: saturate(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                saturate-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: saturate(.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                saturate-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: saturate(1);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                saturate-150
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: saturate(1.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                saturate-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: saturate(2);
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                saturate-50
              </p>
              <div className="relative saturate-50">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                saturate-100
              </p>
              <div className="relative saturate-100">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                saturate-150
              </p>
              <div className="relative saturate-150">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                saturate-200
              </p>
              <div className="relative saturate-200">
                <img
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Sepia</summary>
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
                sepia-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                filter: sepia(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                sepia
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                filter: sepia(100%);
              </td>
            </tr>
          </tbody>
        </table>
      </details>

      <details>
        <summary>Backdrop Blur</summary>
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
                backdrop-blur-none
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                backdrop-filter: ;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-blur-sm
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: blur(4px);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-blur
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: blur(8px);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-blur-md
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: blur(12px);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-blur-lg
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: blur(16px);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-blur-xl
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: blur(24px);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-blur-2xl
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: blur(40px);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-blur-3xl
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: blur(64px);
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-blur-sm
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-blur-sm h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-blur-md
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-blur-md h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-blur-xl
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-blur-xl h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Backdrop Brightness</summary>
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
                backdrop-brightness-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                backdrop-filter: brightness(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-brightness-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: brightness(.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-brightness-75
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: brightness(.75);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-brightness-90
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: brightness(.9);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-brightness-95
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: brightness(.95);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-brightness-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: brightness(1);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-brightness-105
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: brightness(1.05);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-brightness-110
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: brightness(1.1);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-brightness-125
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: brightness(1.25);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-brightness-150
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: brightness(1.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-brightness-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: brightness(2);
              </td>
            </tr>
          </tbody>
        </table>

        <div className="relative rounded-xl overflow-auto">
          <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
            <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
              <div className="flex flex-col items-center shrink-0">
                <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                  backdrop-brightness-50
                </p>
                <div className="relative">
                  <div className="absolute inset-6 backdrop-brightness-50 h-20 w-20 bg-white/30"></div>
                  <img
                    className="w-32 h-32 object-cover rounded-lg shadow-xl"
                    src={Img}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                </div>
              </div>
              <div className="flex flex-col items-center shrink-0">
                <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                  backdrop-brightness-125
                </p>
                <div className="relative">
                  <div className="absolute inset-6 backdrop-brightness-125 h-20 w-20 bg-white/30"></div>
                  <img
                    className="w-32 h-32 object-cover rounded-lg shadow-xl"
                    src={Img}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                </div>
              </div>
              <div className="flex flex-col items-center shrink-0">
                <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                  backdrop-brightness-200
                </p>
                <div className="relative">
                  <div className="absolute inset-6 backdrop-brightness-200 h-20 w-20 bg-white/30"></div>
                  <img
                    className="w-32 h-32 object-cover rounded-lg shadow-xl"
                    src={Img}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Backdrop Contrast</summary>
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
                backdrop-contrast-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                backdrop-filter: contrast(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-contrast-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: contrast(.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-contrast-75
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: contrast(.75);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-contrast-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: contrast(1);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-contrast-125
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: contrast(1.25);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-contrast-150
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: contrast(1.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-contrast-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: contrast(2);
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-contrast-50
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-contrast-50 h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-contrast-125
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-contrast-125 h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-contrast-200
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-contrast-200 h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Backdrop Grayscale</summary>
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
                backdrop-grayscale-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                backdrop-filter: grayscale(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-grayscale
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: grayscale(100%);
              </td>
            </tr>
          </tbody>
        </table>
        <div className="relative rounded-xl overflow-auto">
          <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
            <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
              <div className="flex flex-col items-center shrink-0">
                <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                  backdrop-grayscale-0
                </p>
                <div className="relative">
                  <div className="absolute inset-6 backdrop-grayscale-0 h-20 w-20 bg-white/30"></div>
                  <img
                    className="w-32 h-32 object-cover rounded-lg shadow-xl"
                    src={Img}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                </div>
              </div>
              <div className="flex flex-col items-center shrink-0">
                <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                  backdrop-grayscale
                </p>
                <div className="relative">
                  <div className="absolute inset-6 backdrop-grayscale h-20 w-20 bg-white/30"></div>
                  <img
                    className="w-32 h-32 object-cover rounded-lg shadow-xl"
                    src={Img}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Backdrop Hue Rotate</summary>
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
                backdrop-hue-rotate-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                backdrop-filter: hue-rotate(0deg);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-hue-rotate-15
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: hue-rotate(15deg);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-hue-rotate-30
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: hue-rotate(30deg);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-hue-rotate-60
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: hue-rotate(60deg);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-hue-rotate-90
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: hue-rotate(90deg);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-hue-rotate-180
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: hue-rotate(180deg);
              </td>
            </tr>
          </tbody>
        </table>

        <div className="relative rounded-xl overflow-auto">
          <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
            <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
              <div className="flex flex-col items-center shrink-0">
                <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                  backdrop-hue-rotate-90
                </p>
                <div className="relative">
                  <div className="absolute inset-6 backdrop-hue-rotate-90 h-20 w-20 bg-white/30"></div>
                  <img
                    className="w-32 h-32 object-cover rounded-lg shadow-xl"
                    src={Img}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                </div>
              </div>
              <div className="flex flex-col items-center shrink-0">
                <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                  backdrop-hue-rotate-180
                </p>
                <div className="relative">
                  <div className="absolute inset-6 backdrop-hue-rotate-180 h-20 w-20 bg-white/30"></div>
                  <img
                    className="w-32 h-32 object-cover rounded-lg shadow-xl"
                    src={Img}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                </div>
              </div>
              <div className="flex flex-col items-center shrink-0">
                <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                  -backdrop-hue-rotate-60
                </p>
                <div className="relative">
                  <div className="absolute inset-6 -backdrop-hue-rotate-60 h-20 w-20 bg-white/30"></div>
                  <img
                    className="w-32 h-32 object-cover rounded-lg shadow-xl"
                    src={Img}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Backdrop Invert</summary>
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
                backdrop-invert-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                backdrop-filter: invert(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-invert
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: invert(100%);
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-invert-0
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-invert-0 h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-invert
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-invert h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Backdrop Opacity</summary>
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
                backdrop-opacity-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                backdrop-filter: opacity(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-5
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.05);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-10
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.1);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-15
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.15);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-20
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.2);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-25
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.25);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-30
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.3);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-35
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.35);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-40
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.4);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-45
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.45);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-55
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.55);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-60
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.6);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-65
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.65);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-70
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.7);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-75
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.75);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-80
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.8);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-85
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.85);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-90
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.9);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-95
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(0.95);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-opacity-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: opacity(1);
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-opacity-10
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-opacity-10 backdrop-invert h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-opacity-60
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-opacity-60 backdrop-invert h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-opacity-95
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-opacity-95 backdrop-invert h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Backdrop Saturate</summary>
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
                backdrop-saturate-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                backdrop-filter: saturate(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-saturate-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: saturate(.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-saturate-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: saturate(1);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-saturate-150
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: saturate(1.5);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-saturate-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: saturate(2);
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-saturate-50
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-saturate-50 h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-saturate-125
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-saturate-125 h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-saturate-200
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-saturate-200 h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Backdrop Sepia</summary>
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
                backdrop-sepia-0
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                backdrop-filter: sepia(0);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-sepia
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                backdrop-filter: sepia(100%);
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-sepia-0
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-sepia-0 h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
                backdrop-sepia
              </p>
              <div className="relative">
                <div className="absolute inset-6 backdrop-sepia h-20 w-20 bg-white/30"></div>
                <img
                  className="w-32 h-32 object-cover rounded-lg shadow-xl"
                  src={Img}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </details>
    </>
  );
};

export { Effects };
