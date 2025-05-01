import { useState } from "react";

const ButtonStyle = ({ onSelectStyle }) => {
  const styles = [
    {
      name: "WhatsApp with CTA Green",
      className: "bg-[#16BE45] text-white",
      text: "WhatsApp Us",
      color: "#16BE45",
    },
    {
      name: "WhatsApp with CTA Black",
      className: "bg-[#000] text-white",
      text: "WhatsApp Us",
      color: "#000",
    },
    {
      name: "Icon Only Green",
      className: "bg-[#16BE45] text-white",
      text: "",
      color: "#16BE45",
    },
    {
      name: "Icon Only Black",
      className: "bg-[#000] text-black",
      text: "",
      color: "#000",
    },
  ];

  const [selectedStyle, setSelectedStyle] = useState(styles[0]);

  const handleSelection = (option) => {
    setSelectedStyle(option);
    onSelectStyle(option);
  };

  return (
    <div className="box-border mt-8 text-[#222525] flex-col space-y-4 md:flex-col lg:flex-row">
      <label className="text-black text-lg font-bold block mb-4">
        Button Style
      </label>
      <div className="min-w-[200px] flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
        {styles.map((option, index) => (
          <label
            key={index}
            className="flex items-center bg-gray-200 py-3 px-5 rounded-full cursor-pointer hover:bg-gray-300"
            onClick={() => handleSelection(option)} // ✅ पूरा Box क्लिकेबल होगा
          >
            <input
              name="select"
              value={option.name}
              checked={selectedStyle.name === option.name} 
              onChange={() => handleSelection(option)} 
              className="hidden"
              type="radio"
            />
            <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center">
              {selectedStyle.name === option.name && (
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              )}
            </div>
            <span className="ml-2 font-semibold text-[#222525]">
              {option.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ButtonStyle;
