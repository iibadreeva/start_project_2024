import React from 'react';

const Messenger: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-start">
        <div className=" text-sm text-gray-700 space-y-2 flex flex-col">
          <div className="flex items-center ">
            <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-100">
              Hey! How are you?
            </p>
          </div>
          <div className="flex items-center ">
            <p className="px-6 py-3 rounded-r-full bg-gray-100 max-w-xs lg:max-w-md">
              Shall we go for Hiking this weekend?
            </p>
          </div>
          <div className="flex items-center ">
            <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-100 max-w-xs lg:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat lacus laoreet non curabitur gravida.
            </p>
          </div>
        </div>
      </div>
      <p className="p-4 text-center text-sm text-gray-500">FRI 3:04 PM</p>
      <div className="flex flex-row justify-end">
        <div className=" text-sm text-gray-700 space-y-2 flex flex-col">
          <div className="flex items-center flex-row-reverse">
            <p className="px-6 py-3 rounded-t-full rounded-l-full bg-gray-100">
              Hey! How are you?
            </p>
          </div>
          <div className="flex items-center flex-row-reverse">
            <p className="px-6 py-3 rounded-l-full bg-gray-100 max-w-xs lg:max-w-md">
              Shall we go for Hiking this weekend?
            </p>
          </div>
          <div className="flex items-center flex-row-reverse">
            <p className="px-6 py-3 rounded-b-full rounded-l-full bg-gray-100 max-w-xs lg:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat lacus laoreet non curabitur gravida.
            </p>
          </div>
        </div>
      </div>

      <p className="p-4 text-center text-sm text-gray-500">FRI 3:04 PM</p>
      <div className="flex flex-row justify-end">
        <div className="text-sm text-white space-y-2 flex flex-col">
          <div className="flex items-center flex-row-reverse ">
            <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-500 max-w-xs lg:max-w-md">
              Hey! How are you?
            </p>
          </div>
          <div className="flex items-center flex-row-reverse ">
            <p className="px-6 py-3 rounded-l-full bg-blue-500 max-w-xs lg:max-w-md">
              Shall we go for Hiking this weekend?
            </p>
          </div>
          <div className="flex items-center flex-row-reverse ">
            <p className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-500 max-w-xs lg:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat lacus laoreet non curabitur gravida.
            </p>
          </div>
        </div>
      </div>

      <p className="p-4 text-center text-sm text-gray-500">SAT 2:10 PM</p>
      <div className="flex flex-row justify-start">
        <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
          <div className="flex items-center group">
            <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-100 max-w-xs lg:max-w-md">
              Hey! How are you?
            </p>
          </div>
          <div className="flex items-center group">
            <p className="px-6 py-3 rounded-r-full bg-gray-100 max-w-xs lg:max-w-md">
              Shall we go for Hiking this weekend?
            </p>
          </div>
          <div className="flex items-center group">
            <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-100 max-w-xs lg:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat lacus laoreet non curabitur gravida.
            </p>
          </div>
        </div>
      </div>
      <p className="p-4 text-center text-sm text-gray-500">12:40 PM</p>
      <div className="flex flex-row justify-end">
        <div className="messages text-sm text-white grid grid-flow-row gap-2">
          <div className="flex items-center flex-row-reverse group">
            <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-500 max-w-xs lg:max-w-md">
              Hey! How are you?
            </p>
          </div>
          <div className="flex items-center flex-row-reverse group">
            <p className="px-6 py-3 rounded-l-full bg-blue-500 max-w-xs lg:max-w-md">
              Shall we go for Hiking this weekend?
            </p>
          </div>
          <div className="flex items-center flex-row-reverse group">
            <p className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-500 max-w-xs lg:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat lacus laoreet non curabitur gravida.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Messenger };
