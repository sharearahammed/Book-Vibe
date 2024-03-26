import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Hook from "../Hook";
import ReadBook from "./ReadBook";
import WishListBook from "./WishListBook";

const ListedBooks = () => {
    // const {data} = Hook();
    const [tabIndex, setTabIndex] = useState(0);
    return (
        
        <div className="mt-[36px] ">
            <h1 className="mb-[32px] bg-[#1313130D] py-[20px] rounded-lg text-center text-[28px] font-bold">Books</h1>
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