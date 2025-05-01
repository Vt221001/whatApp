import React, { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="sticky top-0 z-[100] w-full flex justify-between items-center bg-[#EDFBE2] px-4 py-2 md:px-6 md:py-3 shadow-md">
            <a href="https://kvtmedia.com/wappi" target="_blank" rel="noopener noreferrer" className="border border-[#16563A] text-[#16563A] px-3 py-1.5 text-sm rounded-md hover:bg-[#16563A] hover:text-white transition">
                      
                      <i class="fa-solid fa-chevron-left"></i>  
                         
                          
                    
                  </a>
                <span className="text-3xl font-bold text-[#16563A]">
                
                    Whappi</span>


                {/* Buttons - visible on all screen sizes */}
                <div className="flex space-x-3 items-center">
                    
                    <a href="tel:+918420312021" className="border border-[#16563A] bg-[#16563A] text-white font-bold px-5 py-1.5 text-sm rounded-md hover:bg-[#EDFBE2] hover:text-[#16563A] transition space-x-2">
                       
                    <i class="fa-solid fa-phone-volume"></i><span> Call Us</span>
                       
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;
