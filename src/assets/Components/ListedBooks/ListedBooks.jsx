import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import ReadBook from "./ReadBook";
// import WishListBook from "./WishListBook";
import { IoIosArrowDown } from "react-icons/io";
import Hook from "../Hook";
import { getReadStoredBook } from "../../Utilities/Utilities";
import ReadBookCart from "./ReadBookCart";
import { getWishListStoredBook } from "../../Utilities/wishlist";
import WishlistCart from "./WishlistCart";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  const { data } = Hook();
  // console.log(data)
  const [showDisplayRead, setDisplayShowRead] = useState([]);
  const [showDisplayWish, setDisplayShowWish] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  // .......................Handle Read List Function Start................................
  const handleClick = () => {
    setDisplayShowRead(readBooks);
  };

  const handleRating = () => {
    const storeRead = getReadStoredBook();
    const newStoredReadListBook = [];
    for (const id of storeRead) {
      const book = data.find((item) => item.id === id);
      if (book) {
        newStoredReadListBook.push(book);
      }
    }
    const ratings = newStoredReadListBook.sort((a, b) => b.rating - a.rating);
    setDisplayShowRead(ratings);
    console.log(ratings);
  };

  const handleNumberOfPages = () => {
    const storeRead = getReadStoredBook();
    const newStoredReadListBook = [];
    for (const id of storeRead) {
      const book = data.find((item) => item.id === id);
      if (book) {
        newStoredReadListBook.push(book);
      }
    }
    const numberOfPages = newStoredReadListBook.sort(
      (a, b) => b.totalPages - a.totalPages
    );
    setDisplayShowRead(numberOfPages);
    console.log(numberOfPages);
  };

  const handlePublishYear = () => {
    const storeRead = getReadStoredBook();
    const newStoredReadListBook = [];
    for (const id of storeRead) {
      const book = data.find((item) => item.id === id);
      if (book) {
        newStoredReadListBook.push(book);
      }
    }
    const publishYear = newStoredReadListBook.sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    setDisplayShowRead(publishYear);
    console.log(publishYear);
  };

  // .......................Handle Read List Function End................................

  // .....................................Hanndle Wish List Function Start...............................
  const handleClickWish = () => {
    setDisplayShowWish(wishListBooks);
  };

  const handleWishListRating = () => {
    const storewishList = getWishListStoredBook();
    const newStoredWishListBook = [];
    for (const id of storewishList) {
      const book = data.find((item) => item.id === id);
      if (book) {
        newStoredWishListBook.push(book);
      }
    }
    const ratings = newStoredWishListBook.sort((a, b) => b.rating - a.rating);
    setDisplayShowWish(ratings);
  };

  const handleWishListNumberOfPages = () => {
    const storewishList = getWishListStoredBook();
    const newStoredWishListBook = [];
    for (const id of storewishList) {
      const book = data.find((item) => item.id === id);
      if (book) {
        newStoredWishListBook.push(book);
      }
    }
    const numberOfPages = newStoredWishListBook.sort(
      (a, b) => b.totalPages - a.totalPages
    );
    setDisplayShowWish(numberOfPages);
  };

  const handleWishListPublishYear = () => {
    const storewishList = getWishListStoredBook();
    const newStoredWishListBook = [];
    for (const id of storewishList) {
      const book = data.find((item) => item.id === id);
      if (book) {
        newStoredWishListBook.push(book);
      }
    }
    const publishYear = newStoredWishListBook.sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    setDisplayShowWish(publishYear);
  };
  // .....................................Hanndle Wish List Function End...............................

  // ............................................ReadBook Start............................................
  const [readBooks, setReadBooks] = useState([]);
  // const [displayBooks,setDisplayBooks] = useState([]);

  useEffect(() => {
    const storedReadBook = getReadStoredBook();
    if (data.length > 0) {
      const newStoredReadBook = [];
      for (const id of storedReadBook) {
        const book = data.find((item) => item.id === id);
        if (book) {
          newStoredReadBook.push(book);
        }
      }
      setReadBooks(newStoredReadBook);
      setDisplayShowRead(newStoredReadBook);
    }
  }, [data]);
  // ..........................................ReadBook End..............................................

  // ............................................WishList Start............................................

  const [wishListBooks, setWishListBooks] = useState([]);
  useEffect(() => {
    const storedWishListBook = getWishListStoredBook();
    if (data.length > 0) {
      const newStoredWishListBook = [];
      for (const id of storedWishListBook) {
        const book = data.find((item) => item.id === id);
        if (book) {
          newStoredWishListBook.push(book);
        }
      }
      setWishListBooks(newStoredWishListBook);
      setDisplayShowWish(newStoredWishListBook);
    }
  }, [data]);
  // ..............................................WishList End.......................................

  return (
    <div className="mt-[36px] ">
      <Helmet>
        <title>Book Vibe List of Books</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <h1 className="mb-[32px] bg-[#1313130D] py-[20px] rounded-lg text-center text-[28px] font-bold">
        Books
      </h1>
      <div className="flex justify-center">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white">
            <div className="flex py-2 gap-3 text-[18px]">
              <p>Sort By</p>
              <p>
                <IoIosArrowDown />
              </p>
            </div>
          </summary>

          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li
              onClick={() => {
                handleClick();
                handleClickWish();
              }}
            >
              <a>See all</a>
            </li>
            <li
              onClick={() => {
                handleRating();
                handleWishListRating();
              }}
            >
              <a>Rating</a>
            </li>
            <li
              onClick={() => {
                handleNumberOfPages();
                handleWishListNumberOfPages();
              }}
            >
              <a>Number of Pages</a>
            </li>
            <li
              onClick={() => {
                handlePublishYear();
                handleWishListPublishYear();
              }}
            >
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
          {/* <ReadBook></ReadBook> */}
          <div className="md:p-5 md:flex md:flex-col">
            <div className="mt-[32px] flex flex-col gap-[24px]">
              {showDisplayRead.map((readBook) => (
                <ReadBookCart
                  key={readBook.id}
                  readBook={readBook}
                ></ReadBookCart>
              ))}
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          {/* <WishListBook></WishListBook> */}
          <div className="md:p-5 md:flex md:flex-col">
            <div className="mt-[32px] flex flex-col gap-[24px]">
              {showDisplayWish.map((wishlist) => (
                <WishlistCart
                  key={wishlist.id}
                  wishlist={wishlist}
                ></WishlistCart>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
