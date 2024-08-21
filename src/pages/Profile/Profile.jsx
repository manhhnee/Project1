import { useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsCamera2, BsPencil, BsArrowRepeat } from 'react-icons/bs';

import { MdOutlineModeEditOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Profile() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Thread', content: 'Nội dung của Thread' },
    { title: 'Thread trả lời', content: 'Nội dung của Thread trả lời' },
    { title: 'Bài đăng lại', content: 'Nội dung của Bài đăng lại' },
  ];

  return (
    <div className="w-full h-full overflow-hidden min-h-0 bg-profile-background rounded-2xl rounded-b-none border border-solid border-gray-600 shadow-lg">
      <div className="pt-1">
        <div className="px-8 py-6">
          {/* Header1 */}
          <div className="flex items-center justify-between">
            {/* Name */}
            <div className="flex flex-col items-start justify-center ">
              <div className="mb-1">
                <h1 className="text-3xl font-bold">Nguyễn Đức Mạnh</h1>
              </div>
              <div>
                <span>manh.manh_</span>
              </div>
            </div>
            {/* Avatar */}
            <div className="flex items-center justify-center">
              <img
                className="w-24 h-24 rounded-full object-cover outline outline-[0.5px] outline-outline-image "
                src="https://minhducpc.vn/uploads/images/hinh-cute01.png"
                alt=""
              ></img>
            </div>
          </div>
          {/* Header 2 */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src="https://minhducpc.vn/uploads/images/hinh-cute01.png"
                    alt=""
                    className="w-6 h-6 rounded-full object-cover border-2 border-white"
                  />
                </div>
                <div className="relative -ml-2">
                  <img
                    src="https://minhducpc.vn/uploads/images/hinh-cute01.png"
                    alt=""
                    className="w-6 h-6 rounded-full object-cover border-2 border-white"
                  />
                </div>
              </div>
              <span className="text-sm opacity-70 hover:underline cursor-pointer">5 người theo dõi</span>
            </div>
            <div>
              <Link
                to="https://www.facebook.com/profile.php?id=100015381551638"
                className="text-[24px] cursor-pointer text-purple-1"
              >
                <BsFacebook />
              </Link>
            </div>
          </div>
          <div className="px-2 flex mt-8">
            <button className="w-full border border-solid border-gray-300 flex rounded-xl items-center justify-center px-4 py-1">
              <MdOutlineModeEditOutline className="text-base" />
              <span className="ml-3 text-base text-black font-bold">Chỉnh sửa trang cá nhân</span>
            </button>
          </div>
        </div>
        <div className="w-full">
          {/* Tabs */}
          <div className="flex justify-between items-center border-b border-gray-300">
            <div className="flex space-x-6 w-full">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`pb-2 font-bold w-1/3 text-center ${
                    activeTab === index ? 'border-b-2 border-black text-black' : 'text-gray-400'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Slider */}
          <div className="relative w-full h-48 mt-4 overflow-hidden">
            <div
              className="absolute top-0 left-0 flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${activeTab * 100}%)` }}
            >
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 h-48 flex items-center justify-center  rounded-lg p-4 shadow-md"
                >
                  {tab.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
