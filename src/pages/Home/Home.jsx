import { Link } from 'react-router-dom';

import { BsChat, BsHeart, BsRepeat, BsSend } from 'react-icons/bs';

function Home() {
  const images = [
    'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/04/hinh-nen-doremon-cho-dien-thoai-an-banh.jpg.webp',
    'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/04/hinh-nen-doremon-cho-dien-thoai-an-banh.jpg.webp',
    'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/04/hinh-nen-doremon-cho-dien-thoai-an-banh.jpg.webp',
  ];

  const images1 = [
    'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/04/hinh-nen-doremon-cho-dien-thoai-an-banh.jpg.webp',
  ];

  return (
    <div className="flex flex-col relative flex-grow">
      <div className="flex flex-col pt-3 pb-3 cursor-pointer relative border-b border-gray-300">
        {/* Header */}
        <div className="flex">
          <Link to="/home">
            <img
              src="https://cdn.mobilecity.vn/mobilecity-vn/images/2024/04/hinh-nen-doremon-cho-dien-thoai-an-banh.jpg.webp"
              alt="avatar"
              className="h-11 w-11 rounded-full"
            ></img>
          </Link>
          <div className="flex gap-2 items-center">
            <Link to="/home" className=" ml-5 text-lg hover:underline">
              <span>Anh em tao ba cao</span>
            </Link>
            <span className=" text-sm text-zinc-400">100 hours</span>
          </div>
        </div>
        {/* Container */}
        <div className="flex flex-col pt-3 max-w-[524px] pl-16">
          <div className="text-[.9375rem] mt-1">
            <span className="font-normal text-base">たんぽぽのワタ芸 外が暑すぎるのでテーブルフォト</span>
          </div>
          <div className="mt-2 overflow-x-auto scrollbar-hide">
            <div className="grid grid-flow-col auto-cols-max gap-4">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`image-${index}`}
                  className={`rounded-2xl ${images.length === 1 ? 'w-[430px] h-[430px]' : 'w-[230px] h-[230px]'}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Action */}
        <div className="mt-4 pl-16">
          <div className="flex w-10 h-9 gap-4">
            <div className="flex justify-center items-center rounded-full px-1  transition-transform duration-300 transform hover:scale-125">
              <BsHeart className="text-2xl" />
            </div>
            <div className="flex justify-center items-center rounded-full px-1  transition-transform duration-300 transform hover:scale-125">
              <BsChat className="text-2xl" />
            </div>
            <div className="flex justify-center items-center rounded-full px-1  transition-transform duration-300 transform hover:scale-125">
              <BsRepeat className="text-2xl" />
            </div>
            <div className="flex justify-center items-center rounded-full px-1  transition-transform duration-300 transform hover:scale-125">
              <BsSend className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-3 pb-3 cursor-pointer relative border-b border-gray-300">
        <div className="flex">
          <Link to="/home">
            <img
              src="https://cdn.mobilecity.vn/mobilecity-vn/images/2024/04/hinh-nen-doremon-cho-dien-thoai-an-banh.jpg.webp"
              alt="avatar"
              className="h-11 w-11 rounded-full"
            ></img>
          </Link>
          <div className="flex gap-2 items-center">
            <Link to="/home" className=" ml-5 text-lg hover:underline">
              <span>Anh em tao ba cao</span>
            </Link>
            <span className=" text-sm text-zinc-400">100 hours</span>
          </div>
        </div>
        <div className="flex flex-col pt-3 max-w-[524px] pl-16">
          <div className="text-[.9375rem] mt-1">
            <span className="font-normal text-base">たんぽぽのワタ芸 外が暑すぎるのでテーブルフォト</span>
          </div>
          <div className="mt-2 overflow-x-auto scrollbar-hide">
            <div className="grid grid-flow-col auto-cols-max gap-4">
              {images1.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`image-${index}`}
                  className={`rounded-2xl ${images1.length === 1 ? 'w-[430px] h-[430px]' : 'w-[230px] h-[230px]'}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Action */}
        <div className="mt-4 pl-16">
          <div className="flex w-10 h-9 gap-4">
            <div className="flex justify-center items-center rounded-full px-1 transition-transform duration-300">
              <div className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125">
                <BsHeart className="text-2xl" />
              </div>
              <span className="ml-2 text-[14px] text-gray-500">240</span>
            </div>
            <div className="flex justify-center items-center rounded-full px-1 transition-transform duration-300">
              <div className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125">
                <BsChat className="text-2xl" />
              </div>
              <span className="ml-2 text-[14px] text-gray-500">240</span>
            </div>
            <div className="flex justify-center items-center rounded-full px-1 transition-transform duration-300">
              <div className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125">
                <BsRepeat className="text-2xl" />
              </div>
              <span className="ml-2 text-[14px] text-gray-500">240</span>
            </div>
            <div className="flex justify-center items-center rounded-full px-1 transition-transform duration-300">
              <div className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125">
                <BsSend className="text-2xl" />
              </div>
              <span className="ml-2 text-[14px] text-gray-500">240</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
