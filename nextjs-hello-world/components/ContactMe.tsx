"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactMe = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:maciej.bodnar02@gmail.com?subject=${formData.subject}&body=Hello Maciej, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-18 uppercase tracking-[20px] text-gray-500 text-xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-2 md:space-y-10 p-0 md:p-6 justify-center">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#f7ab0a] underline">Lets Talk.</span>
        </h4>

        <div className="space-y-2 md:space-y-10">
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-2xl">+48 799 826 302</p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-2xl flex-wrap">
              maciej.bodnar02@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-2xl">ul. Hoza 29/31</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full"
        >
          <div className="flex flex-col md:flex-row space-y-2 gap-2">
            <input
              {...register("name")}
              placeholder="Full name"
              className="flex-1 contactInput !m-0"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="E-mail"
              className="flex-1 contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-2 md:py-5 px-10 rounded-md text-black font-bold text-lg hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
