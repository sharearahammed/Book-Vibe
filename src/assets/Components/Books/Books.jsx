import Hook from "../Hook";
import Book from "./Book";

const Books = () => {
    const {data,loading} = Hook();
    return (
        <div>
            {
                data.map(cart=><Book key={cart.id}
                    cart={cart}></Book>)
            }
        </div>
    );
};

export default Books;