const Contact = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[750px] w-[600px]"
          src="https://i.ibb.co/VLcwg6g/ashley-byrd-KVby0-S0-Ga-H4-unsplash.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl card-title">Get in Touch</h2>
        <p>Welcome to Book Vibe, where stories come alive! Whether you are seeking literary <br/> adventures, educational resources, or simply a cozy reading nook, we are here to <br/> serve your bibliophilic needs. Have a question,suggestion, or just want to say hello?<br/> Drop us a line using the form below, or connect with us via phone or email. We love<br/>  hearing from fellow book enthusiasts like you!</p>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <td>Email:</td>
        <td>sharearahammed@gmail.com</td>
      </tr>
      {/* row 2 */}
      <tr className="bg-base-200">
        
        <td>Phone:</td>
        <td>01876523323</td>
      </tr>
      {/* row 3 */}
      <tr className="bg-base-200">
        <td>Address:</td>
        <td>Dhaka,Bangladesh</td>
      </tr>
    </tbody>
  </table>
</div>
<div className="flex flex-col">
    <h1 className="mt-5 mb-9 text-2xl font-bold">Give FeedBack</h1>
    <div className="mb-5">
    <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
    </div>
    <div>
  <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
  </div>

</div>
<div className="card-actions justify-end">
      <button className="btn btn-primary">Send</button>
    </div>
    
      </div>
    </div>
  );
};

export default Contact;
