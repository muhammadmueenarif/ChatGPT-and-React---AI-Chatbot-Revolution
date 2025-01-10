import React from "react";

const Chat = () => {
  const example = ["How to use prompts", "How to use tailwind css with react", 
    "How to integrate api in chatgpt", "What is OpenAI"];
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
          {[1,2,3,4,5,6,7,8,9,10].map((item, index)=> {
            return(
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
              </div>)
          })}
          
        </div>  

          {/* profile and setting option */}

        <div className="h-[20%] overflow-scroll hide-scroll-bar border-t">
          {[1].map((item, index)=> {
            return(
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
                My Chats
              </div>
            
            )
          })}
          
        </div>  


      </div>
        
        {/* main chat box */}
      <div className="w-[80%]">

        <div className=" h-[80%] border flex flex-col justify-center items-center text-black">
          <div className="text-4xl font-bold">ChatGPT</div>

          <div className="flex flex-wrap justify-around max-w-[900px]">
            { example.map((item,index)=> {
                return (
                  <div className="text-lg font-light p-4 border border-black rounded min-w-[400px] mt
                   hover:bg-slate-300"> 
                  {item} </div>
                )
              })
            }
          </div>
        </div>
        
        {/* chatgpt prompt input */}
        <div className="h-[20%]">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <input type="text" className="w-[60%] rounded text-black p-4 bg-gray-300" placeholder="Enter prompt here"/>
            <small className="text-black mt-2">AI can generate anything</small>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Chat;
