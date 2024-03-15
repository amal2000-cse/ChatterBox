import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    // <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 '>
    <div className="flex sm:h-[450px] md:h-[450px] rounded-lg overflow-hidden bg-gray-500 ">
      <Sidebar />
      <div className="w-0.5 bg-black text-transparent">a</div>

      <MessageContainer />
    </div>
  );
};
export default Home;
