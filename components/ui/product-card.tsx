"use client";

import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Expand } from "lucide-react";

import { Product } from "@/types";
import IconBtn from "@/components/ui/icon-btn";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  return (
    <>
      <div
        className="border rounded-lg p-4 shadow-md flex flex-col hover:cursor-pointer transition-shadow duration-300 hover:shadow-xl group"
        onClick={handleClick}
      >
        <div className="w-full h-full overflow-hidden flex justify-center items-center relative">
          <Image
            src={data.images[0].url}
            alt={data.name}
            width={240}
            height={240}
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <IconBtn
                onClick={onPreview}
                icon={<Expand size={20} className="text-gray-600" />}
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h2 className="text-lg font-bold">{data.name}</h2>
          <p className="text-gray-600">{data.category.name}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
