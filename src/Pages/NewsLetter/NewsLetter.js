import React from "react";

const NewsLetter = () => {
  return (
    <div className="border-b border-t py-10 mt-20">
      <section className="container mx-auto flex justify-between">
        <aside>
          <h1 className="font-Libre text-[24px] text-[#121212] font-semibold tracking-wide">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
          <p className="text-[16px] font-Libre py-1 tracking-wide">
            Join our mailing list for the latest product updates!
          </p>
        </aside>
        <aside className="space-x-3">
          <input
            className="bg-white border h-14 pl-3 w-80"
            type="email"
            name=""
            placeholder="Email Address"
          />
          <button className="uppercase text-white h-14 px-5 bg-black text-[14px]">
            Subscriber
          </button>
        </aside>
      </section>
    </div>
  );
};

export default NewsLetter;
