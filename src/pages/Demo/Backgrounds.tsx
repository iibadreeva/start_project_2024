import React from 'react';
import Img from './photo.jpg';

const Backgrounds = () => {
  return (
    <>
      <details>
        <summary>Background Attachment</summary>
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
                bg-fixed
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                background-attachment
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-local
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-attachment
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-scroll
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-attachment
              </td>
            </tr>
          </tbody>
        </table>

        <div
          className="max-w-lg mx-auto h-80 overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover shadow-lg"
          // style="background-image:url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;h=666&amp;q=80'); background-position: center -80px;"
          style={{
            backgroundImage: `url(${Img})`,
            backgroundPosition: 'center -80px'
          }}
        >
          <div className="mt-40">
            <div className="bg-white p-4 sm:p-8">
              <div className="font-inter font-extrabold text-2xl text-black tracking-tight">
                My trip to the summit
              </div>
              <div className="mt-1 font-medium text-sm text-slate-500">
                November 16, 2021 · 4 min read
              </div>
              <p className="mt-4 leading-7 text-slate-500">
                Maybe we can live without libraries, people like you and me.
                Maybe. Sure, we're too old to change the world, but what about
                that kid, sitting down, opening a book, right now, in a branch
                at the local library and finding drawings of pee-pees and
                wee-wees on the Cat in the Hat and the Five Chinese Brothers?
                Doesn't HE deserve better?
              </p>
              <p className="mt-4 leading-7 text-slate-500">
                Look. If you think this is about overdue fines and missing
                books, you'd better think again. This is about that kid's right
                to read a book without getting his mind warped! Or: maybe that
                turns you on, Seinfeld; maybe that's how y'get your kicks. You
                and your good-time buddies.
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-64 overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover bg-local w-3/6"
          // style="background-image:url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;h=666&amp;q=80');"
          style={{
            backgroundImage: `url(${Img})`
          }}
        >
          <div className="p-6 sm:px-16 sm:py-12 bg-black/40">
            <p className="font-serif italic text-base sm:text-2xl text-white text-center leading-6 sm:leading-8">
              "Because the mail never stops. It just keeps coming and coming and
              coming, there's never a let-up. It's relentless. Every day it
              piles up more and more and more. And you gotta get it out but the
              more you get it out the more it keeps coming in. And then the
              barcode reader breaks and it's Publisher's Clearing House day."
            </p>
            <div className="mt-6 font-inter font-bold text-sm sm:text-base text-white text-center">
              — Newman
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary>Background Clip</summary>
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
                bg-clip-border
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                background-clip: border-box;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-clip-padding
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-clip: padding-box;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-clip-content
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-clip: content-box;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-clip-text
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-clip: text;
              </td>
            </tr>
          </tbody>
        </table>

        <div className="text-5xl font-extrabold ...">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello world
          </span>
        </div>
      </details>

      <details>
        <summary>Background Origin</summary>
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
                bg-origin-border
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                background-origin: border-box;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-origin-padding
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-origin: padding-box;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-origin-content
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-origin: content-box;
              </td>
            </tr>
          </tbody>
        </table>
      </details>

      <details>
        <summary>Background Position</summary>
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
                bg-bottom
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                background-position: bottom;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-center
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-position: center;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-left
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-position: left;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-left-bottom
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-position: left bottom;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-left-top
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-position: left top;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-right
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-position: right;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-right-bottom
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-position: right bottom;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-right-top
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-position: right top;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-top
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-position: top;
              </td>
            </tr>
          </tbody>
        </table>
      </details>

      <details>
        <summary>Background Repeat</summary>
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
                bg-repeat
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                background-repeat: repeat;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-no-repeat
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-repeat: no-repeat;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-repeat-x
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-repeat: repeat-x;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-repeat-y
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-repeat: repeat-y;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-repeat-round
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-repeat: round;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-repeat-space
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-repeat: space;
              </td>
            </tr>
          </tbody>
        </table>
      </details>

      <details>
        <summary>Background Size</summary>
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
                bg-auto
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                background-size: auto;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-cover
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-size: cover;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-contain
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-size: contain;
              </td>
            </tr>
          </tbody>
        </table>
      </details>

      <details>
        <summary>Background Image</summary>
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
                bg-none
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
              >
                background-image: none;
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-gradient-to-t
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-image: linear-gradient(to top,
                var(--tw-gradient-stops));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-gradient-to-tr
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-image: linear-gradient(to top right,
                var(--tw-gradient-stops));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-gradient-to-r
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-image: linear-gradient(to right,
                var(--tw-gradient-stops));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-gradient-to-br
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-image: linear-gradient(to bottom right,
                var(--tw-gradient-stops));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-gradient-to-b
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-image: linear-gradient(to bottom,
                var(--tw-gradient-stops));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-gradient-to-bl
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-image: linear-gradient(to bottom left,
                var(--tw-gradient-stops));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-gradient-to-l
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-image: linear-gradient(to left,
                var(--tw-gradient-stops));
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                bg-gradient-to-tl
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
              >
                background-image: linear-gradient(to top left,
                var(--tw-gradient-stops));
              </td>
            </tr>
          </tbody>
        </table>
        <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        <div className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
        <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
        <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
      </details>

      <details>
        <summary>Gradient Color Stops</summary>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                <div className="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">
                  Class
                </div>
              </th>
              <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300 hidden sm:table-cell">
                <div className="py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20 pr-2">
                  Properties
                </div>
              </th>
              <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                <div className="py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20">
                  <span className="sr-only">Preview</span>&nbsp;
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
                from-inherit
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: inherit var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(255 255 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-current
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: currentColor
                var(--tw-gradient-from-position); --tw-gradient-to: rgb(255 255
                255 / 0) var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-transparent
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: transparent
                var(--tw-gradient-from-position); --tw-gradient-to: rgb(0 0 0 /
                0) var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-black
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #000 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
                --tw-gradient-stops: var(--tw-gradient-from),
                var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-white
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fff var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(255 255 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-slate-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f8fafc var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(248 250 252 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-slate-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f1f5f9 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(241 245 249 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-slate-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #e2e8f0 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(226 232 240 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-slate-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #cbd5e1 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(203 213 225 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-slate-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #94a3b8 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(148 163 184 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-slate-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #64748b var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(100 116 139 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-slate-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #475569 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(71 85 105 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-slate-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #334155 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(51 65 85 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-slate-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #1e293b var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(30 41 59 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-slate-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #0f172a var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(15 23 42 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-slate-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #020617 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(2 6 23 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-gray-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f9fafb var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(249 250 251 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-gray-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f3f4f6 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(243 244 246 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-gray-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #e5e7eb var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(229 231 235 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-gray-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #d1d5db var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(209 213 219 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-gray-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #9ca3af var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(156 163 175 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-gray-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #6b7280 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(107 114 128 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-gray-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #4b5563 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(75 85 99 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-gray-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #374151 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(55 65 81 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-gray-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #1f2937 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(31 41 55 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-gray-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #111827 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(17 24 39 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-gray-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #030712 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(3 7 18 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-zinc-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fafafa var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(250 250 250 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-zinc-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f4f4f5 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(244 244 245 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-zinc-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #e4e4e7 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(228 228 231 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-zinc-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #d4d4d8 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(212 212 216 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-zinc-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #a1a1aa var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(161 161 170 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-zinc-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #71717a var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(113 113 122 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-zinc-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #52525b var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(82 82 91 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-zinc-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #3f3f46 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(63 63 70 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-zinc-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #27272a var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(39 39 42 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-zinc-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #18181b var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(24 24 27 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-zinc-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #09090b var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(9 9 11 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-neutral-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fafafa var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(250 250 250 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-neutral-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f5f5f5 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(245 245 245 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-neutral-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #e5e5e5 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(229 229 229 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-neutral-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #d4d4d4 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(212 212 212 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-neutral-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #a3a3a3 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(163 163 163 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-neutral-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #737373 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(115 115 115 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-neutral-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #525252 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(82 82 82 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-neutral-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #404040 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(64 64 64 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-neutral-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #262626 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(38 38 38 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-neutral-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #171717 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(23 23 23 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-neutral-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #0a0a0a var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(10 10 10 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-stone-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fafaf9 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(250 250 249 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-stone-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f5f5f4 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(245 245 244 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-stone-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #e7e5e4 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(231 229 228 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-stone-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #d6d3d1 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(214 211 209 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-stone-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #a8a29e var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(168 162 158 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-stone-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #78716c var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(120 113 108 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-stone-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #57534e var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(87 83 78 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-stone-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #44403c var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(68 64 60 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-stone-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #292524 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(41 37 36 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-stone-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #1c1917 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(28 25 23 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-stone-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #0c0a09 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(12 10 9 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-red-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fef2f2 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(254 242 242 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-red-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fee2e2 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(254 226 226 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-red-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fecaca var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(254 202 202 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-red-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fca5a5 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(252 165 165 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-red-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f87171 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(248 113 113 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-red-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #ef4444 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(239 68 68 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-red-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #dc2626 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(220 38 38 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-red-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #b91c1c var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(185 28 28 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-red-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #991b1b var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(153 27 27 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-red-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #7f1d1d var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(127 29 29 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-red-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #450a0a var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(69 10 10 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-orange-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fff7ed var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(255 247 237 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-orange-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #ffedd5 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(255 237 213 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-orange-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fed7aa var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(254 215 170 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-orange-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fdba74 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(253 186 116 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-orange-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fb923c var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(251 146 60 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-orange-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f97316 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(249 115 22 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-orange-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #ea580c var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(234 88 12 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-orange-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #c2410c var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(194 65 12 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-orange-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #9a3412 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(154 52 18 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-orange-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #7c2d12 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(124 45 18 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-orange-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #431407 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(67 20 7 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-amber-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fffbeb var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(255 251 235 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-amber-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fef3c7 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(254 243 199 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-amber-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fde68a var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(253 230 138 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-amber-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fcd34d var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(252 211 77 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-amber-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fbbf24 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(251 191 36 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-amber-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f59e0b var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(245 158 11 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-amber-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #d97706 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(217 119 6 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-amber-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #b45309 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(180 83 9 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-amber-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #92400e var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(146 64 14 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-amber-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #78350f var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(120 53 15 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-amber-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #451a03 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(69 26 3 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-yellow-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fefce8 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(254 252 232 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-yellow-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fef9c3 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(254 249 195 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-yellow-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fef08a var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(254 240 138 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-yellow-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fde047 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(253 224 71 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-yellow-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #facc15 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(250 204 21 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-yellow-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #eab308 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(234 179 8 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-yellow-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #ca8a04 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(202 138 4 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-yellow-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #a16207 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(161 98 7 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-yellow-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #854d0e var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(133 77 14 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-yellow-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #713f12 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(113 63 18 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-yellow-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #422006 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(66 32 6 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-lime-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f7fee7 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(247 254 231 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-lime-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #ecfccb var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(236 252 203 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-lime-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #d9f99d var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(217 249 157 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-lime-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #bef264 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(190 242 100 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-lime-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #a3e635 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(163 230 53 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-lime-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #84cc16 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(132 204 22 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-lime-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #65a30d var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(101 163 13 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-lime-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #4d7c0f var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(77 124 15 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-lime-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #3f6212 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(63 98 18 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-lime-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #365314 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(54 83 20 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-lime-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #1a2e05 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(26 46 5 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-green-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f0fdf4 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(240 253 244 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-green-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #dcfce7 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(220 252 231 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-green-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #bbf7d0 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(187 247 208 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-green-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #86efac var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(134 239 172 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-green-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #4ade80 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(74 222 128 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-green-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #22c55e var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(34 197 94 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-green-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #16a34a var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(22 163 74 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-green-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #15803d var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(21 128 61 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-green-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #166534 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(22 101 52 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-green-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #14532d var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(20 83 45 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-green-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #052e16 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(5 46 22 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-emerald-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #ecfdf5 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(236 253 245 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-emerald-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #d1fae5 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(209 250 229 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-emerald-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #a7f3d0 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(167 243 208 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-emerald-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #6ee7b7 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(110 231 183 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-emerald-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #34d399 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(52 211 153 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-emerald-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #10b981 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(16 185 129 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-emerald-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #059669 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(5 150 105 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-emerald-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #047857 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(4 120 87 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-emerald-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #065f46 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(6 95 70 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-emerald-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #064e3b var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(6 78 59 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-emerald-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #022c22 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(2 44 34 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-teal-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f0fdfa var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(240 253 250 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-teal-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #ccfbf1 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(204 251 241 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-teal-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #99f6e4 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(153 246 228 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-teal-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #5eead4 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(94 234 212 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-teal-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #2dd4bf var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(45 212 191 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-teal-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #14b8a6 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(20 184 166 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-teal-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #0d9488 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(13 148 136 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-teal-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #0f766e var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(15 118 110 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-teal-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #115e59 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(17 94 89 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-teal-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #134e4a var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(19 78 74 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-teal-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #042f2e var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(4 47 46 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-cyan-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #ecfeff var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(236 254 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-cyan-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #cffafe var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(207 250 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-cyan-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #a5f3fc var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(165 243 252 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-cyan-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #67e8f9 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(103 232 249 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-cyan-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #22d3ee var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(34 211 238 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-cyan-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #06b6d4 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(6 182 212 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-cyan-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #0891b2 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(8 145 178 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-cyan-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #0e7490 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(14 116 144 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-cyan-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #155e75 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(21 94 117 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-cyan-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #164e63 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(22 78 99 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-cyan-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #083344 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(8 51 68 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-sky-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f0f9ff var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(240 249 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-sky-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #e0f2fe var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(224 242 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-sky-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #bae6fd var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(186 230 253 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-sky-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #7dd3fc var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(125 211 252 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-sky-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #38bdf8 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(56 189 248 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-sky-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #0ea5e9 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(14 165 233 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-sky-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #0284c7 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(2 132 199 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-sky-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #0369a1 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(3 105 161 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-sky-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #075985 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(7 89 133 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-sky-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #0c4a6e var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(12 74 110 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-sky-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #082f49 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(8 47 73 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-blue-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #eff6ff var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(239 246 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-blue-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #dbeafe var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(219 234 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-blue-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #bfdbfe var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(191 219 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-blue-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #93c5fd var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(147 197 253 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-blue-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #60a5fa var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(96 165 250 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-blue-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(59 130 246 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-blue-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #2563eb var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(37 99 235 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-blue-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #1d4ed8 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(29 78 216 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-blue-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #1e40af var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(30 64 175 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-blue-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #1e3a8a var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(30 58 138 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-blue-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #172554 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(23 37 84 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-indigo-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #eef2ff var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(238 242 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-indigo-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #e0e7ff var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(224 231 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-indigo-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #c7d2fe var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(199 210 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-indigo-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #a5b4fc var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(165 180 252 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-indigo-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #818cf8 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(129 140 248 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-indigo-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #6366f1 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(99 102 241 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-indigo-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #4f46e5 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(79 70 229 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-indigo-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #4338ca var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(67 56 202 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-indigo-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #3730a3 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(55 48 163 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-indigo-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #312e81 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(49 46 129 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-indigo-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #1e1b4b var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(30 27 75 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-violet-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f5f3ff var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(245 243 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-violet-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #ede9fe var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(237 233 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-violet-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #ddd6fe var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(221 214 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-violet-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #c4b5fd var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(196 181 253 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-violet-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #a78bfa var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(167 139 250 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-violet-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #8b5cf6 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(139 92 246 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-violet-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #7c3aed var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(124 58 237 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-violet-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #6d28d9 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(109 40 217 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-violet-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #5b21b6 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(91 33 182 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-violet-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #4c1d95 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(76 29 149 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-violet-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #2e1065 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(46 16 101 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-purple-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #faf5ff var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(250 245 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-purple-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f3e8ff var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(243 232 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-purple-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #e9d5ff var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(233 213 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-purple-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #d8b4fe var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(216 180 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-purple-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #c084fc var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(192 132 252 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-purple-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #a855f7 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(168 85 247 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-purple-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #9333ea var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(147 51 234 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-purple-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #7e22ce var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(126 34 206 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-purple-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #6b21a8 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(107 33 168 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-purple-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #581c87 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(88 28 135 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-purple-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #3b0764 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(59 7 100 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-fuchsia-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fdf4ff var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(253 244 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-fuchsia-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fae8ff var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(250 232 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-fuchsia-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f5d0fe var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(245 208 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-fuchsia-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f0abfc var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(240 171 252 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-fuchsia-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #e879f9 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(232 121 249 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-fuchsia-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #d946ef var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(217 70 239 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-fuchsia-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #c026d3 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(192 38 211 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-fuchsia-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #a21caf var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(162 28 175 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-fuchsia-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #86198f var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(134 25 143 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-fuchsia-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #701a75 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(112 26 117 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-fuchsia-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #4a044e var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(74 4 78 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-pink-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fdf2f8 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(253 242 248 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-pink-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fce7f3 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(252 231 243 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-pink-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fbcfe8 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(251 207 232 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-pink-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f9a8d4 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(249 168 212 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-pink-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f472b6 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(244 114 182 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-pink-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #ec4899 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(236 72 153 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-pink-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #db2777 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(219 39 119 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-pink-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #be185d var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(190 24 93 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-pink-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #9d174d var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(157 23 77 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-pink-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #831843 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(131 24 67 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-pink-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #500724 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(80 7 36 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-rose-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fff1f2 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(255 241 242 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-rose-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #ffe4e6 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(255 228 230 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-rose-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fecdd3 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(254 205 211 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-rose-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fda4af var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(253 164 175 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-rose-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #fb7185 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(251 113 133 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-rose-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #f43f5e var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(244 63 94 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-rose-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #e11d48 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(225 29 72 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-rose-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #be123c var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(190 18 60 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-rose-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #9f1239 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(159 18 57 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-rose-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #881337 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(136 19 55 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-rose-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from: #4c0519 var(--tw-gradient-from-position);
                --tw-gradient-to: rgb(76 5 25 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-0%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 0%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-5%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 5%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-10%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 10%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-15%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 15%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-20%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 20%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-25%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 25%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-30%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 30%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-35%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 35%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-40%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 40%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-45%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 45%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-50%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 50%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-55%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 55%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-60%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 60%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-65%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 65%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-70%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 70%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-75%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 75%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-80%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 80%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-85%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 85%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-90%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 90%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-95%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 95%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                from-100%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-from-position: 100%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-inherit
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(255 255 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), inherit
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-current
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(255 255 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), currentColor
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-transparent
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
                --tw-gradient-stops: var(--tw-gradient-from), transparent
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-black
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
                --tw-gradient-stops: var(--tw-gradient-from), #000
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-white
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(255 255 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fff var(--tw-gradient-via-position),
                var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-slate-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(248 250 252 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f8fafc
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-slate-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(241 245 249 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f1f5f9
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-slate-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(226 232 240 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #e2e8f0
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-slate-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(203 213 225 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #cbd5e1
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-slate-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(148 163 184 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #94a3b8
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-slate-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(100 116 139 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #64748b
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-slate-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(71 85 105 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #475569
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-slate-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(51 65 85 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #334155
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-slate-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(30 41 59 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #1e293b
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-slate-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(15 23 42 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #0f172a
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-slate-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(2 6 23 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #020617
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-gray-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(249 250 251 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f9fafb
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-gray-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(243 244 246 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f3f4f6
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-gray-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(229 231 235 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #e5e7eb
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-gray-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(209 213 219 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #d1d5db
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-gray-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(156 163 175 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #9ca3af
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-gray-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(107 114 128 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #6b7280
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-gray-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(75 85 99 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #4b5563
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-gray-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(55 65 81 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #374151
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-gray-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(31 41 55 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #1f2937
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-gray-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(17 24 39 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #111827
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-gray-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(3 7 18 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #030712
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-zinc-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(250 250 250 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fafafa
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-zinc-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(244 244 245 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f4f4f5
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-zinc-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(228 228 231 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #e4e4e7
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-zinc-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(212 212 216 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #d4d4d8
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-zinc-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(161 161 170 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #a1a1aa
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-zinc-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(113 113 122 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #71717a
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-zinc-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(82 82 91 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #52525b
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-zinc-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(63 63 70 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #3f3f46
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-zinc-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(39 39 42 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #27272a
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-zinc-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(24 24 27 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #18181b
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-zinc-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(9 9 11 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #09090b
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-neutral-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(250 250 250 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fafafa
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-neutral-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(245 245 245 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f5f5f5
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-neutral-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(229 229 229 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #e5e5e5
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-neutral-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(212 212 212 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #d4d4d4
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-neutral-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(163 163 163 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #a3a3a3
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-neutral-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(115 115 115 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #737373
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-neutral-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(82 82 82 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #525252
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-neutral-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(64 64 64 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #404040
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-neutral-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(38 38 38 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #262626
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-neutral-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(23 23 23 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #171717
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-neutral-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(10 10 10 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #0a0a0a
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-stone-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(250 250 249 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fafaf9
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-stone-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(245 245 244 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f5f5f4
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-stone-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(231 229 228 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #e7e5e4
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-stone-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(214 211 209 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #d6d3d1
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-stone-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(168 162 158 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #a8a29e
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-stone-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(120 113 108 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #78716c
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-stone-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(87 83 78 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #57534e
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-stone-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(68 64 60 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #44403c
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-stone-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(41 37 36 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #292524
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-stone-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(28 25 23 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #1c1917
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-stone-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(12 10 9 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #0c0a09
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-red-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(254 242 242 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fef2f2
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-red-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(254 226 226 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fee2e2
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-red-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(254 202 202 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fecaca
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-red-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(252 165 165 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fca5a5
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-red-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(248 113 113 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f87171
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-red-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(239 68 68 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #ef4444
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-red-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(220 38 38 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #dc2626
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-red-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(185 28 28 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #b91c1c
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-red-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(153 27 27 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #991b1b
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-red-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(127 29 29 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #7f1d1d
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-red-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(69 10 10 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #450a0a
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-orange-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(255 247 237 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fff7ed
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-orange-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(255 237 213 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #ffedd5
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-orange-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(254 215 170 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fed7aa
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-orange-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(253 186 116 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fdba74
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-orange-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(251 146 60 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fb923c
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-orange-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(249 115 22 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f97316
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-orange-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(234 88 12 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #ea580c
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-orange-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(194 65 12 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #c2410c
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-orange-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(154 52 18 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #9a3412
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-orange-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(124 45 18 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #7c2d12
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-orange-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(67 20 7 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #431407
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-amber-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(255 251 235 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fffbeb
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-amber-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(254 243 199 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fef3c7
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-amber-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(253 230 138 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fde68a
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-amber-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(252 211 77 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fcd34d
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-amber-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(251 191 36 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fbbf24
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-amber-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(245 158 11 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f59e0b
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-amber-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(217 119 6 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #d97706
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-amber-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(180 83 9 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #b45309
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-amber-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(146 64 14 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #92400e
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-amber-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(120 53 15 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #78350f
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-amber-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(69 26 3 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #451a03
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-yellow-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(254 252 232 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fefce8
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-yellow-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(254 249 195 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fef9c3
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-yellow-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(254 240 138 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fef08a
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-yellow-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(253 224 71 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fde047
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-yellow-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(250 204 21 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #facc15
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-yellow-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(234 179 8 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #eab308
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-yellow-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(202 138 4 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #ca8a04
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-yellow-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(161 98 7 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #a16207
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-yellow-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(133 77 14 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #854d0e
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-yellow-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(113 63 18 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #713f12
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-yellow-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(66 32 6 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #422006
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-lime-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(247 254 231 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f7fee7
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-lime-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(236 252 203 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #ecfccb
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-lime-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(217 249 157 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #d9f99d
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-lime-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(190 242 100 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #bef264
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-lime-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(163 230 53 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #a3e635
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-lime-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(132 204 22 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #84cc16
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-lime-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(101 163 13 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #65a30d
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-lime-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(77 124 15 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #4d7c0f
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-lime-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(63 98 18 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #3f6212
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-lime-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(54 83 20 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #365314
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-lime-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(26 46 5 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #1a2e05
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-green-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(240 253 244 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f0fdf4
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-green-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(220 252 231 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #dcfce7
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-green-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(187 247 208 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #bbf7d0
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-green-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(134 239 172 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #86efac
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-green-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(74 222 128 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #4ade80
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-green-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(34 197 94 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #22c55e
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-green-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(22 163 74 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #16a34a
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-green-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(21 128 61 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #15803d
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-green-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(22 101 52 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #166534
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-green-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(20 83 45 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #14532d
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-green-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(5 46 22 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #052e16
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-emerald-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(236 253 245 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #ecfdf5
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-emerald-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(209 250 229 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #d1fae5
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-emerald-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(167 243 208 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #a7f3d0
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-emerald-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(110 231 183 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #6ee7b7
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-emerald-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(52 211 153 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #34d399
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-emerald-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(16 185 129 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #10b981
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-emerald-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(5 150 105 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #059669
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-emerald-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(4 120 87 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #047857
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-emerald-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(6 95 70 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #065f46
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-emerald-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(6 78 59 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #064e3b
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-emerald-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(2 44 34 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #022c22
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-teal-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(240 253 250 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f0fdfa
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-teal-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(204 251 241 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #ccfbf1
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-teal-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(153 246 228 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #99f6e4
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-teal-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(94 234 212 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #5eead4
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-teal-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(45 212 191 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #2dd4bf
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-teal-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(20 184 166 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #14b8a6
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-teal-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(13 148 136 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #0d9488
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-teal-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(15 118 110 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #0f766e
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-teal-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(17 94 89 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #115e59
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-teal-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(19 78 74 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #134e4a
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-teal-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(4 47 46 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #042f2e
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-cyan-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(236 254 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #ecfeff
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-cyan-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(207 250 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #cffafe
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-cyan-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(165 243 252 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #a5f3fc
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-cyan-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(103 232 249 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #67e8f9
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-cyan-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(34 211 238 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #22d3ee
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-cyan-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(6 182 212 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #06b6d4
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-cyan-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(8 145 178 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #0891b2
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-cyan-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(14 116 144 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #0e7490
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-cyan-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(21 94 117 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #155e75
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-cyan-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(22 78 99 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #164e63
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-cyan-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(8 51 68 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #083344
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-sky-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(240 249 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f0f9ff
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-sky-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(224 242 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #e0f2fe
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-sky-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(186 230 253 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #bae6fd
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-sky-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(125 211 252 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #7dd3fc
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-sky-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(56 189 248 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #38bdf8
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-sky-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(14 165 233 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #0ea5e9
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-sky-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(2 132 199 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #0284c7
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-sky-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(3 105 161 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #0369a1
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-sky-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(7 89 133 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #075985
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-sky-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(12 74 110 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #0c4a6e
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-sky-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(8 47 73 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #082f49
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-blue-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(239 246 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #eff6ff
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-blue-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(219 234 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #dbeafe
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-blue-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(191 219 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #bfdbfe
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-blue-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(147 197 253 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #93c5fd
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-blue-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(96 165 250 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #60a5fa
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-blue-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(59 130 246 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #3b82f6
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-blue-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(37 99 235 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #2563eb
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-blue-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(29 78 216 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #1d4ed8
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-blue-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(30 64 175 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #1e40af
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-blue-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(30 58 138 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #1e3a8a
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-blue-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(23 37 84 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #172554
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-indigo-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(238 242 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #eef2ff
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-indigo-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(224 231 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #e0e7ff
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-indigo-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(199 210 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #c7d2fe
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-indigo-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(165 180 252 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #a5b4fc
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-indigo-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(129 140 248 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #818cf8
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-indigo-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(99 102 241 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #6366f1
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-indigo-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(79 70 229 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #4f46e5
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-indigo-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(67 56 202 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #4338ca
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-indigo-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(55 48 163 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #3730a3
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-indigo-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(49 46 129 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #312e81
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-indigo-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(30 27 75 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #1e1b4b
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-violet-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(245 243 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f5f3ff
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-violet-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(237 233 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #ede9fe
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-violet-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(221 214 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #ddd6fe
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-violet-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(196 181 253 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #c4b5fd
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-violet-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(167 139 250 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #a78bfa
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-violet-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(139 92 246 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #8b5cf6
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-violet-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(124 58 237 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #7c3aed
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-violet-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(109 40 217 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #6d28d9
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-violet-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(91 33 182 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #5b21b6
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-violet-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(76 29 149 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #4c1d95
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-violet-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(46 16 101 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #2e1065
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-purple-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(250 245 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #faf5ff
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-purple-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(243 232 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f3e8ff
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-purple-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(233 213 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #e9d5ff
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-purple-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(216 180 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #d8b4fe
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-purple-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(192 132 252 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #c084fc
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-purple-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(168 85 247 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #a855f7
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-purple-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(147 51 234 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #9333ea
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-purple-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(126 34 206 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #7e22ce
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-purple-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(107 33 168 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #6b21a8
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-purple-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(88 28 135 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #581c87
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-purple-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(59 7 100 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #3b0764
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-fuchsia-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(253 244 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fdf4ff
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-fuchsia-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(250 232 255 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fae8ff
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-fuchsia-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(245 208 254 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f5d0fe
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-fuchsia-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(240 171 252 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f0abfc
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-fuchsia-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(232 121 249 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #e879f9
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-fuchsia-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(217 70 239 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #d946ef
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-fuchsia-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(192 38 211 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #c026d3
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-fuchsia-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(162 28 175 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #a21caf
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-fuchsia-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(134 25 143 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #86198f
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-fuchsia-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(112 26 117 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #701a75
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-fuchsia-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(74 4 78 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #4a044e
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-pink-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(253 242 248 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fdf2f8
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-pink-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(252 231 243 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fce7f3
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-pink-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(251 207 232 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fbcfe8
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-pink-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(249 168 212 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f9a8d4
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-pink-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(244 114 182 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f472b6
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-pink-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(236 72 153 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #ec4899
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-pink-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(219 39 119 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #db2777
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-pink-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(190 24 93 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #be185d
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-pink-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(157 23 77 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #9d174d
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-pink-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(131 24 67 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #831843
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-pink-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(80 7 36 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #500724
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-rose-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(255 241 242 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fff1f2
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-rose-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(255 228 230 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #ffe4e6
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-rose-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(254 205 211 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fecdd3
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-rose-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(253 164 175 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fda4af
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-rose-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(251 113 133 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #fb7185
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-rose-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(244 63 94 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #f43f5e
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-rose-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(225 29 72 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #e11d48
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-rose-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(190 18 60 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #be123c
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-rose-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(159 18 57 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #9f1239
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-rose-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(136 19 55 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #881337
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-rose-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: rgb(76 5 25 / 0)
                var(--tw-gradient-to-position); --tw-gradient-stops:
                var(--tw-gradient-from), #4c0519
                var(--tw-gradient-via-position), var(--tw-gradient-to);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-0%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 0%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-5%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 5%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-10%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 10%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-15%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 15%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-20%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 20%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-25%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 25%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-30%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 30%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-35%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 35%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-40%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 40%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-45%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 45%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-50%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 50%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-55%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 55%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-60%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 60%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-65%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 65%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-70%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 70%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-75%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 75%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-80%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 80%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-85%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 85%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-90%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 90%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-95%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 95%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                via-100%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-via-position: 100%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-inherit
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: inherit var(--tw-gradient-to-position);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-current
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: currentColor var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-transparent
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: transparent var(--tw-gradient-to-position);
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-black
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #000 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-white
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fff var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-slate-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f8fafc var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-slate-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f1f5f9 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-slate-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #e2e8f0 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-slate-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #cbd5e1 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-slate-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #94a3b8 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-slate-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #64748b var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-slate-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #475569 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-slate-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #334155 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-slate-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #1e293b var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-slate-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #0f172a var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-slate-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #020617 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-gray-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f9fafb var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-gray-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f3f4f6 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-gray-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #e5e7eb var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-gray-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #d1d5db var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-gray-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #9ca3af var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-gray-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #6b7280 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-gray-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #4b5563 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-gray-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #374151 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-gray-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #1f2937 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-gray-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #111827 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-gray-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #030712 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-zinc-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fafafa var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-zinc-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f4f4f5 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-zinc-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #e4e4e7 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-zinc-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #d4d4d8 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-zinc-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #a1a1aa var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-zinc-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #71717a var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-zinc-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #52525b var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-zinc-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #3f3f46 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-zinc-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #27272a var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-zinc-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #18181b var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-zinc-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #09090b var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-neutral-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fafafa var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-neutral-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f5f5f5 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-neutral-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #e5e5e5 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-neutral-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #d4d4d4 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-neutral-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #a3a3a3 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-neutral-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #737373 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-neutral-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #525252 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-neutral-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #404040 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-neutral-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #262626 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-neutral-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #171717 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-neutral-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #0a0a0a var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-stone-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fafaf9 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-stone-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f5f5f4 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-stone-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #e7e5e4 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-stone-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #d6d3d1 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-stone-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #a8a29e var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-stone-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #78716c var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-stone-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #57534e var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-stone-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #44403c var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-stone-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #292524 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-stone-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #1c1917 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-stone-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #0c0a09 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-red-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fef2f2 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-red-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fee2e2 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-red-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fecaca var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-red-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fca5a5 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-red-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f87171 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-red-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #ef4444 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-red-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #dc2626 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-red-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #b91c1c var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-red-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #991b1b var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-red-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #7f1d1d var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-red-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #450a0a var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-orange-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fff7ed var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-orange-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #ffedd5 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-orange-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fed7aa var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-orange-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fdba74 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-orange-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fb923c var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-orange-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f97316 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-orange-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #ea580c var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-orange-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #c2410c var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-orange-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #9a3412 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-orange-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #7c2d12 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-orange-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #431407 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-amber-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fffbeb var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-amber-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fef3c7 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-amber-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fde68a var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-amber-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fcd34d var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-amber-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fbbf24 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-amber-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f59e0b var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-amber-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #d97706 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-amber-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #b45309 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-amber-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #92400e var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-amber-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #78350f var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-amber-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #451a03 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-yellow-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fefce8 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-yellow-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fef9c3 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-yellow-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fef08a var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-yellow-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fde047 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-yellow-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #facc15 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-yellow-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #eab308 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-yellow-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #ca8a04 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-yellow-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #a16207 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-yellow-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #854d0e var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-yellow-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #713f12 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-yellow-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #422006 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-lime-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f7fee7 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-lime-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #ecfccb var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-lime-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #d9f99d var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-lime-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #bef264 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-lime-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #a3e635 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-lime-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #84cc16 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-lime-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #65a30d var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-lime-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #4d7c0f var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-lime-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #3f6212 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-lime-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #365314 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-lime-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #1a2e05 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-green-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f0fdf4 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-green-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #dcfce7 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-green-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #bbf7d0 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-green-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #86efac var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-green-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #4ade80 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-green-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #22c55e var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-green-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #16a34a var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-green-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #15803d var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-green-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #166534 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-green-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #14532d var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-green-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #052e16 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-emerald-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #ecfdf5 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-emerald-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #d1fae5 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-emerald-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #a7f3d0 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-emerald-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #6ee7b7 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-emerald-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #34d399 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-emerald-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #10b981 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-emerald-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #059669 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-emerald-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #047857 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-emerald-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #065f46 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-emerald-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #064e3b var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-emerald-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #022c22 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-teal-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f0fdfa var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-teal-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #ccfbf1 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-teal-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #99f6e4 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-teal-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #5eead4 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-teal-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #2dd4bf var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-teal-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #14b8a6 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-teal-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #0d9488 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-teal-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #0f766e var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-teal-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #115e59 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-teal-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #134e4a var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-teal-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #042f2e var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-cyan-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #ecfeff var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-cyan-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #cffafe var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-cyan-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #a5f3fc var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-cyan-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #67e8f9 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-cyan-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #22d3ee var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-cyan-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #06b6d4 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-cyan-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #0891b2 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-cyan-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #0e7490 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-cyan-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #155e75 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-cyan-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #164e63 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-cyan-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #083344 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-sky-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f0f9ff var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-sky-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #e0f2fe var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-sky-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #bae6fd var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-sky-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #7dd3fc var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-sky-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #38bdf8 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-sky-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #0ea5e9 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-sky-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #0284c7 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-sky-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #0369a1 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-sky-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #075985 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-sky-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #0c4a6e var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-sky-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #082f49 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-blue-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #eff6ff var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-blue-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #dbeafe var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-blue-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #bfdbfe var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-blue-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #93c5fd var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-blue-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #60a5fa var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-blue-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-blue-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #2563eb var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-blue-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #1d4ed8 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-blue-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #1e40af var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-blue-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #1e3a8a var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-blue-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #172554 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-indigo-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #eef2ff var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-indigo-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #e0e7ff var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-indigo-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #c7d2fe var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-indigo-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #a5b4fc var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-indigo-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #818cf8 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-indigo-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #6366f1 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-indigo-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #4f46e5 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-indigo-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #4338ca var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-indigo-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #3730a3 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-indigo-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #312e81 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-indigo-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #1e1b4b var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-violet-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f5f3ff var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-violet-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #ede9fe var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-violet-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #ddd6fe var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-violet-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #c4b5fd var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-violet-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #a78bfa var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-violet-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #8b5cf6 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-violet-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #7c3aed var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-violet-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #6d28d9 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-violet-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #5b21b6 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-violet-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #4c1d95 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-violet-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #2e1065 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-purple-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #faf5ff var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-purple-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f3e8ff var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-purple-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #e9d5ff var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-purple-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #d8b4fe var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-purple-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #c084fc var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-purple-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #a855f7 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-purple-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #9333ea var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-purple-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #7e22ce var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-purple-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #6b21a8 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-purple-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #581c87 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-purple-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #3b0764 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-fuchsia-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fdf4ff var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-fuchsia-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fae8ff var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-fuchsia-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f5d0fe var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-fuchsia-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f0abfc var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-fuchsia-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #e879f9 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-fuchsia-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #d946ef var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-fuchsia-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #c026d3 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-fuchsia-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #a21caf var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-fuchsia-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #86198f var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-fuchsia-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #701a75 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-fuchsia-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #4a044e var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-pink-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fdf2f8 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-pink-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fce7f3 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-pink-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fbcfe8 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-pink-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f9a8d4 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-pink-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f472b6 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-pink-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #ec4899 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-pink-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #db2777 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-pink-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #be185d var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-pink-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #9d174d var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-pink-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #831843 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-pink-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #500724 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-rose-50
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fff1f2 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-rose-100
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #ffe4e6 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-rose-200
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fecdd3 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-rose-300
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fda4af var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-rose-400
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #fb7185 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-rose-500
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #f43f5e var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-rose-600
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #e11d48 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-rose-700
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #be123c var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-rose-800
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #9f1239 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-rose-900
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #881337 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-rose-950
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to: #4c0519 var(--tw-gradient-to-position);
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-0%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 0%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-5%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 5%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-10%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 10%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-15%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 15%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-20%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 20%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-25%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 25%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-30%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 30%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-35%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 35%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-40%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 40%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-45%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 45%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-50%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 50%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-55%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 55%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-60%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 60%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-65%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 65%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-70%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 70%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-75%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 75%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-80%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 80%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-85%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 85%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-90%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 90%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-95%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 95%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
            <tr>
              <td
                translate="no"
                className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
              >
                to-100%
              </td>
              <td
                translate="no"
                className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10 hidden sm:table-cell sm:pr-2"
              >
                --tw-gradient-to-position: 100%;
              </td>
              <td>
                <div className="w-24"></div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="h-10 bg-gradient-to-r from-indigo-500 ..."></div>
        <div className="h-10 bg-gradient-to-r from-cyan-500 to-blue-500 ..."></div>
        <div className="h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div>
        <div className="h-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>
      </details>
    </>
  );
};

export { Backgrounds };
