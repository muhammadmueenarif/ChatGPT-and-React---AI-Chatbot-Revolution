import React from "react";

const Chat = () => {
  const example = [
    "How to use prompts",
    "How to use tailwind css with react",
    "How to integrate api in chatgpt",
    "What is OpenAI",
  ];

  const newChat = [
    {
      role: "user",
      message: "i want to use tailwindcss",
    },
    {
      role: "assistant",
      message: "okay great",
    },
    {
      role: "user",
      message: "show me sample code",
    },
    {
      role: "assistant",
      message: "you can use like flex, flex-col, w-full, h-full etc",
    },
  ];
  return (
    // chat screen
    <div className="h-screen w-screen flex bg-[white]">
      {/* sidebar */}
      <div className="w-[20%] h-screen bg-[#202123] text-white p-4">
        {/* chat button  */}
        <div className="h-[5%]">
          <button className="w-full h-[50px] border rounded">+ New Chat</button>
        </div>

        {/* all previous chats */}
        <div className="h-[75%] overflow-scroll hide-scroll-bar mb-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <div
                className="py-3 rounded text-center mt-5 font-light flex items-center hover:bg-slate-500 px-8
              cursor-pointer"
              >
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
            );
          })}
        </div>

        {/* profile and setting option */}

        <div className="h-[20%] overflow-scroll hide-scroll-bar border-t">
          {[1].map((item, index) => {
            return (
              <div
                className="py-3 rounded text-center mt-5 font-light flex items-center hover:bg-slate-500 px-8
              cursor-pointer"
              >
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
                My Chats
              </div>
            );
          })}
        </div>
      </div>

      {/* main chat box */}
      <div className="w-[80%]">
        {newChat.length > 0 ? (
          <div className="h-[80%] overflow-scroll hide-scroll-bar pt-6">
            {newChat.map((item, index) => {
              <div className="w-[60%] border border-slate-600 flex items-center mx-auto p-6 text-black">
                {/* avatar image of user and chatbot */}
                <span className="mr-6 p-2 rounded-full bg-slate-500">
                  {item.role === "user" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="icon icon-tabler icons-tabler-filled icon-tabler-user"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                      <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                    </svg>
                  ) : (
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
                      class="icon icon-tabler icons-tabler-outline icon-tabler-robot">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                      <path d="M12 2v2" />
                      <path d="M9 12v9" />
                      <path d="M15 12v9" />
                      <path d="M5 16l4 -2" />
                      <path d="M15 14l4 2" />
                      <path d="M9 18h6" />
                      <path d="M10 8v.01" />
                      <path d="M14 8v.01" />
                    </svg>
                  )}
                </span>
                <div>{item.message}</div>
              </div>;
            })}
          </div>
        ) : (
          <div className=" h-[80%] border flex flex-col justify-center items-center text-black">
            <div className="text-4xl font-bold">ChatGPT</div>

            <div className="flex flex-wrap justify-around max-w-[900px]">
              {example.map((item, index) => {
                return (
                  <div className="text-lg font-light p-4 border border-black rounded min-w-[400px] mt
                     hover:bg-slate-300">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* chatgpt prompt input */}
        <div className="h-[20%]">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="w-[75%] flex justify-center relative">
            <input
              type="text"
              className="w-full rounded text-black p-4 pr-16 bg-gray-300"
              placeholder="Enter prompt here"/>

            <span className="absolute right-4 top-4 cursor-pointer">
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-message">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9h8" />
                <path d="M8 13h6" />
                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
              </svg>
            </span>
            </div>
            <small className="text-black mt-2">AI can generate anything</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
