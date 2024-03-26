import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mt-4 lg:mt-[48px] rounded-2xl bg-[#1313130D] grid grid-cols-3 lg:p-10">
            <div className="col-span-2 flex flex-col justify-center items-center">
                <h1 className="lg:mb-[48px] md:text-[30px] lg:text-[56px] font-bold">Books to freshen <br /> up your bookshelf</h1>
                <div>
                <Link to={"./listedbooks"}>
                <button className="bg-[#23BE0A] text-white md:text-[20px] lg:text-[20px] p-1 md:p-3 lg:py-3 lg:px-6 rounded-lg">View The List</button></Link>
                </div>
               
            </div>

            <div className="">
                <p><img className="h-[140px] w-[300px] md:h-[300px] lg:h-[394px] lg:w-[318px]" src="https://i.ibb.co/BgCp1Kf/pngwing-1.jpg" alt="" /></p>
            </div>
        </div>
    );
};

export default Banner;