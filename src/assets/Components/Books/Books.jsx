import Hook from "../Hook";
import Book from "./Book";

const Books = () => {
    const {data} = Hook();
    return (
        <div className="ml-5 mr-5 mt-10 lg:mt-[100px]">
            <h1 className="mb-8 lg:mb-[36px] text-[20px] md:text-[30px] lg:text-[40px] font-bold text-center">Books</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                data.map(cart=><Book key={cart.id}
                    cart={cart}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;