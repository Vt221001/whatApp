import { useState } from "react";

const BtnAnimation = ({ onSelectAnimate }) => {
  const Animation = [
    { name: "Off", className: "", style: {} },

    { 
      name: "Bounce", 
      className: "bounce", 
      style: { animation: "bounce 1s infinite" } 
    },

    { 
      name: "Glow", 
      className: "glow", 
      style: { 
        animation: "glowAnimation 1.5s infinite alternate",
        boxShadow: "0px 0px 10px 3px rgba(79, 161, 102, 0.8)",
      } 
    },

    { 
      name: "Shake", 
      className: "shake", 
      style: { 
        animation: "shake 0.5s infinite", 
        transformOrigin: "left center right center" 
      } 
    },

    { 
      name: "Notification Dot", 
      className: "notify-dot",
      style: {}, 
      dotStyle: { 
        content: "",
        position: "relative",
        bottom: "13px",
        right: "15px",
        width: "10px",
        height: "10px",
        backgroundColor: "red",
        borderRadius: "50%"
      } 
    },

    { 
      name: "Floating", 
      className: "floating", 
      style: { 
        animation: "floating 2s ease-in-out infinite" 
      } 
    },

    { 
      name: "Heart Beat", 
      className: "heartbeat", 
      style: { 
        animation: "heartbeat 1.5s infinite ease-in-out" 
      } 
    }
  ];

  const [selectedAnimate, setSelectedAnimate] = useState(Animation[0]);

  const handleSelection = (option) => {
    setSelectedAnimate(option);
    onSelectAnimate(option);
  };

  return (
    <div className="box-border mt-8 text-[#222525] flex-col space-y-4 md:flex-col lg:flex-row">
      <label className="text-black text-lg font-bold block mb-4">
        Button Animation
      </label>
      <div className="min-w-[200px] space-y-0 grid grid-cols-1 md:grid-cols-3 gap-4">
        {Animation.map((option, index) => (
          <label 
            key={index} 
            className="flex items-center bg-gray-200 py-3 px-5 rounded-full cursor-pointer hover:bg-gray-300"
            onClick={() => handleSelection(option)} // 🔥 अब पूरे box पर क्लिक से select होगा
          >
            <input
              name="animate"
              value={option.name}
              checked={selectedAnimate.name === option.name} 
              onChange={() => handleSelection(option)} 
              className="hidden" 
              type="radio"
            />
            <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center">
              {selectedAnimate.name === option.name && (
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

export default BtnAnimation;
