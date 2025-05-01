
import React, {useState} from "react";
import whatsappBtn from "./whatsappBtn";


function chatBox() {
    let [count, setCount] = useState(0);
    
    const [brandName, setBrandName] = useState("BrandName");
    const [subTitle, setSubTitle] =useState("Typically replies in a day");
    const [headercolor, setHeadercolor] = useState("#FBFFC8");
    const [colorScheme, setColorScheme] = useState("dark");
    const [url, setUrl] = useState("https://uploads-ssl.webflow.com/5f68a65cd5188c058e27c898/6204c4267b92625c9770f687_whatsapp-chat-widget-dummy-logo.png");
    const [message, setMessage]= useState("Hi there! How can I help you?");
    const [text, setText]= useState("Start Chat");
    const [btnColor, setBtnColor] = useState("#1A1A1A");
    const [btnColorScheme, setBtnColorScheme] = useState("light");
    const [radius, setRadius] = useState("40");
    const [messagrPrint, setMessagePrint] = useState("Your requested changes have been implemented in the code. You can now copy it.");
    

    const [brandNameChange, setBrandNameChange] = useState(brandName);
    const [subTitleChange, setSubTitleChange] = useState(subTitle);
    const [headercolorChange, setHeadercolorChange] = useState(headercolor);    
    const [colorSchemeChange, setColorSchemeChange] = useState(colorScheme);
    const [urlChange, setUrlChange] = useState(url);
    const [messageChange, setMessageChange] = useState(message);
    const [textChange, setTextChange] = useState(text);
    const [btnColorChange, setBtnColorChange] = useState(btnColor);
    const [btnColorSchemeChange, setBtnColorSchemeChange] = useState(btnColorScheme);
    const [radiusChange , setRadiusChange] = useState(radius);
    const [CodeShow, setCodeShow] = useState(false);

    const handleButtonClick = () =>{
        setBrandNameChange(brandName);
        setSubTitleChange(subTitle);
        setHeadercolorChange(headercolor);
        setColorSchemeChange(colorScheme);
        setUrlChange(url);
        setMessageChange(message);
        setTextChange(text);
        setBtnColorChange(btnColor);
        setBtnColorSchemeChange(btnColorScheme);
        setRadiusChange(radius);
        setCount(count+1);
            if(count>=1){
                setMessagePrint(`Your changes have been updated again [${count}] times`);
            }
            else{
                setMessagePrint("Your requested changes have been implemented in the code. You can now copy it.")
            }

        setCodeShow(true);
    }

    const copyToClipboard = () => {
        const codeText = `<script async src='https://nayavision.com/wappi-assets/wappi.js'></script>
    <script>
       
        var wa_widgetSetting = {
            "title": "${brandNameChange}",
            "subTitle": "${subTitleChange}",
            "headerBackgroundColor": "${headercolorChange}",
            "headerColorScheme": "${colorSchemeChange}",
            "greetingText": "${messageChange}",
            "ctaText": "${textChange}",
            "btnColor": "${btnColorChange}",
            "cornerRadius": "${radiusChange}",
            "welcomeMessage": "Hello",
            "btnColorScheme": "${btnColorSchemeChange}",
            "brandImage": "${urlChange}",
            "darkHeaderColorScheme": {"title": "#333333", "subTitle": "#4F4F4F"}
        };
        window.onload = () => {
            _waEmbed(wa_btnSetting, wa_widgetSetting);
        };
    </script>`;
    
        navigator.clipboard.writeText(codeText)
            .then(() => alert("Code copied to clipboard! ✅"))
            .catch((err) => console.error("Failed to copy:", err));
    };
    

    return(
        <>
            {/* WhatsApp Button Preview */}
            <h1 className="my-[25px] text-[#000] text-[20px] font-bold box-border text-left">
                Chat Widget Preview
            </h1>

            {/* main Box */}
            <div className="w-[300px] md:w-[330px] bg-[#fff] shadow-2xl rounded-[8px] box-border text-[#222525] text-[16px] font-[500] leading-[24px]">
                {/* chatBox */}
                <div style={{backgroundColor : headercolor}} className="flex p-[20px] rounded-tl-lg rounded-tr-lg">
                    <div className="box-border block">
                        <img className="h-[32px] w-[32px] rounded-full mr-[12px] box-border max-w-full inline-block " src={url} alt="" />
                    </div>
                    <div className="box-border block"> 
                        <h4 
                        style={{ color: colorScheme === "dark" ? "#000" : "#fff" }} 
                        className="font-[600] text-[16px] box-border mb-[12px] block">{brandName}</h4>
                        <p
                        style={{ color: colorScheme === "dark" ? "#000" : "#fff" }}
                        className="text-[12px] mt-[4px] box-border mb-[24px] font-[500] block">{subTitle}</p>
                    </div>
                </div>
                <div className="py-[24px] px-[20px] bg-[url('./assets/153391597-dbe0e13e-7ea8-4d7c-9b5c-66d0400df3d3.png')] box-border block">
                    <div className="inline-block py-[12px] px-[16px] bg-[#eeeded] shadow-custom-3 rounded-[16px] break-words box-border">
                        <h4 className="text-[#808080] font-[600] text-[12px] mb-[8px] box-border leading-[32px] block break-words">{brandName}</h4>
                        <p className="text-[14px] text-[#1a1a1a] break-words max-w-[270px] box-border mb-[24px] font-[500] block leading-[24px]">{message}</p>
                    </div>
                </div>
                <div className="bg-[#fff] rounded-bl-lg rounded-br-lg p-[20px] flex justify-center box-border">
                    <div style={{backgroundColor: btnColor}} className="rounded-[40px] box-border inline-flex py-[10px] px-[55px] shadow-custom-3 tetx-[#fff] items-center cursor-pointer">
                    <i   
                        style={{ color: btnColorScheme === "light" ? "#fff" : "#000" }} 
                        className="fa-brands fa-whatsapp box-border text-[27px] font-[500] leading-[24px] inline-block w-[25] h-[25] cursor-pointer"
                    ></i>
                    <p style={{ color: btnColorScheme === "light" ? "#fff" : "#000" }} className=" ml-[8px] tetx-[14px] leading-[20px] box-border inline-block  font-[500] ">{text}</p>
                    </div>
                </div>
            </div>

            {/* Chat Box Settings */}
            <div className="box-border block text-[#222525] text-left text-[16px] font-[500] leading-[24px]">
                {/* first row */}
                <div className="box-border gap-5 justify-between mt-[32px] text-[#222525] flex flex-col md:flex-col lg:flex-row">
                    <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                        <label className=" text-[#000] text-[16px] box-border font-[700] block ">Title (Brand Name)</label>
                        <input type="text" value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        className="w-[100%] lg:w-[200px] font-[300] bg-[#fff] border-1 border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border"/>
                    </div>
                    <div className="mr-[40px] min-w-[200px] flex-col box-border">
                        <label className="mb-[14px] text-[#000] text-[16px] box-border font-[700] block ">Subtitle</label>
                        <input type="text" value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)} 
                        className="w-[100%] lg:w-[200px] font-[300] bg-[#fff] border-1 border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border inline-block text-start"/>
                    </div>
                </div>
                {/* second row */}
                <div className="box-border gap-5 justify-between mt-[32px] text-[#222525] flex flex-col md:flex-col lg:flex-row">
                    <div className="mr-[40px] min-w-[200px] flex-col box-border">
                        <label className="mb-[14px] text-[#000] text-[15px] box-border font-[700] block ">Header Background Colour</label>
                        <div className="min-w-[200px] flex box-border text-[16px] font-[500] leading-[24px]">
                            <input 
                                className="w-[100%] lg:w-[168px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border"
                                type="text" 
                                value={headercolor}
                                onChange={(e) => setHeadercolor(e.target.value)}
                            />

                            {/* Color Picker with real-time change */}
                            <input 
                                type="color" 
                                value={headercolor}
                                onChange={(e) => setHeadercolor(e.target.value)} 
                                className="w-[32px] h-[32px] min-h-[32px] font-[300] bg-[#fff] border border-[#d9d9d9] cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="mr-[40px] min-w-[200px] flex-col box-border ">
                        <label className="mb-[14px] text-[#000] text-[15px] box-border font-[700] block ">Header Text Colour Scheme</label>
                        <select 
                            value={colorScheme} 
                            onChange={(e) => setColorScheme(e.target.value)}
                            className="box-border w-[100%] lg:w-[168px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] inline-block"
                        >
                            <option value="dark" className="block text-[14px]">Dark</option>
                            <option value="light" className="block text-[14px]">Light</option>
                        </select>
                    </div>
                </div>

                {/* third row */}
                <div className="box-border flex justify-between mt-[32px]">
                    <div className="w-[558px] min-w-[200px] flex-col box-border space-y-3">
                        <label className="mb-[14px] text-[#000] text-[16px] box-border font-[700] block">Brand Logo URL</label>
                        <p className=" font-[400] text-[15px] text-[#828282] leading-[18px] max-w-[100%]">Include a link from a CDN. You can upload it to your CMS and paste that link.</p>
                        <input type="text" value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="h-[40px] font-[300] bg-[#fff] border-1 border-[#d9d9d9] py-[1px] px-[12px] text-[14px] box-border w-[100%]" />
                    </div>
                </div>

                {/* fourth row */}
                <div className=" flex flex-col mt-[32px] text-left text-[#222525] space-y-[14px]">
                    <label className="mb-[6px] text-[#000] text-[16px] box-border font-[700] block leading-[24px]">
                    Greeting Text
                    </label>

                    <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                        className=" font-[400] text-[15px] text-[#828282] leading-[18px] border border-[#d9d9d9] 
                                bg-[#fff] h-[81px] py-[9px] px-[12px] box-border w-full min-w-[280px] sm:w-[250px] md:w-[300px] 
                                lg:w-[350px]"
                    >
                    </textarea>
                </div> 

                {/* fifth row */}
                <div className="box-border gap-5 justify-between mt-[32px] text-[#222525] flex flex-col md:flex-col lg:flex-row">
                    {/* CTA Text */}
                    <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                        <label className="text-[#000] text-[16px] box-border font-[700] block">CTA Text</label>
                        <input 
                            className="w-[100%] lg:w-[168px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border" 
                            type="text" 
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    {/* Button Color */}
                    <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                        <label className="text-[#000] text-[16px] box-border font-[700] block">
                            Button Color
                        </label>
                        <div className="min-w-[200px] flex box-border text-[16px] font-[500] leading-[24px]">
                            <input 
                                className="w-[100%] lg:w-[168px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border"
                                type="text" 
                                value={btnColor}
                                onChange={(e) => setBtnColor(e.target.value)}
                            />

                            {/* Color Picker with real-time change */}
                            <input 
                                type="color" 
                                value={btnColor}
                                onChange={(e)=> setBtnColor(e.target.value)} 
                                className="w-[32px] h-[32px] min-h-[32px]  font-[300] bg-[#fff] border border-[#d9d9d9] cursor-pointer"
                            />
                        </div>
                    </div>
                    {/* Text & Icon Colour Scheme */}
                    <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                        <label className="text-[#000] text-[15px] box-border font-[700] block">
                            Text & Icon Colour Scheme
                        </label>
                            <select 
                                value={btnColorScheme}
                                onChange={(e)=> setBtnColorScheme(e.target.value)}  
                                className="box-border w-[100%] lg:w-[168px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] inline-block"
                            >
                                <option value="light" className="block text-[14px]">Light</option>
                                <option value="dark" className="block text-[14px]">Dark</option>
                        </select>
                    </div>
                </div>

                {/* sixth row */}
                <div className="box-border gap-5 justify-between mt-[32px] text-[#222525] flex flex-col md:flex-col lg:flex-row">
                    {/* corner radius */}

                    <div className="min-w-[200px] flex-col box-border space-y-[14px] mt-4">
                        <label className="text-[#000] text-[16px] box-border font-[700] block">
                            Corner Radius
                        </label>
                        <div className="min-w-[200px] flex justify-center items-center box-border text-[16px] font-[500] leading-[24px]">
                            <input 
                                type="number"
                                value={radius}
                                onChange={(e)=> setRadius(e.target.value)}
                                className="w-[100%] lg:w-[168px] font-[300] bg-[#fff] border border-[#d9d9d9] h-[32px] py-[1px] px-[12px] text-[14px] box-border"
                            />
                            <div className="w-[32px] h-[32px] bg-[#fafafa] text-[#828282] p-[5px] pl-[12px] border-1 border-[#d9d9d9] text-[14px] min-h-[32px] box-border font-[500] flex justify-center items-center leading-[24px]">px</div>
                        </div>
                    </div>
                </div>
                
                {/*Note*/}
                <p className="mt-[32px] font-[300] box-border text-[#3f3f3f] mb-[24px] block "><b>Please note:</b> Your WhatsApp Number & Welcome Message are taken from WhatsApp Chat Button Settings.</p>

                {/* button */}
                <button 
                    className="py-[9px] px-[15px] bg-[#0135AF] hover:bg-[#004CFF] transition-all text-[#fff] text-[14px] mt-[32px] border-none shadow-md rounded-[4px] cursor-pointer"
                    onClick={handleButtonClick}
                >
                    Generate WhatsApp Widget 
                </button>

                {CodeShow && (
                    <div className="block mt-[32px] text-[16px] font-[500] leading-[24px] text-left text-[#222525] space-y-[14px] box-border">
<p className="text-[14px] border border-[#1b6a21] text-center text-[#1b6a21] mt-[40px] box-border mb-[24px] font-[500] block leading-[24px] bg-[#d0eed2] p-3">
                            {messagrPrint}
                        </p>
                        <code className="block bg-[#fafafa] py-[12px] px-[18px] text-[#1a1a1a]  text-[1em] box-border mt-[16px] rounded-[4px] h-[130px] overflow-y-auto font-[200]">
                            <span>{`<script async src='https://nayavision.com/wappi-assets/wappi.js'></script>`}</span><br></br>
                            <span>{`<script>`}</span><br/>
                            <span>{`  var wa_widgetSetting = {`}</span><br></br>
                            <span>{`    "title":"${brandNameChange}",`}</span>
                            <span>{`    "subTitle":"${subTitleChange}",`}</span>
                            <span>{`    "headerBackgroundColor":${headercolorChange},`}</span>
                            <span>{`    "headerColorScheme":${colorSchemeChange},`}</span>
                            <span>{`    "greetingText":${messageChange},`}</span>
                            <span>{`    "ctaText":${textChange},`}</span>
                            <span>{`    "btnColor":${btnColorChange},`}</span>
                            <span>{`    "cornerRadius":"${radiusChange}",`}</span>
                            <span>{`    "welcomeMessage":"Hello",`}</span>
                            <span>{`    "btnColorScheme":${btnColorSchemeChange},`}</span>
                            <span>{`    "brandImage":"${urlChange},"`}</span>
                            <span>{`    "darkHeaderColorScheme":"{"title":"#333333","subTitle":"#4F4F4F"}"`}</span>
                            <span>{`  };`}</span>
                            <span>{`  window.onload = () => {`}</span><br></br>
                            <span>{` _waEmbed(wa_btnSetting, wa_widgetSetting);`}</span><br></br>
                            <span>{`  };`}</span><br></br>
                            <span>{`</script>`}</span><br></br>
                        </code>
                        <button className="mt-[16px] w-[165px] h-[32px] bg-[#fff] border-1 border-[#d9d9d9] box-border shadow-2xl rounded-[4px] text-[rgb(0 0 0 / 65%)] mr-[16px] text-[14px] flex items-center justify-evenly cursor-pointer overflow-visible"
                        onClick={copyToClipboard}
                        >
                            <i className="fa-solid fa-copy *: box-border inline-block "></i>
                            Copy to clipboard
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default chatBox;