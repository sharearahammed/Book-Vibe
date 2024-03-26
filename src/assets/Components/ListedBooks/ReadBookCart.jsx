/* eslint-disable react/prop-types */
import { IoPeople } from "react-icons/io5";
import { MdContactPage } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const ReadBookCart = ({readBook}) => {
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = readBook;
    return (
        <div className="grid grid-cols-3 border p-4  rounded-lg">
            <div className="flex justify-center bg-[#1313130D] px-0 py-5 rounded-lg lg:h-[229px] lg:w-[230px]">
                <img src={image} alt="" />
            </div>
            <div className="col-span-2">
                <h1 className="mb-[16px] text-[24px] font-bold">{bookName}</h1>
                <p className="mb-[16px] text-[#131313CC]">By: {author}</p>
                <p className="font-bold mb-[16px] flex gap-4">Tag {
                    tags && tags.map((tag,idx)=> <p className="bg-[#328EFF26] text-[#23BE0A] py-1 px-3 rounded-3xl" key={idx}>#{tag}</p>)
                    }
                    <div className="flex items-center gap-[8px] text-[#131313CC] font-light ">
                        <p className="text-[20px]"><FiMapPin /></p>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    </p>
                <div className="mb-[16px] flex gap-[16px] text-[#13131399]">
                    <div className="flex justify-center items-center gap-[8px]">
                        <p className="text-[20px]"><IoPeople /></p>
                        <p>Publisher: {publisher}</p>
                    </div>

                    <div className="flex justify-center items-center gap-[8px]">
                        <p className="text-[20px]"><MdContactPage /></p>
                        <p>Page {totalPages}</p>
                    </div>
                </div>
                <hr />
                <div className="mt-[16px] flex gap-[12px]">
                    <div className="bg-[#328EFF26] py-2 px-4 rounded-3xl text-[#328EFF]"><p>Category: {category}</p></div>

                    <div className="bg-[#FFAC3326] py-2 px-4 rounded-3xl text-[#FFAC33]"><p>Rating: {rating}</p></div>

                    <div className="bg-[#23BE0A] py-2 px-4 rounded-3xl text-[#FFFFFF]"><button>View Details</button></div>
                </div>
            </div>
        </div>
    );
};

export default ReadBookCart;