
import React from "react";

const PlayButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-28 h-28 bg-zinc-500 opacity-100 rounded-full border border-solid border-zinc-500 max-sm:w-20 max-sm:h-20">
      <div className="flex justify-center items-center rounded-full border border-solid bg-white bg-opacity-100 border-zinc-300 h-[63px] w-[63px] max-sm:h-[45px] max-sm:w-[45px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="play-icon"
          style={{ width: "23px", height: "23px" }}
        >
          <path
            d="M19.4957 9.49576C20.8109 10.2552 21.4686 10.6348 21.6893 11.1306C21.8818 11.5629 21.8818 12.0567 21.6893 12.489C21.4686 12.9847 20.8109 13.3644 19.4957 14.1237L9.9767 19.6196C8.66145 20.3789 8.00382 20.7586 7.46418 20.7019C6.99349 20.6524 6.56588 20.4055 6.28769 20.0226C5.96875 19.5837 5.96875 18.8243 5.96875 17.3056V6.31399C5.96875 4.79526 5.96875 4.03588 6.2877 3.5969C6.56588 3.214 6.99349 2.96713 7.46418 2.91765C8.00382 2.86094 8.66145 3.24062 9.9767 3.99999L19.4957 9.49576Z"
            fill="#242323"
          />
        </svg>
      </div>
    </div>
  );
};

export default PlayButton;
