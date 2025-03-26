import React, { useRef, useEffect, useState, MouseEvent } from 'react';
import { AiFillBank } from 'react-icons/ai';
import { SlPhone } from 'react-icons/sl';
import { FaAt } from 'react-icons/fa6';
import { FaRegCommentDots } from 'react-icons/fa';
import cn from 'classnames';
import { Buffer } from 'buffer';
// import { readFileSync, readFile } from 'fs';
// import fs from 'fs';
import axios from 'axios';
import moment from 'moment'

import Img from './cake.jpg';
import { testMine2 } from '@/assets/script.js';
import myTextFile from './file.txt';

import './App.css';
import styles from './App.module.scss';

const Pie1 = () => (
  <div id="my-pie-chart-container">
    <div id="my-pie-chart"></div>

    <div id="legenda">
      <div className="entry">
        <div id="color-brown" className="entry-color"></div>
        <div className="entry-text">Antarctica</div>
      </div>
      <div className="entry">
        <div id="color-black" className="entry-color"></div>
        <div className="entry-text">Australia</div>
      </div>
      <div className="entry">
        <div id="color-blue" className="entry-color"></div>
        <div className="entry-text">North America</div>
      </div>
      <div className="entry">
        <div id="color-green" className="entry-color"></div>
        <div className="entry-text">South America</div>
      </div>
      <div className="entry">
        <div id="color-yellow" className="entry-color"></div>
        <div className="entry-text">Europe</div>
      </div>
      <div className="entry">
        <div id="color-orange" className="entry-color"></div>
        <div className="entry-text">Africa</div>
      </div>
      <div className="entry">
        <div id="color-red" className="entry-color"></div>
        <div className="entry-text">Asia</div>
      </div>
    </div>
  </div>
);

const Pie2 = () => (
  <ul className="chart-skills">
    <li>
      <span>CSS</span>
    </li>
    <li>
      <span>HTML</span>
    </li>
    <li>
      <span>PHP</span>
    </li>
    <li>
      <span>Python</span>
    </li>
  </ul>
);

const Pie3 = () => (
  <div className="progress-bar-wrap">
    <div className="progress-bar green">
      <progress value="35" max="100">
        75%
      </progress>
    </div>
    <div className="progress-bar blue">
      <progress value="35" max="100">
        75%
      </progress>
    </div>
  </div>
);

const Pie4 = () => {
  useEffect(() => {
    const captionsList = document.querySelectorAll('.caption-item');
    const unitsList: any = document.querySelectorAll('.unit');
    let all = 0;
    let count = 0;

    unitsList.forEach((item: any) => {
      all += +item.dataset.size;
    });
    captionsList.forEach(function (item, index) {
      const size = +unitsList[index].dataset.size;
      const percentTo = (size / all) * 100;
      unitsList[index].setAttribute(
        'style',
        `stroke-dasharray: ${percentTo} 100; stroke-dashoffset: -${count};`
      );

      count += percentTo;

      item.addEventListener('mouseover', function () {
        unitsList[index].classList.add('hovered');
      });

      item.addEventListener('mouseout', function () {
        unitsList[index].classList.remove('hovered');
      });
    });
  }, []);

  return (
    <div className="pie-wrap">
      <div className="legend">
        <ul className="caption-list">
          <li className="caption-item ">еда 5</li>
          <li className="caption-item">соседи 3</li>
          <li className="caption-item">отсутствие рабочего места 15</li>
        </ul>
      </div>

      <svg className="chart" viewBox="0 0 50 50">
        <a className="link-chart" href="https://mail.ru/">
          <circle
            data-size={2}
            className="unit first"
            r="10.9"
            cx="50%"
            cy="50%"
          ></circle>
        </a>
        <a className="link-chart" href="https://mail.ru/">
          <circle
            data-size={2}
            className="unit second"
            r="10.9"
            cx="50%"
            cy="50%"
          ></circle>
        </a>
        <a className="link-chart" href="https://mail.ru/">
          <circle
            data-size={17}
            className="unit third"
            r="10.9"
            cx="50%"
            cy="50%"
          ></circle>
        </a>
      </svg>
    </div>
  );
};

const DropDown = () => {
  const useComponentVisible = (initialIsVisible: boolean) => {
    const [isComponentVisible, setIsComponentVisible] =
      useState(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: unknown) => {
      if (
        ref.current &&
        !ref.current.contains((event as { target: HTMLElement }).target)
      ) {
        setIsComponentVisible(false);
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);

      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
  };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <div ref={ref}>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsComponentVisible((prev) => !prev)}
      >
        Dropdown button{' '}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isComponentVisible && (
        <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Lists = () => {
  const [lists, setList] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
  ]);
  const [active, setActive] = useState<number | null>(null);

  return (
    <ul className="h-[100px] overflow-y-auto">
      {lists.map((it) => (
        <li
          className={cn({ [styles.active]: active === it })}
          key={it}
          onClick={() => setActive(it)}
        >
          {it}
        </li>
      ))}
    </ul>
  );
};

