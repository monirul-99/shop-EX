import React from "react";

const Blogs = () => {
  return (
    <>
      <section className="w-[60%] mx-auto mt-32">
        <h1 className="text-[32px] font-Josefin leading-10 text-[#121212] font-semibold">
          Fresh news from <br /> our blog
        </h1>
      </section>
      <section className="w-[60%] mx-auto flex items-start justify-between gap-8 py-10 mb-12">
        <div>
          <aside>
            <img
              src="https://cdn.shopify.com/s/files/1/0551/8001/articles/post2_720x.jpg?v=1615415810"
              alt=""
            />
          </aside>

          <aside>
            <div className="uppercase flex items-center font-Libre space-x-2 py-3">
              <p className="text-[12px] text-[#797B7E]">Jun 10, 2023</p>
              <p className="h-3 border-r"></p>
              <p className="text-[12px] text-[#797B7E]">0 Comments</p>
              <p className="h-3 border-r"></p>
              <p className="text-[12px] text-[#121212]">
                <span className=" text-[#797B7E]">By </span>Tony Stark
              </p>
            </div>

            <h1 className="font-Josefin text-[24px] text-[#121212] font-bold mb-4">
              Risus nec feugiat in <br /> fermentum posuer . . .
            </h1>

            <p className="underline uppercase font-Libre font-semibold text-[13px] text-[#121212]">
              read more
            </p>
          </aside>
        </div>

        <div>
          <aside>
            <img
              src="https://cdn.shopify.com/s/files/1/0551/8001/articles/post6_720x.jpg?v=1630427719"
              alt=""
            />
          </aside>

          <aside>
            <div className="uppercase flex items-center font-Libre space-x-2 py-3">
              <p className="text-[12px] text-[#797B7E]">Jun 10, 2023</p>
              <p className="h-3 border-r"></p>
              <p className="text-[12px] text-[#797B7E]">0 Comments</p>
              <p className="h-3 border-r"></p>
              <p className="text-[12px] text-[#121212]">
                <span className=" text-[#797B7E]">By </span>Tony Stark
              </p>
            </div>

            <h1 className="font-Josefin text-[24px] text-[#121212] font-bold mb-4">
              We assure you it is really
              <br /> important . . .
            </h1>

            <p className="underline uppercase font-Libre font-semibold text-[13px] text-[#121212]">
              read more
            </p>
          </aside>
        </div>

        <div>
          <aside>
            <img
              src="https://cdn.shopify.com/s/files/1/0551/8001/articles/post7_720x.jpg?v=1630427995"
              alt=""
            />
          </aside>

          <aside>
            <div className="uppercase flex items-center font-Libre space-x-2 py-3">
              <p className="text-[12px] text-[#797B7E]">Jun 10, 2023</p>
              <p className="h-3 border-r"></p>
              <p className="text-[12px] text-[#797B7E]">0 Comments</p>
              <p className="h-3 border-r"></p>
              <p className="text-[12px] text-[#121212]">
                <span className=" text-[#797B7E]">By </span>Tony Stark
              </p>
            </div>

            <h1 className="font-Josefin text-[24px] text-[#121212] font-bold mb-4">
              Here you can find garments <br /> of all siz . . .
            </h1>

            <p className="underline uppercase font-Libre font-semibold text-[13px] text-[#121212]">
              read more
            </p>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Blogs;
