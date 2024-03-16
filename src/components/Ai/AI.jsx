import React, { useState } from "react";
import Model from "../model/Model";

function AI() {
  const [model , setModel]=useState(false)
  return (
    <div className="bg-black ">
      <Model visible={model} closeModel={setModel}/>
      <div className="flex justify-center py-12">
        <nav className="w-[40%] fixed">
          <div className="flex border border-gray-700 rounded-full justify-between items-center bg-gray-800 bg-opacity-50 p-4">
            <div>
              <img
                src="https://assets.ycodeapp.com/assets/app47824/Icons/VQoczoP3HuaEFil7kzaSlI0Ixwxu0q4qWQrmgyqP.svg"
                alt="img"
                className="w-20"
              />
            </div>
            <div
              className=" p-2 px-4 rounded-full"
              style={{ backgroundColor: "#87FDFF" }}
            >
              <button onClick={()=> setModel(true)} className="text-sm">
                Join Waitlist
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* 1111 */}
      <div>
        <div className="flex flex-col gap-1 pt-20 justify-center items-center">
          <h1
            className="text-white text-5xl font-bold"
            style={{ color: "#D5ECF8" }}
          >
            World's First Candidate
          </h1>
          <h1
            className="text-white text-5xl font-bold"
            style={{ color: "#D5ECF8" }}
          >
            {" "}
            Tracking System
          </h1>
        </div>
        <div className="flex justify-center items-center py-6">
          <h1 className="text-white text-lg" style={{ color: "#D5ECF8" }}>
            Check with our CTS whether you should HIRE or NOT
          </h1>
        </div>
      </div>
      {/* 1111 */}

      {/* 2222 */}
      <div>
        <div className="flex justify-center py-6 ">
          <img
            src="https://cdn.dribbble.com/userupload/11771935/file/original-5f3fd5c8ab4fff8021f559dfa1fc821b.jpeg?resize=2048x1536"
            alt="img"
            className="rounded-2xl w-[70%]"
          />
        </div>
      </div>
      {/* 2222      */}

      {/* 3333 */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center pt-12 pb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-20 rounded-xl bg-cyan-700 bg-opacity-25 py-4 border border-gray-600 px-4 py-2"
            style={{ color: "#D5ECF8" }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold py-4" style={{ color: "#D5ECF8" }}>
            Simple, yet powerful features
          </h1>
          <h1 className="text-lg" style={{ color: "#D5ECF8" }}>
            Adipiscing nisi sem gravida enim eu adipiscing.
          </h1>
        </div>
      </div>
      {/* 3333 */}
      {/* 4444 */}
      <div className="py-10 flex flex-col gap-4">
        <div className="flex justify-center gap-4">
          <div>
            <div className="text-white border border-gray-700 rounded-lg p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 py-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                ></path>
              </svg>
              <h1
                className="py-2 text-lg font-semibold"
                style={{ color: "#D5ECF8" }}
              >
                Collaborate on everything
              </h1>
              <h1 className="" style={{ color: "#D5ECF8" }}>
                Comprehensive reports providing intricate details on team data
                across various channels.
              </h1>
            </div>
          </div>

          <div>
            <div className="text-white border border-gray-700 rounded-lg p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 py-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                ></path>
              </svg>
              <h1
                className="py-2 text-lg font-semibold"
                style={{ color: "#D5ECF8" }}
              >
                AI Structure Generation
              </h1>
              <h1 className="" style={{ color: "#D5ECF8" }}>
                Generate entire content models with natural language.
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <div>
            <div className="text-white border border-gray-700 rounded-lg p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 py-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
              <h1
                className="py-2 text-lg font-semibold"
                style={{ color: "#D5ECF8" }}
              >
                User friendly
              </h1>
              <h1 className="" style={{ color: "#D5ECF8" }}>
                Generate entire content models with natural language.
              </h1>
            </div>
          </div>

          <div>
            <div className="text-white border border-gray-700 rounded-lg p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 py-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                ></path>
              </svg>
              <h1
                className="py-2 text-lg font-semibold"
                style={{ color: "#D5ECF8" }}
              >
                Custom code
              </h1>
              <h1 className="" style={{ color: "#D5ECF8" }}>
                Comprehensive reports providing intricate details on team data
                across various channels.
              </h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* 4444 */}

      {/* 5555 */}
      <div className="flex justify-center items-center">
        <div className="flex gap-20 justify-center items-center py-28 w-[60%]">
          <div className="text-white w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-20 rounded-xl bg-cyan-700 bg-opacity-25 py-4 border border-gray-600 px-4 py-2"
              style={{ color: "#D5ECF8" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              ></path>
            </svg>
            <h1
              className="text-2xl font-semibold py-2 pt-6"
              style={{ color: "#D5ECF8" }}
            >
              Auto complete the whole content in a minute
            </h1>
            <h1 className="py-2 pb-12" style={{ color: "#D5ECF8" }}>
              Duis nunc massa, rhoncus ac elit id, pellentesque blandit eros.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </h1>
            <button onClick={()=> setModel(true)}
              className="px-4 py-2 font-semibold bg-cyan-300 rounded-full text-black"
            >
              Get started
            </button>
          </div>

          <div>
            <div>
              <img
                src="https://assets.ycodeapp.com/assets/app47824/images/3gFCBhbwCm0PnKmG5AjQGu0O7GI9Uop9AbSxlglD-published.webp"
                alt="img"
                className="rounded-2xl w-96"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 5555 */}

      {/* 6666 */}
      <div className="flex  justify-center items-center">
        <div className="flex flex-row-reverse gap-20 justify-center items-center py-28 w-[60%]">
          <div className="text-white w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-20 rounded-xl bg-cyan-700 bg-opacity-25 py-4 border border-gray-600 px-4 py-2"
              style={{ color: "#D5ECF8" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
              ></path>
            </svg>
            <h1
              className="text-2xl font-semibold py-2 pt-6"
              style={{ color: "#D5ECF8" }}
            >
              Generate everything needed to create content
            </h1>
            <h1 className="py-2 pb-12" style={{ color: "#D5ECF8" }}>
              Morbi tempor metus sit amet auctor finibus. Mauris cursus id
              turpis eu volutpat. Aliquam diam lectus, convallis at pellentesque
              ac, venenatis convallis tortor.
            </h1>
            <button onClick={()=> setModel(true)}
              className="px-4 py-2 font-semibold bg-cyan-300 rounded-full text-black"
            >
              Get started
            </button>
          </div>

          <div>
            <div>
              <img
                src="https://assets.ycodeapp.com/assets/app47824/images/rfrpRUREgL7IUXu6B8LvpdSzAnAIHpUb3G7QphR8-published.webp"
                alt="img"
                className="rounded-2xl w-96"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 6666 */}

      {/* 7777 */}
      <div>
        <div className="flex pt-20 flex-col justify-center items-center">
          <h1 className="text-5xl font-bold py-6" style={{ color: "#D5ECF8" }}>
            Genuine experiences from our clients
          </h1>
          <h1 className="text-lg " style={{ color: "#D5ECF8" }}>
            Read what our satisfied clients have to say about their experience
          </h1>
          <h1 className="text-lg " style={{ color: "#D5ECF8" }}>
            with our AI-based virtual assistant services.
          </h1>
        </div>
      </div>
      {/* 7777 */}

      {/* 8888 */}
      <div className="flex justify-center items-center py-12">
        <div className="flex gap-4 w-[70%]">
          <div className="flex flex-col gap-4">
            <div className="border border-gray-800 p-4 rounded-xl text-white">
              <h1 style={{ color: "#D5ECF8" }}>
                Its natural language processing capabilities make communication
                seamless, whether I'm delegating tasks or scheduling meetings.
              </h1>
              <h1 style={{ color: "#D5ECF8" }} className="font-semibold py-2">
                Nathan C.
              </h1>
            </div>
            <div className="border border-gray-800 p-4 rounded-xl text-white">
              <h1 style={{ color: "#D5ECF8" }}>
                Its natural language processing capabilities make communication
                seamless, whether I'm delegating tasks or scheduling meetings.
              </h1>
              <h1 style={{ color: "#D5ECF8" }} className="font-semibold py-2">
                Nathan C.
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="border border-gray-800 p-4 rounded-xl text-white">
              <h1 style={{ color: "#D5ECF8" }}>
                Its natural language processing capabilities make communication
                seamless, whether I'm delegating tasks or scheduling meetings.
              </h1>
              <h1 style={{ color: "#D5ECF8" }} className="font-semibold py-2">
                Nathan C.
              </h1>
            </div>
            <div className="border border-gray-800 p-4 rounded-xl text-white">
              <h1 style={{ color: "#D5ECF8" }}>
                Its natural language processing capabilities make communication
                seamless, whether I'm delegating tasks or scheduling meetings.
              </h1>
              <h1 style={{ color: "#D5ECF8" }} className="font-semibold py-2">
                Nathan C.
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="border border-gray-800 p-4 rounded-xl text-white">
              <h1 style={{ color: "#D5ECF8" }}>
                Its natural language processing capabilities make communication
                seamless, whether I'm delegating tasks or scheduling meetings.
              </h1>
              <h1 style={{ color: "#D5ECF8" }} className="font-semibold py-2">
                Nathan C.
              </h1>
            </div>
            <div className="border border-gray-800 p-4 rounded-xl text-white">
              <h1 style={{ color: "#D5ECF8" }}>
                Its natural language processing capabilities make communication
                seamless, whether I'm delegating tasks or scheduling meetings.
              </h1>
              <h1 style={{ color: "#D5ECF8" }} className="font-semibold py-2">
                Nathan C.
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* 8888 */}

      {/* 9999 */}
      <div className="flex justify-center">
        <div className="w-[60%] py-32">
          <div className="bg-cyan-300  rounded-xl flex flex-col justify-center items-center p-12">
            <h1 className="text-2xl font-semibold">
              Join the waitlist for early acess!
            </h1>
            <h1 className="pb-10 font-semibold py-1">
              Take decisions using HireXzo
            </h1>
            <button className="text-white bg-black px-6 py-4 rounded-full">
              Get started for free
            </button>
          </div>
        </div>
      </div>
      {/* 9999 */}

      {/* 101010101 */}
      <div className="flex justify-center">
        <div className="flex text-white gap-6 w-[70%] py-12">
          <h1>Home</h1>
          <h1>Changelog</h1>
          <h1>Docs</h1>
          <h1>Terms of Service</h1>
          <h1>Privacy Policy</h1>
        </div>
        <div></div>
      </div>
      {/* 101010101 */}
    </div>
  );
}

export default AI;
