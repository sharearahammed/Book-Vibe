import { Link, useNavigate, useParams } from "react-router-dom";
import Hook from "../Hook";
import { useContext, useEffect, useState } from "react";
import { saveReadBooks } from "../../Utilities/Utilities";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveWishListBooks } from "../../Utilities/wishlist";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Authconfiguration/AuthConfiguration";


const ViewBookDetails = () => {
  const {user} = useContext(AuthContext)
  const { data } = Hook();
  const { id } = useParams();
  const intId = parseInt(id);

  const navigate = useNavigate();
  const handleclick = () => {
    navigate(-1);
  };

  const [singleBooks, setSingleBooks] = useState({});
  useEffect(() => {
    const singleData = data.find((item) => item.id === intId);
    // console.log(singleData);
    setSingleBooks(singleData);
  }, [data, intId]);

  const handleRead = () => {
    saveReadBooks(intId);
  };

  const handleWishList = () => {
    saveWishListBooks(intId);
  };

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBooks || {};

  return (
    <div className="grid lg:grid-cols-2 mt-[60px] p-5 lg:p-10">

      <Helmet>
        <title>Book Vibe View Book Details</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="lg:flex lg:justify-center lg:items-center bg-[#1313130D] p-7 lg:p-10 rounded-lg lg:w-[460px]">
        <img className="lg:h-[564px] lg:w-[700px]" src={image} alt="" />
      </div>
      <div>
        <h1 className="mb-[16px] text-[20px] lg:text-[40px] font-bold">
          {bookName}
        </h1>
        <p className="mb-[23px] text-[15px] lg:text-[20px] text-[#131313CC] font-semibold">
          By: {author}
        </p>
        <hr />
        <p className="my-[16px] text-[15px] lg:text-[20px] text-[#131313CC]">
          {category}
        </p>
        <hr />
        <p className="my-[24px] text-[#131313] font-bold">
          Review : <span className="font-light">{review}</span>
        </p>
        <ul className="flex items-center gap-1 lg:gap-4 mb-[24px]">
          <p>Tags</p>
          <p className="flex gap-4 text-[#23BE0A] ">
            {tags &&
              tags.map((item) => (
                <li
                  className="bg-[#23BE0A0D] text-center px-5 py-2 rounded-xl"
                  key={item}
                >
                  {item}
                </li>
              ))}
          </p>
        </ul>
        <hr />
        <div className="mt-[24px] mb-[32px]">
          <div className="grid grid-cols-2 lg:grid-cols-3 mb-[12px]">
            <p className="text-[#131313B3]">Number of Pages:</p>
            <p className="font-bold">{totalPages}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 mb-[12px]">
            <p className="text-[#131313B3]">Publisher:</p>
            <p className="font-bold">{publisher}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 mb-[12px]">
            <p className="text-[#131313B3]">Year of Publishing:</p>
            <p className="font-bold">{yearOfPublishing}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <p className="text-[#131313B3]">Rating:</p>
            <p className="font-bold">{rating}</p>
          </div>
        </div>
        <div className="flex gap-5">
          {
            user ? <button
            onClick={() => handleRead()}
            className="hover:bg-emerald-200 border px-5 py-3 rounded-lg font-bold"
          >
            Read
          </button>
          :
          <Link to={'/login'}>
          <button
            className="hover:bg-emerald-200 border px-5 py-3 rounded-lg font-bold"
          >
            Read
          </button>
          </Link>
          }
          {
            user ? <button
            onClick={() => handleWishList()}
            className="hover:bg-green-400 bg-[#50B1C9] text-white py-3 px-7 rounded-lg font-bold"
          >
            Wishlist
          </button>
          :
          <Link to={'/login'}>
          <button
            className="hover:bg-green-400 bg-[#50B1C9] text-white py-3 px-7 rounded-lg font-bold"
          >
            Wishlist
          </button>
          </Link>
          }
          <button
            onClick={() => handleclick()}
            className="hover:bg-zinc-300 border px-5 py-3 rounded-lg font-bold"
          >
            Go Back
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ViewBookDetails;
