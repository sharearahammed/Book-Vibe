
const About = () => {
    return (
        <div className="bg-[#1313130D] rounded-xl p-10 mt-5">
            <div className="mb-9">
            <h1 className="text-center font-bold lg:font-extrabold text-[20px] lg:text-[40px]">Welcome to our Book Store!</h1>
            </div>

            <div>

            <div className="mb-10 grid lg:grid-cols-2 justify-center items-center">
            <p className="text-[#131313B3] text-center lg:text-left lg:text-lg">
                At our book store, we are passionate about bringing the joy of reading to our community. 
                Whether you're a bookworm or just looking for your next great read, we have something 
                for everyone. With a wide selection of genres, from classics to contemporary fiction, 
                non-fiction, and children's books, there's bound to be a book that captures your interest.
            </p>
            <p>
                <img className="rounded-lg lg:h-[300px] lg:w-[500px]" src="https://i.ibb.co/TrHjRSK/about-us.jpg" alt="" />
            </p>

            </div>
            
            <div className="mb-10 grid lg:grid-cols-2 justify-center items-center">
                <p>
                    <img className="rounded-lg lg:h-[300px] lg:w-[500px]" src="https://i.ibb.co/9Z7SHdd/image.jpg" alt="" />
                </p>

                <p className="text-[#131313B3] lg:text-lg text-center lg:text-right">
                Our knowledgeable staff is always on hand to offer recommendations and assist you in 
                finding the perfect book. We also host author events, book clubs, and other literary 
                gatherings to foster a love of reading and create a vibrant literary community.
            </p>
            </div>

            <div className="mb-10 flex flex-col justify-center items-center">
            <p className="mb-5">
                <img className="rounded-lg lg:h-[300px] lg:w-[500px]" src="https://i.ibb.co/b2FP4Hy/thank-you.jpg" alt="" />
            </p>
            <p className="text-[#131313B3] text-lg text-center">
                Thank you for choosing our bookstore. We look forward to sharing our love of books 
                with you and helping you discover your next favorite story.
            </p>
            
            </div>
            
            </div>
        </div>
    );
};

export default About;