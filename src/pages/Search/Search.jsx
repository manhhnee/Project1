import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div
      className={`flex flex-col self-center relative flex-grow w-desktop-search-page-width bg-[rgb(250,250,250)] outline-[1px solid rgba(0, 0, 0, 0.15)] rounded-2xl transition-all duration-500 ${
        searchValue ? 'shadow-lg scale-105' : ''
      }`}
    >
      <div className="w-full mt-2 focus-within:shadow-md focus-within:rounded-2xl transition-all duration-300">
        <div className={`flex flex-col w-full items-center`}>
          <label className="py-3 px-4  h-[60px] w-full mb-1  flex flex-row z-1  items-center shadow-[0 12px 24px 0 rbga(0, 0, 0, 0.08)]">
            <div className="p-2">
              <IoSearch className="opacity-65 size-5" />
            </div>
            <input
              className="w-full h-full border-b-0 border-l-0 border-r-0 text-start outline-none text-primary-text text-base bg-[rgb(250,250,250)]"
              type="search"
              tabIndex="0"
              placeholder="Tìm kiếm"
              autoComplete="off"
              dir="ltr"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            ></input>
          </label>
        </div>
      </div>
      {searchValue && (
        <div className="w-desktop-search-page-width max-h-[480px] overflow-hidden overflow-y-auto scrollbar-hide">
          <ul className="flex flex-col w-full items-center cursor-pointer flex-grow">
            <li className="py-4 pl-4 flex flex-row w-full border-b-2 last:border-b-0">
              <div className="h-fit pt-1 pb-1 pr-3 relative">
                <img
                  src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/mot-chiec-hinh-nen-vua-dang-yeu-vua-huyen-ao-cho-ban-nu.jpg"
                  alt=""
                  className="w-9 h-9 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-lg text-primary-text">ABCDEF</span>
                </div>
                <div>
                  <span className="text-sm text-zinc-400">Cac thu cac kieu</span>
                </div>
              </div>
            </li>
            <li className="py-4 pl-4 flex flex-row w-full border-b-2 last:border-b-0">
              <div className="h-fit pt-1 pb-1 pr-3 relative">
                <img
                  src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/mot-chiec-hinh-nen-vua-dang-yeu-vua-huyen-ao-cho-ban-nu.jpg"
                  alt=""
                  className="w-9 h-9 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-lg text-primary-text">ABCDEF</span>
                </div>
                <div>
                  <span className="text-sm text-zinc-400">Cac thu cac kieu</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
