import Hook from "../Hook";
import Book from "./Book";

const Books = () => {
    const {data,loading} = Hook();
    return (
        <div className="mt-[100px]">
            <h1 className="mb-[36px] text-[40px] font-bold text-center">Books</h1>
            <div className="grid grid-cols-3 gap-5">
            {
                data.map(cart=><Book key={cart.id}
                    cart={cart}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;