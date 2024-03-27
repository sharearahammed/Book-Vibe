/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Tag from "./Tag";
import { GoStar } from "react-icons/go";

const Book = ({cart}) => {
    const {id,bookName,author,image,rating,category,tags} = cart;
    return (
        <Link to={`./viewBookDetails/${id}`}>
        <div className="transition-all duration-700 lg:hover:scale-105 lg:hover:border-blue-500 hover:shadow-2xl lg:w-[374px] lg:p-6 radious-lg border rounded-lg">

        <div className="lg:h-[481px]">
  <div className="bg-[#F3F3F3] p-7 rounded-lg flex justify-center"><img className="p-6 rounded-lg" src={image} alt="Shoes" /></div>
  <div className="card-body">
    <div className="text-[#23BE0A] flex gap-1">
        {
            tags.map((tag,idx)=> <Tag key={idx} tag={tag}></Tag>)
        }
    </div>
    <h2 className="font-bold">{bookName}</h2>
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

        </div>
        </Link>
    );
};

export default Book;