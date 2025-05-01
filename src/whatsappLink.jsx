import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";


function whatsappLink() {
    let [count, setCount] = useState(0);
  
    const [buttonColor, setButtonColor] = useState("#16BE45");
        const [ctaText, setCtaText] = useState("WhatsApp Us");
        const [colorScheme, setColorScheme] = useState("light");
        const [marginBottom, setMarginBottom] = useState("20");
        const [marginLeft, setMarginLeft] = useState("20");
        const [marginRight, setMarginRight] = useState("20");
        const [cornerRadius, setCornerRadius] = useState("40");
        const [zIndex, setZIndex] = useState("999999");
        const [btnPosition , setBtnPosition] = useState("right");
        const [mobileNumber, setMobileNumber] = useState("");
        const [message , setMessage] = useState("Hello");
        const [messagrPrint, setMessagePrint] = useState("Your requested changes have been implemented in the code. You can now copy it.");
    
        const [buttonColorChange, setButtonColorChange] = useState(buttonColor);
        const [ctaTextChange, setCtaTextChange] = useState(ctaText);
        const [colorSchemeChange, setColorSchemeChange] = useState(colorScheme);
        const [marginBottomChange, setMarginBottomChange] = useState(marginBottom);
        const [marginLeftChange, setMarginLeftChange] = useState(marginLeft);
        const [marginRightChange, setMarginRightChange] = useState(marginRight);
        const [cornerRadiusChange, setCornerRadiusChange] = useState(cornerRadius);
        const [zIndexChange, setZIndexChange] = useState(zIndex);
        const [btnPositionChange, setBtnPositionChange] = useState(btnPosition);
        const [mobileNumberChange, setMobileNumberChange] = useState(mobileNumber);
        const [messageChange, setMessageChange] = useState(message);
        const [error, setError] = useState("");
        const [showCode, setShowCode] = useState(false); 

        const qrRef = useRef(null);


        const handleButtonClick = () => {
            setButtonColorChange(buttonColor); 
            setCtaTextChange(ctaText);
            setColorSchemeChange(colorScheme);
            setMarginBottomChange(marginBottom);
            setMarginLeftChange(marginLeft);
            setMarginRightChange(marginRight);
            setCornerRadiusChange(cornerRadius);
            setZIndexChange(zIndex);
            setBtnPositionChange(btnPosition);
            setMobileNumberChange(mobileNumber);
            setMessageChange(message);
            setCount(count+1);
            if (!mobileNumber.trim()) {
                setError(" Phone number is required!");
                return;
            }
            
            if(count>=1){
                setMessagePrint(`Your changes have been updated again [${count}] times`);
            }
            else{
                setMessagePrint("Your requested changes have been implemented in the code. You can now copy it.")
            }
            setError("");
            setShowCode(true);
        };
        
        const downloadQRCode = () => {
            if (qrRef.current) {
              html2canvas(qrRef.current, {
                useCORS: true,
                backgroundColor: "#ffffff", // Clean white bg
                scale: 2, // High quality
              }).then((canvas) => {
                const link = document.createElement("a");
                link.download = "whatsapp_qr.png";
                link.href = canvas.toDataURL("image/png");
                link.click();
              }).catch((err) => {
                console.error("Failed to download:", err);
              });
            }
          };
          
    
        /* function downloadQR() {
            const downloadBtn = document.getElementById('downloadButton');
            downloadBtn.style.display = 'none';
      
            const qrCard = document.getElementById('qrCard');
            html2canvas(qrCard, {
              useCORS: true,
              scale: 2
            }).then(function(canvas) {
              const link = document.createElement('a');
              link.download = 'whatsapp_qr.png';
              link.href = canvas.toDataURL('image/png');
              link.click();
              downloadBtn.style.display = 'inline-block';
            }).catch(function(error) {
              console.error('Error generating image:', error);
              downloadBtn.style.display = 'inline-block';
            });
          } */

        const copyToClipboard = () => {
            const chatLink = `https://wa.me/${mobileNumber}?text=${encodeURIComponent(message)}`;
        
            navigator.clipboard.writeText(chatLink)
                .then(() => alert("Code copied to clipboard! ✅"))
                .catch((err) => console.error("Failed to copy:", err));
        };

    return (
        <>  
            {/* WhatsApp Button Preview */}
            <h1 className="my-[25px] text-[#000] text-[20px] font-bold box-border text-left">
            Create your WhatsApp Chat Link
                </h1>
                

                <div className="box-border block text-left text-[16px] font-[500] leading-[24px] flex-wrap">
                


                {/* Third Row */}
                <div className=" flex flex-col mt-[32px] text-left text-[#222525] space-y-[14px]">
                    <label className="mb-[6px] text-[#000] text-[16px] box-border font-[700] block leading-[24px]">
                        Your Phone Number
                    </label>
                    <p className=" font-[400] text-[15px] text-[#828282] leading-[18px] max-w-[100%]">
                    Include country code with + symbol. Eg. if country code is +91 and WhatsApp number is 1234567890, then type 911234567890 below.
                    </p>
                    <input 
                        type="number"
                        value={mobileNumber}
                        placeholder="your phone number"
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-[168px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border" required
                    />

                    
                </div>
                <span>{error && <p className="text-red-500 text-[14px]">{error}</p>}</span>
                <div className=" flex flex-col mt-[32px] text-left text-[#222525] space-y-[14px]">
                    <label className="mb-[6px] text-[#000] text-[16px] box-border font-[700] block leading-[24px]">
                        Welcome Message (optional)
                    </label>

                    <p className=" font-[400] text-[15px] text-[#828282] leading-[18px] max-w-[100%]">
                        Automatically include this text when a user clicks on your chat link, making it easier to start a conversation.
                    </p>

                    <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className=" font-[400] text-[15px] text-[#828282] leading-[18px] border border-[#d9d9d9] 
                                bg-[#fff] h-[81px] py-[9px] px-[12px] box-border w-full min-w-[280px] sm:w-[250px] md:w-[300px] 
                                lg:w-[350px]"
                    >
                    </textarea>
                </div> 

                
                <div className="box-border block text-left text-[16px] font-[500] leading-[24px] flex-wrap">
                <button 
                    className="py-[9px] px-[15px] bg-[#0135AF] hover:bg-[#004CFF] transition-all text-[#fff] text-[14px] mt-[32px] border-none shadow-md rounded-[4px] cursor-pointer"
                    onClick={handleButtonClick}  
                >
                    Generate WhatsApp Chat Link + QR Code
                </button>

                
                {showCode && (
                    <div className="block mt-[32px] text-[16px] font-[500] leading-[24px] text-left text-[#222525] space-y-[14px] box-border ">
                        <p className="text-[14px] border border-[#1b6a21] text-center text-[#1b6a21] mt-[40px] box-border mb-[24px] font-[500] block leading-[24px] bg-[#d0eed2] p-3">
                            {messagrPrint}
                        </p>
                        
                        <div className=" flex flex-col mt-[32px] text-left text-[#222525] space-y-[14px]">
                    <label className="mb-[6px] text-[#000] text-[16px] box-border font-[700] block leading-[24px]">
                    Your WhatsApp Click-To-Chat Link
                    </label>
                    <input 
                        type="text"
                        value={`https://wa.me/${mobileNumber}?text=${encodeURIComponent(message)}`} readOnly
                        className="w-[100%] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border"
                    />
                    
                    </div> 

                


                        <div className="flex flex-col md:flex-row justify-between items-center ">
                        <button className="mt-[16px] w-[100%] h-[32px] bg-[#fff] border-1 border-[#d9d9d9] box-border shadow-2xl rounded-[4px] text-[rgb(0 0 0 / 65%)]  mr-[16px] text-[14px] flex items-center justify-center space-x-3 cursor-pointer overflow-visible text-center"
                        onClick={copyToClipboard}
                        >
                            <i className="fa-solid fa-copy overflow-hidden box-border inline-block "></i>
                            <span>Copy to clipboard</span>
                        </button>
                        <button className="mt-[16px] w-[100%] h-[32px] bg-[#16563A] border-1 border-[#d9d9d9] box-border shadow-2xl rounded-[4px] text-[#fff] mr-[16px] text-[14px] flex items-center justify-center space-x-3 cursor-pointer overflow-visible text-center" onClick={() => window.open(`https://wa.me/${mobileNumber}?text=${encodeURIComponent(message)}`, "_blank")}>
                        <i className="fa-brands fa-whatsapp"></i>
                            <span>Open in Whatsapp</span></button> 
                        </div>
                        <hr className="mt-[30px]" />

                        <div className=" flex flex-col mt-[32px] text-center text-[#222525] space-y-[14px]">
                    
                        <div ref={qrRef} className="bg-white rounded-2xl p-6 shadow-md w-[fit-content] mx-auto text-center">
  <p className="text-[#16563A] text-[16px] font-semibold mb-4">
    Scan this QR to chat on WhatsApp
  </p>
  <div className="flex justify-center">
    <QRCodeCanvas
      value={`https://wa.me/${mobileNumber}?text=${encodeURIComponent(message)}`}
      size={200}
      includeMargin={true}
    />
  </div>
  <p className="text-[#4B5563] text-[14px] mt-4">
    https://wa.me/{mobileNumber}?text={message}
  </p>
</div>

<button
  onClick={downloadQRCode}
  className="mt-4 px-4 py-2 border-1 border-blue-500  text-blue-500 rounded shadow flex items-center justify-center space-x-3 cursor-pointer"
>
<i class="fa-solid fa-download"></i> <span>Download QR Code</span>
  
</button>

                    </div> 

                    </div>
                    
                    
                )}
            </div>
            </div>

            
        </>
    );
}

export default whatsappLink;
