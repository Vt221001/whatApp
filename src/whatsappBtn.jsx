import React, { useState } from "react";
import BtnStyle from "./BtnStyle";
import BtnAnimation from "./BtnAnimation";


function whatsappBtn() {
    let [count, setCount] = useState(0);
    const [selectedStyle, setSelectedStyle] = useState({
        name: "WhatsApp with CTA Green",
      className: "bg-[#16BE45] text-white",
      text: "WhatsApp Us",
      color: "#16BE45",
      });

      const [selectedAnimate, setSelectedAnimate] = useState({
        name: "off", className: "", style: {}
      });
      
    const [buttonColor, setButtonColor] = useState("");
        const [ctaText, setCtaText] = useState("");
        const [colorScheme, setColorScheme] = useState("light");
        const [marginBottom, setMarginBottom] = useState("20");
        const [marginLeft, setMarginLeft] = useState("20");
        const [marginRight, setMarginRight] = useState("20");
        const [cornerRadius, setCornerRadius] = useState("40");
        const [zIndex, setZIndex] = useState("999999");
        const [btnPosition , setBtnPosition] = useState("left");
        const [mobileNumber, setMobileNumber] = useState("");
        const [message , setMessage] = useState("Hello");
        const [messagrPrint, setMessagePrint] = useState("Your requested changes have been implemented in the code. You can now copy it.");

        const [selectedAnimateChange, setSelectedAnimateChange] = useState(selectedAnimate.className);
        const [selectedStyleChange, setSelectedStyleChange] = useState(selectedStyle.text , selectedStyle.color);
        const [buttonColorChange, setButtonColorChange] = useState(selectedStyle.color);
        const [ctaTextChange, setCtaTextChange] = useState(ctaText || selectedStyle.text);
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


        const handleButtonClick = () => {
            setSelectedAnimateChange(selectedAnimate.className);
            setSelectedStyleChange(selectedStyle.text , selectedStyle.color);
            setButtonColorChange(selectedStyle.color); 
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
                setError("Phone number is required!");
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

        // useEffect(() => {
        //     setButtonColor(selectedStyle.color);
        // }, [selectedStyle]);
    
        const copyToClipboardBtn = () => {
            const codeText = `
            <script async src='https://nayavision.com/wappi-assets/wappi.js'></script>
        <script>
            var wa_btnSetting = {
            "BtnAnimation":"${selectedAnimateChange}",
                "btnStyle":"${selectedStyleChange}",
                "btnColor":"${buttonColorChange}",
                "ctaText":"${ctaText || selectedStyle.text}",
                "cornerRadius":${cornerRadiusChange},
                "marginBottom":${marginBottomChange},
                "marginLeft":${marginLeftChange},
                "marginRight":${marginRightChange},
                "btnPosition":"${btnPositionChange}",
                "whatsAppNumber":"${mobileNumberChange}",
                "welcomeMessage":"${messageChange}",
                "zIndex":${zIndexChange},
                "btnColorScheme":"${colorSchemeChange}"
            };
            window.onload = () => {
                _waEmbed(wa_btnSetting);
                let observer = new MutationObserver((mutations, obs) => {
            let btnWrapper = document.querySelector("#wa_btn-content");
            if (btnWrapper) {
                console.log("WhatsApp button detected! Adding class...");
                btnWrapper.classList.add("${selectedAnimateChange}");
                obs.disconnect(); // Milne ke baad observer ko stop kar do
            }
        });
    
        observer.observe(document.body, { childList: true, subtree: true });
            };
        </script>`;
        
            navigator.clipboard.writeText(codeText)
                .then(() => alert("Code copied to clipboard! ✅"))
                .catch((err) => console.error("Failed to copy:", err));
        };

    return (
        <>  
            {/* WhatsApp Button Preview */}
            <h1 className="my-[25px] text-[#000] text-[20px] font-bold box-border text-left">
                    Chat Button Preview
                </h1>
                
                <div 
                    id="wa-btn-wrapper"
                    className="rounded-[40px] box-border inline-flex p-[15px] justify-center text-center items-center cursor-pointer relative align-middle" 
                    style={{ backgroundColor: selectedStyle.color,
                        right: btnPosition === "right" ? "-100px" : "auto", 
                        ...(typeof selectedAnimate.style === "function" 
                            ? selectedAnimate.style(btnPosition) 
                            : selectedAnimate.style || {})
                        }}

                    
                >
                        {selectedAnimate.name === "Notification Dot" && (
                            <span style={selectedAnimate.dotStyle}></span>
                        )}
                    <i  
                        style={{ color: colorScheme === "light" ? "#fff" : "#000" }} 
                        className="fa-brands fa-whatsapp overflow-hidden pl-[7px] py-[5px] box-border text-center text-[#fff] text-[27px] font-[500] leading-[24px]"
                    ></i>
                    <p 
                        style={{ color: colorScheme === "light" ? "#fff" : "#000" }}  
                        className="text-[#fff] ml-[8px] text-[17px] leading-[30px] box-border inline-block cursor-pointer font-semibold"
                    >
                        {ctaText || selectedStyle.text}
                    </p>
                </div>


                <div className="box-border block text-left text-[16px] font-[500] leading-[24px] flex-wrap">

                {/* button animation */}
                <BtnAnimation onSelectAnimate={setSelectedAnimate} />

                {/* button style */}
                <BtnStyle onSelectStyle={setSelectedStyle} />
                

                {/* first row */}
                <div className="box-border gap-5 text-left justify-between mt-[32px] text-[#222525] flex flex-col md:flex-col lg:flex-row">

                        {/* Button Color */}
                        <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4 ">
                            <label className="text-[#000] text-[16px]  box-border font-[700] block">
                                Button Color
                            </label>
                            <div className="min-w-[200px] flex box-border  text-[16px] font-[500] leading-[24px]">
                                <input 
                                    className="lg:w-[168px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border w-[100%] "
                                    type="text" 
                                    value={selectedStyle.color}
                                    onChange={(e) =>
                                        setSelectedStyle((prev) => ({
                                        ...prev,
                                        color: e.target.value,
                                        }))
                                    }
                                />

                                {/* Color Picker with real-time change */}
                                <input 
                                    type="color" 
                                    value={selectedStyle.color} 
                                    onChange={(e) => {
                                        setSelectedStyle((prev) => ({
                                        ...prev,
                                        color: e.target.value,
                                        }));
                                        setButtonColor(e.target.value);
                                    }} 
                                    className="w-[32px] h-[32px] min-h-[32px] font-[300] bg-[#fff] border border-[#d9d9d9] cursor-pointer"
                                />
                            </div>
                        </div>

                    {/* CTA Text */}
                    <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                        <label className="text-[#000] text-[16px]  box-border font-[700] block">CTA Text</label>
                        <input 
                            className="w-[100%] lg:w-[200px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border" 
                            type="text" 
                            value={ctaText} 
                            onChange={(e) => setCtaText(e.target.value)}
                        />
                    </div>

                    {/* Text & Icon Colour Scheme */}
                    <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                        <label className="text-[#000] text-[15px] box-border font-[700] block">
                            Text & Icon Colour Scheme
                        </label>
                            <select 
                                value={colorScheme} 
                                onChange={(e) => setColorScheme(e.target.value)} 
                                className="box-border w-[100%] lg:w-[168px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] inline-block"
                            >
                                <option value="light" className="block text-[14px]">Light</option>
                                <option value="dark" className="block text-[14px]">Dark</option>
                        </select>
                    </div>
                </div>

                {/* second row */}
                <div className="box-border gap-5 justify-between mt-[32px] text-[#222525] flex flex-col md:flex-col lg:flex-row">

                {/* margin bottom */}

                <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                <label className="text-[#000] text-[16px] box-border font-[700] block">
                    Margin Bottom
                </label>
                <div className="min-w-[200px] flex justify-center items-center box-border text-[16px] font-[500] leading-[24px]">
                    <input 
                        type="number"
                        value={marginBottom}
                        onChange={(e) => setMarginBottom(e.target.value)}
                        className="w-[100%] lg:w-[200px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border"
                    />
                    <div className="w-[32px] h-[32px] bg-[#fafafa] text-[#828282] p-[5px] pl-[12px] border-1 border-[#d9d9d9] text-[14px] min-h-[32px] box-border font-[500] flex justify-center items-center leading-[24px]">px</div>
                </div>
                </div>

                {/* margin left */}
                <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                <label className="text-[#000] text-[16px] box-border font-[700] block">
                    Margin Left
                </label>
                <div className="min-w-[200px] flex justify-center items-center box-border text-[16px] font-[500] leading-[24px]">
                    <input 
                        type="number"
                        value={marginLeft}
                        onChange={(e) => setMarginLeft(e.target.value)}
                        className="w-[100%] lg:w-[200px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border"
                    />
                    <div className="w-[32px] h-[32px] bg-[#fafafa] text-[#828282] p-[5px] pl-[12px] border-1 border-[#d9d9d9] text-[14px] min-h-[32px] box-border font-[500] flex justify-center items-center leading-[24px]">px</div>
                </div>
                </div>

                {/* Margin right */}
                <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                <label className="text-[#000] text-[16px] box-border font-[700] block">
                        Margin Right
                </label>
                <div className="min-w-[200px] flex justify-center items-center box-border text-[16px] font-[500] leading-[24px]">
                    <input 
                        type="number"
                        value={marginRight}
                        onChange={(e) => setMarginRight(e.target.value)}
                        className="w-[100%] lg:w-[200px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border"
                    />
                    <div className="w-[32px] h-[32px] bg-[#fafafa] text-[#828282] p-[5px] pl-[12px] border-1 border-[#d9d9d9] text-[14px] min-h-[32px] box-border font-[500] flex justify-center items-center leading-[24px]">px</div>
                </div>
                </div>



                </div>

                {/* second row part */}
                <div className="box-border gap-5 justify-between mt-[32px] text-[#222525] flex flex-col md:flex-col lg:flex-row">

                {/* corner radius */}

                <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                    <label className="text-[#000] text-[16px] box-border font-[700] block">
                        Corner Radius
                    </label>
                    <div className="min-w-[200px] flex justify-center items-center box-border text-[16px] font-[500] leading-[24px]">
                        <input 
                            type="number"
                            value={cornerRadius}
                            onChange={(e) => setCornerRadius(e.target.value)}
                            className="w-[100%] lg:w-[200px] font-roboto font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border"
                        />
                        <div className="w-[32px] h-[32px] bg-[#fafafa] text-[#828282] p-[5px] pl-[12px] border-1 border-[#d9d9d9] text-[14px] min-h-[32px] box-border font-[500] flex justify-center items-center leading-[24px]">px</div>
                    </div>
                </div>

                {/* z-index*/}
                <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                <label className="text-[#000] text-[16px] box-border font-[700] block">
                    z-index
                </label>
                <div className="min-w-[200px] flex justify-center items-center box-border text-[16px] font-[500] leading-[24px]">
                    <input 
                        type="number"
                        value={zIndex}
                        onChange={(e) => setZIndex(e.target.value)}
                        className="w-[100%] lg:w-[200px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border"
                    />
                    
                </div>
                </div>

                {/* button Position */}
                <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                <label className="text-[#000] text-[16px] box-border font-[700] block">
                        Button Position
                </label>
                <div className="min-w-[200px] flex justify-center items-center box-border  text-[16px] font-[500] leading-[24px]">
                    
                    <div className="flex box-border text-[#222525] text-[16px] font-[500] leading-[24px] justify-around items-center">
                        <div className="mr-[40px] box-border flex justify-center items-center">
                            <input name="position" value="left" className=" font-[300] bg-[#fff] border-1 border-[#d9d9d9] h-[32px] px-[1px] py-[12px] text-[14px] box-border" type="radio" checked={btnPosition === "left"} onChange={(e)=> setBtnPosition(e.target.value)}/>
                            <span className="ml-[8px] box-border font-[300] bg-[#fff] text-[#222525]">Left</span>
                        </div>
                        <div className="mr-[40px] box-border flex justify-center items-center">
                            <input name="position" value="right" className=" font-[300] bg-[#fff] border-1 border-[#d9d9d9] h-[32px] px-[1px] py-[12px] text-[14px] box-border" type="radio" checked={btnPosition === "right"} onChange={(e)=> setBtnPosition(e.target.value)} />
                            <span className="ml-[8px] box-border font-[300] bg-[#fff] text-[#222525]">Right</span>
                        </div>
                    </div>
                </div>
                </div>



                </div>

                {/* Third Row */}
                <div className=" flex flex-col mt-[32px] text-left text-[#222525] space-y-[14px]">
                    <label className="mb-[6px] text-[#000] text-[16px] box-border font-[700] block leading-[24px]">
                        Your Phone Number
                    </label>
                    <p className=" font-[400] text-[15px] text-[#828282] leading-[18px] max-w-[280px]">
                    Include country code with + symbol. Eg. if country code is +91 and WhatsApp number is 1234567890, then type 911234567890 below.
                    </p>
                    <input 
                        type="number"
                        value={mobileNumber}
                        placeholder="your mobile number"
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-[168px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border"
                    />

                    
                </div>
                <span>{error && <p className="text-red-500 text-[14px]">{error}</p>}</span>
                <div className=" flex flex-col mt-[32px] text-left text-[#222525] space-y-[14px]">
                    <label className="mb-[6px] text-[#000] text-[16px] box-border font-[700] block leading-[24px]">
                        Welcome Message (optional)
                    </label>

                    <p className=" font-[400] text-[15px] text-[#828282] leading-[18px] max-w-[280px]">
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
                    Generate WhatsApp Button Code
                </button>

                
                {showCode && (
                    <div className="block mt-[32px] text-[16px] font-[500] leading-[24px] text-left text-[#222525] space-y-[14px] box-border">
                        <p className="text-[14px] border border-[#1b6a21] text-center text-[#1b6a21] mt-[40px] box-border mb-[24px] font-[500] block leading-[24px] bg-[#d0eed2] p-3">
                            {messagrPrint}
                        </p>
                        <code className="block bg-[#fafafa] py-[12px] px-[18px] text-[#1a1a1a] text-[1em] box-border mt-[16px] rounded-[4px] h-[130px] overflow-y-auto font-[200]">
                            <span>{`<script async src='https://nayavision.com/wappi-assets/wappi.js'></script>`}</span><br/>
                            <span>{`<script>`}</span><br/>
                            <span>{`  var wa_btnSetting = {`}</span><br/>
                            <span>{`"BtnAnimation":"${selectedAnimateChange}"`}</span>
                            <span>{`"btnStyle":"${selectedStyleChange}",`}</span>
                            <span>{`    "btnColor":"${buttonColorChange}",`}</span>
                            <span>{`    "ctaText":"${ctaText || selectedStyle.text}",`}</span>
                            <span>{`    "cornerRadius":${cornerRadiusChange},`}</span>
                            <span>{`    "marginBottom":${marginBottomChange},`}</span>
                            <span>{`    "marginLeft":${marginLeftChange},`}</span>
                            <span>{`    "marginRight":${marginRightChange},`}</span>
                            <span>{`    "btnPosition":${btnPositionChange},`}</span>
                            <span>{`    "whatsAppNumber":"${mobileNumberChange}",`}</span>
                            <span>{`    "welcomeMessage":${messageChange},`}</span>
                            <span>{`    "zIndex":${zIndexChange},`}</span>
                            <span>{`    "btnColorScheme":"${colorSchemeChange}"`}</span>
                            <span>{`  };`}</span><br/>
                            <span>{`  window.onload = () => {`}</span><br/>
                            <span>{`    _waEmbed(wa_btnSetting);`}</span><br/>  
                            <span>{`let observer = new MutationObserver((mutations, obs) => {
            let btnWrapper = document.querySelector("#wa_btn-content");
            if (btnWrapper) {
                console.log("WhatsApp button detected! Adding class...");
                btnWrapper.classList.add("${selectedAnimateChange}");
                obs.disconnect(); // Milne ke baad observer ko stop kar do
            }
        });
    
        observer.observe(document.body, { childList: true, subtree: true });`}</span>
                            <span>{`  };`}</span><br/>
                            <span>{`</script>`}</span><br/>
                        </code>
                        <button className="mt-[16px] w-[165px] h-[32px] bg-[#fff] border-1 border-[#d9d9d9] box-border shadow-2xl rounded-[4px] text-[rgb(0 0 0 / 65%)] mr-[16px] text-[14px] flex items-center justify-evenly cursor-pointer overflow-visible"
                        onClick={copyToClipboardBtn}
                        >
                            <i className="fa-solid fa-copy overflow-hidden box-border inline-block "></i>
                            Copy to clipboard
                        </button>
                    </div>
                )}
            </div>
            </div>

            
        </>
    );
}

export default whatsappBtn;

