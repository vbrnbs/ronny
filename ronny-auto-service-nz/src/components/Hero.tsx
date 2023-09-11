import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80)",
      }}
    >
      
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content flex-col">
      <h1 className="text-6xl">Your One-Stop Shop for All Your Car Repair Needs</h1>
      
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Get your appointment now!</h1>
          <p className="mb-5">
          We believe that customer service is our top priority. That's why we offer free estimates, flexible appointment scheduling, and a loaner car if your car needs to stay in the shop overnight.

We're confident that you'll be happy with our services. So why not give us a try today?


Schedule your appointment online or call us today at <strong>0234 5678 </strong>.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
          {/* <Modal /> */}
          <button className="btn btn-primary">
            <Link to="/form">Book Service</Link>
          </button>
          {/* <AddMedia /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
