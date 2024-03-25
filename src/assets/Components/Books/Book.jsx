/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Tag from "./Tag";
import { GoStar } from "react-icons/go";

const Book = ({cart}) => {
    const {id,bookName,author,image,rating,category,tags} = cart;
    return (
        <Link to={`./viewBookDetails/${id}`}>
        <div className="card bg-base-100 shadow-xl">
  <figure className="bg-[#F3F3F3] p-7"><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="text-[#23BE0A] flex gap-1">
        {
            tags.map((tag,idx)=> <Tag key={idx} tag={tag}></Tag>)
        }
    </div>
    <h2 className="card-title font-bold">{bookName}</h2>
    <p className="text-[16px] text-[#131313CC]">By : {author}</p>
    <hr className="border-dotted" />
    <div className="flex justify-between items-center text-[16px] text-[#131313CC]">
        <p>{category}</p>
        <div className="flex items-center gap-2">
            <p>{rating}</p>
            <p><GoStar /></p>
        </div>
    </div>

  </div>
</div>
        </Link>
    );
};

export default Book;