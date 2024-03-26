import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Hook from "../Hook";
import ReadBook from "./ReadBook";
import WishListBook from "./WishListBook";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
  // const {data} = Hook();
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="mt-[36px] ">
      <h1 className="mb-[32px] bg-[#1313130D] py-[20px] rounded-lg text-center text-[28px] font-bold">
        Books
      </h1>
      <div className="flex justify-center">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white">
            <div className="flex py-2 gap-3 text-[18px]">
              <p>Sort By</p>
              <p><IoIosArrowDown /></p>
            </div>
            
            </summary>
          
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadBook></ReadBook>
        </TabPanel>

        <TabPanel>
          <WishListBook></WishListBook>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