const LoadText = () => {
  const [fileContent, setFileContent] = useState('');
  const base64Text2 =
    'data:content/type;base64,0JrQsNC60L7QuS3RgtC+IA0K0YLQtdC60YHRgg0KDQrQktC+0YIg0L/RgNC+0LHQtdGAINC4INGC0L7QvNGDINC/0YDQvtGH0LjQtQ==';

  useEffect(() => {
    axios.get(base64Text2).then((content) => {
      const blob2 = new Blob([content.data], {
        type: 'text/csv;charset=utf-8'
      });
      blob2.text().then((res) => {
        console.log('res text', res);
        setFileContent(res);
      });

      console.log('file', content.data);
    });
  }, []);

  return (
    <div>
      <h1>Text File Content:</h1>

      <pre>{fileContent}</pre>
    </div>
  );
};

function timeFromDate(){
  const from = new Date('2025-03-19T22:55:01').toISOString()
  const to = new Date().toISOString()
  return moment(from).from(to);
  // return moment([2011, 8, 24]).from([2019, 8, 24]);
}


const MainDemo = () => {
  const ref = useRef(null);

  let result = timeFromDate();

  useEffect(() => {
    (window as any).testMine();
    // testMine2();
  }, []);

  return (
    <div className="">
    <div>Date: {result}</div>
      <div className="sm:hidden block">I'm hidden</div>
      <Lists />
      {/*<div className="pie_1"></div>*/}

      {/*<Pie1 />*/}
      {/*<Pie2 />*/}
      {/*<Pie3 />*/}
      <Pie4 />

      <DropDown />
      <LoadText />

      <div>
        <div
          className="relative min-h-32 pb-9 bg-indigo-300/30 bg-no-repeat bg-[right_1rem_top_1rem] bg-[length:200px_100px]"
          style={{ backgroundImage: `url(${Img})` }}
        >
          <p className="absolute left-1/2 top-1/2 translate-1/2 -mt-3">
            Static parent
          </p>
          <p className={`before:content-['"'] after:content-['"']`}>
            Static parent
          </p>
          <p>Static parent</p>
          <p>Static parent</p>
          <p>Static parent</p>
          <p>Static parent</p>
          <div className="absolute bottom-0 left-0 ...">
            <p>Absolute child</p>
          </div>
        </div>

        {/*breakram*/}
        <div className="px-2 flex items-center">
          <div className="py-4 overflow-y-auto whitespace-nowrap flex items-center">
            {/* breadcrumb-link - global class */}
            <a
              className="breadcrumb-link text-gray-600  flex items-center"
              href="#"
            >
              <AiFillBank className="mr-2" />
              Home
            </a>
            <span className="mx-2 text-gray-500">&gt;</span>
            <a className="breadcrumb-link text-gray-600/50 " href="#">
              News
            </a>
            <span className="mx-2 text-gray-500">&gt;</span>
            <a className="breadcrumb-link text-gray-600 " href="#">
              Tech
            </a>
          </div>
        </div>
        <div className="border border-dotted"></div>

        <div className="flex px-2 mb-5 rounded-2xl overflow-hidden h-80 relative">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover "
            src={Img}
            alt="cake"
          />
        </div>

        {/*banner*/}
        <section className="px-2 lg:flex lg:space-x-2">
          <a
            href="#"
            className="w-full lg:w-2/3 mb-4 bg-gradient-to-l from-red-500 via-purple-500 to-blue-500 hover:to-green-500 hover:via-purple-500/50 h-96 relative rounded inline-block overflow-hidden"
          >
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut?
              </h2>
            </div>
          </a>
          <a
            href="#"
            className="w-full lg:w-1/3 mb-4 bg-indigo-300 h-96 relative rounded inline-block overflow-hidden"
          >
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h2>
            </div>
          </a>
        </section>

        <div className="my-5 lg:flex lg:space-x-5">
          <div className="w-full fl:w-2/3 ">
            <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
              Subscribe
            </h5>
            <p className="text-gray-600 mb-4"></p>
            <input
              className="text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-400 transition ease-in"
              type="email"
              placeholder="you@gmail.com"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800 transition ease-in">
              Subscribe
            </button>
          </div>
          <div className="w-full lg:w-1/3 lg:pt-0 pt-5">
            <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
              Popular News
            </h5>
            <ul>
              <li className="px-1 py-4 border-y border-white hover:border-gray-200">
                <a className="flex items-center text-gray-600" href="#">
                  <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-green-500 to-green-700"></span>
                  Vue
                  <span className="text-gray-500 ml-auto">24 articles</span>
                </a>
              </li>
              <li className="px-1 py-4 border-y border-white hover:border-gray-200">
                <a className="flex items-center text-gray-600" href="#">
                  <span className="inline-block w-4 h-4 mr-3  bg-gradient-to-tr from-orange-500 to-orange-700"></span>
                  Vue
                  <span className="text-gray-500 ml-auto">20 articles</span>
                </a>
              </li>
              <li className="px-1 py-4 border-y border-white hover:border-gray-200">
                <a className="flex items-center text-gray-600" href="#">
                  <span className="inline-block w-4 h-4 mr-3  bg-gradient-to-tr from-red-500 to-red-700"></span>
                  Angular
                  <span className="text-gray-500 ml-auto">15 articles</span>
                </a>
              </li>
              <li className="px-1 py-4 border-y border-white hover:border-gray-200">
                <a className="flex items-center text-gray-600" href="#">
                  <span className="inline-block w-4 h-4 mr-3  bg-gradient-to-tr from-blue-500 to-blue-700"></span>
                  React
                  <span className="text-gray-500 ml-auto">7 articles</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-dotted"></div>

        <h1 className="text-3xl font-bold underline bg-red-200">
          bobbyhadz.com
        </h1>

        <h2 className={styles.head}>2</h2>

        <section className="px-2 lg:flex lg:space-x-8">
          <a className="w-full blck mb-10 lg:w-2/5 " href="#">
            <div className="flex">
              <div>
                <h3 className="mt-3 mb-2 text-gray-700 font-bold text-2 text-2xl">
                  "Ipsum" redirects here. For the car, see Toyota Ipsum.
                </h3>
                <p className="text-gray-700">
                  In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm
                  ˈɪp.səm/) is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content. Lorem ipsum may be used as a placeholder
                  before the final copy is available. It is also used to
                  temporarily replace text in a process called greeking, which
                  allows designers to consider the form of a webpage or
                  publication, without the meaning of the text influencing the
                  design.
                </p>
              </div>
            </div>
          </a>
          <a className="w-full blck mb-10 lg:w-2/5" href="#">
            <div className="flex">
              <div>
                <h3 className="mt-3 mb-2 text-gray-700 font-bold text-2 text-2xl">
                  "Ipsum" redirects here. For the car, see Toyota Ipsum.
                </h3>
                <p className="text-gray-700">
                  In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm
                  ˈɪp.səm/) is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content. Lorem ipsum may be used as a placeholder
                  before the final copy is available. It is also used to
                  temporarily replace text in a process called greeking, which
                  allows designers to consider the form of a webpage or
                  publication, without the meaning of the text influencing the
                  design.
                </p>
              </div>
            </div>
          </a>
          <a className="w-full blck mb-10 lg:w-1/5" href="#">
            <div className="flex">
              <div>
                <h3 className="mt-3 mb-2 text-gray-700 font-bold text-2 text-2xl">
                  "Ipsum" redirects here. For the car, see Toyota Ipsum.
                </h3>
                <p className="text-gray-700">
                  In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm
                  ˈɪp.səm/) is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content. Lorem ipsum may be used as a placeholder
                  before the final copy is available. It is also used to
                  temporarily replace text in a process called greeking, which
                  allows designers to consider the form of a webpage or
                  publication, without the meaning of the text influencing the
                  design.
                </p>
              </div>
            </div>
          </a>
        </section>

        {/*pagination*/}
        <div className="mt-20 mb-10">
          <ul className="flex justify-center">
            <li className="inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-l-lg ">
              <a href="#">Previous</a>
            </li>
            <li className="inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <a href="#">1</a>
            </li>
            <li className="inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <a href="#">2</a>
            </li>
            <li className="inline-block py-1 px-3 border border-gray-300 text-blue-600 hover:bg-blue-100">
              <a href="#">3</a>
            </li>
            <li className="inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <a href="#">4</a>
            </li>
            <li className="inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <a href="#">5</a>
            </li>
            <li className="inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg">
              <a href="#">Next</a>
            </li>
          </ul>
        </div>
      </div>

      <footer className="border-t mt-10 py-10 px-2">
        <div className="lg:flex">
          <div className="w-full mb-5 lg:mb-0 lg:w-2/5">
            <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
            <ul>
              <li>
                <a
                  className="inline-block text-gray-500 py-2 hover:underline"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-gray-500 py-2 hover:underline"
                  href="#"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full mb-5 lg:mb-0 lg:w-2/5">
            <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
            <ul>
              <li>
                <a
                  className="inline-block text-gray-500 py-2 hover:underline"
                  href="#"
                >
                  Block
                </a>
              </li>

              <li>
                <a
                  className="inline-block text-gray-500 py-2 hover:underline decoration-gray-700 underline-offset-2"
                  href="#"
                >
                  Policy
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-gray-500 py-2 hover:underline decoration-2 decoration-green-500 decoration-wavy"
                  href="#"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5">
            <h6 className="font-semibold text-gray-700 mb-4">Content Us</h6>
            <ul className="flex">
              <li>
                <a
                  className="inline-block text-gray-500 py-2 hover:underline text-2xl mr-5 hover:text-blue-700"
                  href="#"
                >
                  <FaRegCommentDots />
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-gray-500 py-2 hover:underline text-2xl mr-5 hover:text-blue-700"
                  href="#"
                >
                  <FaAt />
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-gray-500 py-2 hover:underline text-2xl mr-5 hover:text-blue-700"
                  href="#"
                >
                  <SlPhone />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { MainDemo };
