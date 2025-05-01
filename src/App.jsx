import React from "react";
import WhatsappBtn from "./whatsappBtn";
import ChatBox from "./chatBox";
import WhatsappLink from "./whatsappLink";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <>
      <Header/>

      {/* Hero Section */}
      <div className="   pt-16 pb-8 text-[#222525] text-base font-medium  w-full flex justify-center">
        <div className="w-full max-w-[1248px] mx-auto px-6 flex justify-center">
          <div className="flex flex-col items-center text-center w-full max-w-[720px]">
            <h1 className="font-bold text-[#1a1a1a] text-3xl sm:text-4xl lg:text-[3.1em] leading-tight">
              Free WhatsApp Chat Button & Widget
            </h1>
            <p className="mt-4 mb-4 text-sm sm:text-base lg:text-lg font-normal">
              Create a beautiful WhatsApp Live Chat Widget and add it to your website for free using our simple WhatsApp button generator.
            </p>
          </div>
        </div>
      </div>


     {/* Generate WhatsApp Button Section */}
<div className="text-[#222525] text-base font-medium leading-6">
  <div className="mb-16 w-full max-w-[1248px] mx-auto px-6">
    <div className=" flex flex-col lg:flex-row gap-6 w-full lg:text-left">
      
      {/* Left Side (Sticky Heading) */}
      <div className="relative md:sticky top-0 md:top-10 z-50 mt-10 w-full max-w-[506px] bg-white p-6 rounded-md h-fit text-center lg:text-start mx-auto">
            <h2 className="font-bold mb-6 text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Generate WhatsApp Button
            </h2>
            <p className="mt-6 mb-6 text-base sm:text-lg leading-relaxed">
              Add WhatsApp Chat to the website in just a few steps. Customize the WhatsApp button on the right and click on the "Generate" button to get the code snippet.
            </p>
      </div>

      {/* Right Side (Form & UI) */}
      <div className="w-full max-w-[720px] flex items-center justify-center mx-auto">
        <div className="w-full max-w-[857px] py-8 px-6 sm:px-10 bg-white shadow-lg rounded-lg text-base font-medium leading-6">
          <WhatsappBtn />
        </div>
      </div>
      
    </div>
  </div>
</div>
      {/* Generate WhatsApp Widget Section */}
      <div className="text-[#222525] text-base font-medium leading-6">
        <div className="mb-16 w-full max-w-[1248px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 w-full text-center lg:text-left">
            {/* Left Side (Heading) */}
            <div className="relative md:sticky top-0 md:top-10 z-50 mt-10 w-full max-w-[506px] bg-white p-6 rounded-md h-fit text-center lg:text-start mx-auto">
              <h2 className="font-bold mb-6 text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Generate WhatsApp Widget
              </h2>
              <p className="mt-6 mb-6 text-base sm:text-lg leading-relaxed">
                Generate a WhatsApp Widget to add to your website in just a few steps. Customize the widget on the right and click on the "Generate" button to get the code snippet.
              </p>
            </div>

            {/* Right Side (Form & UI) */}
            <div className="w-full max-w-[720px] flex justify-center mx-auto">
              <div className="w-full max-w-[857px] py-8 px-6 sm:px-10 bg-white shadow-lg rounded-lg text-base font-medium leading-6">
                <ChatBox />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generate WhatsApp Button Section */}
<div className="text-[#222525] text-base font-medium leading-6">
  <div className="mb-16 w-full max-w-[1248px] mx-auto px-6">
    <div className="flex flex-col lg:flex-row gap-6 w-full text-center lg:text-left">
      
      {/* Left Side (Heading) */}
      <div className="mt-10 w-full max-w-[506px] flex flex-col text-start mx-auto">
        <h2 className="text-center md:text-left font-bold mb-6 text-2xl sm:text-3xl lg:text-4xl leading-tight">
        WhatsApp Link Creator for shareable wa.me chat links
        </h2>
        <p className="mt-6 mb-6 text-base sm:text-lg leading-relaxed">
       <span className="font-extrabold"> Step 1:</span> Enter your country code without the + symbol, followed by the WhatsApp phone number.<br></br><br></br>

       <span className="font-extrabold"> Step 2:</span> Add a pre-filled message (optional).<br></br><br></br>

Click on "Generate WhatsApp Chat Link" button!
        </p>
      </div>

      {/* Right Side (Form & UI) */}
      <div className="w-full max-w-[720px] flex justify-center mx-auto">
        <div className="w-full max-w-[857px] py-8 px-6 sm:px-10 bg-white shadow-lg rounded-lg text-base font-medium leading-6">
          <WhatsappLink />
        </div>
      </div>
      
    </div>
  </div>
</div>
      <Footer/>
    </>
  );
}

export default App;
