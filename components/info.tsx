"use client";

import { Product } from "@/types";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <hr className="my-4" />
      <p className="text-opacity-50 text-black text-xl pr-10 leading-10 tracking-wide">
        If you`re interested in purchasing an art piece featuring this design –
        whether as a print, on a t-shirt, pillow, or any other format – please
        reach out to us via email. We`d be delighted to assist you in owning a
        piece of this unique art. Contact us at{" "}
        <span
          onClick={(e) => {
            window.location.href = "mailto:neda.todorova22@gmail.com";
            e.preventDefault();
          }}
          className="text-blue-400 hover:underline hover:cursor-pointer"
        >
          neda.todorova22@gmail.com
        </span>{" "}
        for further details and to place your order.
      </p>
    </div>
  );
};

export default Info;
