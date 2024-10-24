import React, { useRef, useEffect } from 'react';
import { AiFillBank } from 'react-icons/ai';
import { SlPhone } from 'react-icons/sl';
import { FaAt } from 'react-icons/fa6';
import { FaRegCommentDots } from 'react-icons/fa';
import Img from './cake.jpg';
import { testMine2 } from '@/assets/script.js';

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
    let captionsList = document.querySelectorAll('.caption-item');
    let unitsList = document.querySelectorAll('.unit');

    captionsList.forEach(function (item, index) {
      item.addEventListener('mouseover', function () {
        unitsList[index].classList.add('hovered');
      });

      item.addEventListener('mouseout', function () {
        unitsList[index].classList.remove('hovered');
      });
    });
  }, []);

  return (
    <div className="canvas">
      <div className="legend">
        <ul className="caption-list">
          <li className="caption-item ">еда</li>
          <li className="caption-item">соседи</li>
          <li className="caption-item">отсутствие рабочего места</li>
        </ul>
      </div>

      <svg className="chart" width="500" height="500" viewBox="0 0 50 50">
        <a className="link-chart" href="https://mail.ru/">
          <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
        </a>

        <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
        <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
      </svg>
    </div>
  );
};

const MainDemo = () => {
  const ref = useRef(null);

  useEffect(() => {
    (window as any).testMine();
    // testMine2();
  }, []);

  return (
    <div className="">
      <div className="sm:hidden block">I'm hidden</div>
      {/*<div className="pie_1"></div>*/}

      {/*<Pie1 />*/}
      {/*<Pie2 />*/}
      {/*<Pie3 />*/}
      <Pie4 />

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
