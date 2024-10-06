import React, { useState } from 'react';

const Colors = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-indigo-300 text-white px-7 py-2 rounded-lg mb-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        Colors:
      </button>
      {isOpen && (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Slate
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(248, 250, 252)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f8fafc
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(241, 245, 249)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f1f5f9
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(226, 232, 240)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #e2e8f0
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(203, 213, 225)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #cbd5e1
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(148, 163, 184)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #94a3b8
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(100, 116, 139)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #64748b
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(71, 85, 105)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #475569
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(51, 65, 85)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #334155
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(30, 41, 59)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #1e293b
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(15, 23, 42)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #0f172a
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(2, 6, 23)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #020617
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Gray
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(249, 250, 251)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f9fafb
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(243, 244, 246)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f3f4f6
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(229, 231, 235)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #e5e7eb
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(209, 213, 219)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #d1d5db
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(156, 163, 175)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #9ca3af
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(107, 114, 128)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #6b7280
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(75, 85, 99)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #4b5563
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(55, 65, 81)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #374151
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(31, 41, 55)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #1f2937
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(17, 24, 39)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #111827
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(3, 7, 18)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #030712
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Zinc
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(250, 250, 250)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fafafa
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(244, 244, 245)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f4f4f5
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(228, 228, 231)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #e4e4e7
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(212, 212, 216)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #d4d4d8
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(161, 161, 170)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #a1a1aa
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(113, 113, 122)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #71717a
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(82, 82, 91)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #52525b
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(63, 63, 70)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #3f3f46
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(39, 39, 42)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #27272a
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(24, 24, 27)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #18181b
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(9, 9, 11)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #09090b
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Neutral
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(250, 250, 250)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fafafa
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(245, 245, 245)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f5f5f5
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(229, 229, 229)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #e5e5e5
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(212, 212, 212)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #d4d4d4
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(163, 163, 163)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #a3a3a3
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(115, 115, 115)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #737373
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(82, 82, 82)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #525252
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(64, 64, 64)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #404040
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(38, 38, 38)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #262626
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(23, 23, 23)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #171717
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(10, 10, 10)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #0a0a0a
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Stone
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(250, 250, 249)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fafaf9
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(245, 245, 244)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f5f5f4
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(231, 229, 228)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #e7e5e4
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(214, 211, 209)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #d6d3d1
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(168, 162, 158)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #a8a29e
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(120, 113, 108)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #78716c
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(87, 83, 78)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #57534e
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(68, 64, 60)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #44403c
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(41, 37, 36)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #292524
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(28, 25, 23)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #1c1917
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(12, 10, 9)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #0c0a09
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Red
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(254, 242, 242)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fef2f2
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(254, 226, 226)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fee2e2
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(254, 202, 202)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fecaca
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(252, 165, 165)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fca5a5
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(248, 113, 113)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f87171
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(239, 68, 68)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #ef4444
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(220, 38, 38)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #dc2626
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(185, 28, 28)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #b91c1c
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(153, 27, 27)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #991b1b
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(127, 29, 29)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #7f1d1d
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(69, 10, 10)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #450a0a
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Orange
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(255, 247, 237)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fff7ed
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(255, 237, 213)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #ffedd5
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(254, 215, 170)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fed7aa
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(253, 186, 116)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fdba74
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(251, 146, 60)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fb923c
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(249, 115, 22)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f97316
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(234, 88, 12)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #ea580c
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(194, 65, 12)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #c2410c
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(154, 52, 18)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #9a3412
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(124, 45, 18)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #7c2d12
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(67, 20, 7)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #431407
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Amber
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(255, 251, 235)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fffbeb
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(254, 243, 199)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fef3c7
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(253, 230, 138)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fde68a
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(252, 211, 77)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fcd34d
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(251, 191, 36)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fbbf24
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(245, 158, 11)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f59e0b
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(217, 119, 6)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #d97706
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(180, 83, 9)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #b45309
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(146, 64, 14)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #92400e
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(120, 53, 15)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #78350f
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(69, 26, 3)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #451a03
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Yellow
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(254, 252, 232)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fefce8
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(254, 249, 195)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fef9c3
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(254, 240, 138)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fef08a
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(253, 224, 71)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fde047
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(250, 204, 21)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #facc15
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(234, 179, 8)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #eab308
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(202, 138, 4)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #ca8a04
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(161, 98, 7)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #a16207
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(133, 77, 14)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #854d0e
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(113, 63, 18)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #713f12
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(66, 32, 6)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #422006
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Lime
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(247, 254, 231)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f7fee7
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(236, 252, 203)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #ecfccb
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(217, 249, 157)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #d9f99d
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(190, 242, 100)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #bef264
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(163, 230, 53)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #a3e635
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(132, 204, 22)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #84cc16
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(101, 163, 13)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #65a30d
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(77, 124, 15)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #4d7c0f
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(63, 98, 18)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #3f6212
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(54, 83, 20)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #365314
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(26, 46, 5)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #1a2e05
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Green
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(240, 253, 244)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f0fdf4
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(220, 252, 231)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #dcfce7
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(187, 247, 208)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #bbf7d0
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(134, 239, 172)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #86efac
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(74, 222, 128)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #4ade80
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(34, 197, 94)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #22c55e
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(22, 163, 74)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #16a34a
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(21, 128, 61)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #15803d
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(22, 101, 52)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #166534
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(20, 83, 45)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #14532d
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(5, 46, 22)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #052e16
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Emerald
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(236, 253, 245)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #ecfdf5
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(209, 250, 229)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #d1fae5
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(167, 243, 208)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #a7f3d0
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(110, 231, 183)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #6ee7b7
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(52, 211, 153)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #34d399
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(16, 185, 129)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #10b981
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(25, 150, 105)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #059669
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(4, 120, 87)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #047857
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(6, 95, 70)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #065f46
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(6, 78, 59)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #064e3b
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(2, 44, 34)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #022c22
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Teal
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(240, 253, 250)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f0fdfa
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(204, 251, 241)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #ccfbf1
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(153, 246, 228)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #99f6e4
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(94, 234, 212)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #5eead4
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(45, 212, 191)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #2dd4bf
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(20, 184, 166)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #14b8a6
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(13, 148, 136)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #0d9488
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(15, 118, 110)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #0f766e
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(17, 94, 89)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #115e59
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(19, 78, 74)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #134e4a
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(4, 47, 46)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #042f2e
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Cyan
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(236, 254, 255)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #ecfeff
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(207, 250, 254)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #cffafe
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(165, 243, 252)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #a5f3fc
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(103, 232, 249)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #67e8f9
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(34, 211, 238)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #22d3ee
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(6, 182, 212)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #06b6d4
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(8, 145, 178)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #0891b2
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(14, 116, 144)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #0e7490
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(21, 94, 117)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #155e75
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(22, 78, 99)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #164e63
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(8, 51, 68)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #083344
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Sky
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(240, 249, 255)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f0f9ff
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(224, 242, 254)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #e0f2fe
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(186, 230, 253)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #bae6fd
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(125, 211, 252)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #7dd3fc
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(56, 189, 248)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #38bdf8
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(14, 165, 233)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #0ea5e9
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(2, 132, 199)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #0284c7
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(3, 105, 161)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #0369a1
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(7, 89, 133)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #075985
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(12, 74, 110)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #0c4a6e
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(8, 47, 73)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #082f49
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Blue
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(239, 246, 255)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #eff6ff
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(219, 234, 254)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #dbeafe
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(191, 219, 254)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #bfdbfe
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(147, 197, 253)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #93c5fd
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(96, 165, 250)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #60a5fa
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(59, 130, 246)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #3b82f6
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(37, 99, 235)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #2563eb
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(29, 78, 216)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #1d4ed8
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(30, 64, 175)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #1e40af
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(30, 58, 138)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #1e3a8a
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(23, 37, 84)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #172554
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Indigo
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(238, 242, 255)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #eef2ff
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(224, 231, 255)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #e0e7ff
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(199, 210, 254)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #c7d2fe
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(165, 180, 252)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #a5b4fc
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(129, 140, 248)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #818cf8
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(99, 102, 241)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #6366f1
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(79, 70, 229)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #4f46e5
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(67, 56, 202)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #4338ca
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(55, 48, 163)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #3730a3
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(49, 46, 129)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #312e81
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(30, 27, 75)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #1e1b4b
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Violet
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(245, 243, 255)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f5f3ff
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(237, 233, 254)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #ede9fe
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(221, 214, 254)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #ddd6fe
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(196, 181, 253)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #c4b5fd
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(167, 139, 250)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #a78bfa
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(139, 92, 246)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #8b5cf6
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(124, 58, 237)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #7c3aed
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(109, 40, 217)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #6d28d9
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(91, 33, 182)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #5b21b6
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(76, 29, 149)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #4c1d95
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(46, 16, 101)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #2e1065
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Purple
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(250, 245, 255)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #faf5ff
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(243, 232, 255)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f3e8ff
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(233, 213, 255)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #e9d5ff
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(216, 180, 254)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #d8b4fe
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(192, 132, 252)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #c084fc
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(168, 85, 247)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #a855f7
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(147, 51, 234)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #9333ea
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(126, 34, 206)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #7e22ce
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(107, 33, 168)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #6b21a8
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(88, 28, 135)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #581c87
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(59, 7, 100)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #3b0764
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Fuchsia
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(253, 244, 255)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fdf4ff
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(250, 232, 255)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fae8ff
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(245, 208, 254)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f5d0fe
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(240, 171, 252)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f0abfc
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(232, 121, 249)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #e879f9
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(217, 70, 239)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #d946ef
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(192, 38, 211)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #c026d3
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(162, 28, 175)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #a21caf
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(134, 25, 143)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #86198f
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(112, 26, 117)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #701a75
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(74, 4, 78)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #4a044e
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Pink
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(253, 242, 248)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fdf2f8
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(252, 231, 243)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fce7f3
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(251, 207, 232)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fbcfe8
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(249, 168, 212)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f9a8d4
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(244, 114, 182)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f472b6
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(236, 72, 153)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #ec4899
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(219, 39, 119)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #db2777
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(190, 24, 93)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #be185d
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(157, 23, 77)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #9d174d
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(131, 24, 67)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #831843
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(80, 7, 36)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #500724
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              Rose
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(255, 241, 242)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      50
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fff1f2
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(255, 228, 230)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      100
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #ffe4e6
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(254, 205, 211)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      200
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fecdd3
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(253, 164, 175)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      300
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fda4af
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(251, 113, 133)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      400
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #fb7185
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(244, 63, 94)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      500
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #f43f5e
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(225, 29, 72)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      600
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #e11d48
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(190, 18, 60)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      700
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #be123c
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(159, 18, 57)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      800
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #9f1239
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(136, 19, 55)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      900
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #881337
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: 'rgb(76, 5, 25)' }}
                  ></div>
                  <div className="px-0.5">
                    <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                      950
                    </div>
                    <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                      #4c0519
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Colors };
