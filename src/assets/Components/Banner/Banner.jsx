
const Banner = () => {
    return (
        <div className="lg:mt-[48px] rounded-2xl bg-[#1313130D] grid grid-cols-3 lg:p-10">
            <div className="col-span-2 flex flex-col justify-center items-center">
                <h1 className="lg:mb-[48px]  lg:text-[56px] font-bold">Books to freshen <br /> up your bookshelf</h1>
                <div>
                <button className="bg-[#23BE0A] text-white text-[20px] py-3 px-6 rounded-lg">View The List</button>
                </div>
            </div>

            <div>
                <img className="h-[394px] w-[318px]" src="https://i.ibb.co/BgCp1Kf/pngwing-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;