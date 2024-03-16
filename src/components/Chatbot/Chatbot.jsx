import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import simsimi from "../../assets/images/simsimi.png";
import simsimi_avt from "../../assets/images/simsimi-avt.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const listRef = useRef(null);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleMessage = async (inputText) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
        body: new URLSearchParams({
          text: inputText,
          lc: "vn",
        }),
      };

      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.simsimi.vn/v1/simtalk",
        requestOptions,
      );

      if (!response.ok) {
        throw new Error("Network error");
      }

      const data = await response.json();
      return { text: data.message, sender: "bot" };
    } catch (error) {
      console.error(error);
      return { text: "I don't understand", sender: "bot" };
    }
  };

  const handleMessageSend = async () => {
    if (inputText === "") return;
    setMessages([{ text: inputText, sender: "me" }, ...messages]);
    setInputText("");
    const botResponse = await handleMessage(inputText);
    setMessages((arr) => [botResponse, ...arr]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleMessageSend();
    }
  };

  useEffect(() => {
    listRef.current?.firstElementChild?.scrollIntoView();
  }, [messages]);

  return (
    <>
      <button
        className="fixed bottom-0 right-0 z-10 m-4 flex size-16 items-center justify-center overflow-hidden rounded-full border-2 bg-white shadow-[rgba(0,0,0,0.35)_0px_5px_15px]"
        onClick={toggleChatBox}
      >
        <img src={simsimi} alt="" className="size-4/5" />
      </button>
      <div
        className={`${isOpen ? "h-[600px] max-h-[600px] w-[410px]" : "invisible h-0 w-0 !p-0"} fixed bottom-0 right-0 m-20 flex flex-col overflow-hidden rounded-xl bg-[#eaeef2] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] transition-all duration-300`}
      >
        <div className="absolute m-4 flex w-[92%] items-center before:absolute before:-bottom-4 before:-left-4 before:block before:h-[calc(100%+32px)] before:w-[calc(100%+32px)] before:bg-[#eaeef2]">
          <div className="z-10 flex w-full rounded-lg bg-white p-2 shadow-[rgba(0,0,0,0.35)_0px_5px_15px]">
            <img
              src={simsimi_avt}
              alt="SimSimi"
              className="mr-4 size-14 rounded-full"
            />
            <span className="absolute bottom-2 left-12 block size-4 rounded-full border-2 border-white bg-green-500 outline-4"></span>
            <div>
              <p className="text-2xl font-bold">SimSimi</p>
              <p className="text-gray-600">Online</p>
            </div>
          </div>
        </div>
        <div
          ref={listRef}
          className="scrollbar-hide flex h-full flex-col-reverse overflow-y-auto px-4 pb-20"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${message.sender === "me" ? "self-end !rounded-tr-sm bg-[#0057f9] text-white" : "self-start !rounded-tl-sm bg-white text-black"} over my-1 flex h-auto min-h-10 w-fit max-w-[85%] items-center scroll-smooth whitespace-pre-line break-all rounded-2xl px-3 py-1`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 z-10 m-4 w-[92%] before:absolute before:-left-4 before:-top-4 before:z-[5] before:block before:h-[calc(100%+32px)] before:w-[calc(100%+32px)] before:bg-[#eaeef2]">
          <div className="relative z-20">
            <textarea
              type="text"
              value={inputText}
              className="block h-12 max-h-12 min-w-full resize-none rounded-2xl border-none px-4 py-3 pr-12 shadow-[rgba(0,0,0,0.35)_0px_5px_15px]"
              placeholder="Message SimSimi..."
              spellCheck="false"
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <button
              className="absolute right-3 top-2 size-8"
              onClick={handleMessageSend}
            >
              <i className="fa-light fa-paper-plane-top text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "opacity-0" : "opacity-100"} z-0] fixed bottom-0 right-0 mb-10 mr-16 rounded-xl rounded-br-none border-b bg-white px-20 py-5 font-bold shadow-[rgba(0,0,0,0.35)_0px_5px_15px] transition-all duration-500`}
      >
        <p>Chat with SimSimi</p>
      </div>
    </>
  );
};

export default Chatbot;
