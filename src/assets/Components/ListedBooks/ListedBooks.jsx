import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
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
            <p>Read Books</p>
        </TabPanel>
        
        <TabPanel>
            <p>Wishlist Books</p>
        </TabPanel>
        
      </Tabs>
    </div>
    );
};

export default ListedBooks;