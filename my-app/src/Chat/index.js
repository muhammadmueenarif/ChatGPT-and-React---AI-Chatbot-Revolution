import React from "react";

const Chat = () => {
  return (
    <div className="h-screen w-screen bg-[gray]">
      <div className="w-[20%] h-screen bg-[black] text-white p-4">
        <div>
          <button className="w-full h-[50px] border rounded">+ New Chat</button>
        </div>
        <div className="h-[75%]">
          <div className="py-3 rounded text-center mt-5 font-light flex items-center hover:bg-slate-500 px-8
          cursor-pointer">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-message"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9h8" />
                <path d="M8 13h6" />
                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
              </svg>
            </span>
            My Chat History
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-[80%]"></div>
    </div>
  );
};

export default Chat;
