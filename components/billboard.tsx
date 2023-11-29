import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl w-full overflow-hidden flex items-center justify-center">
      <Image
        src={data?.imageUrl ?? ""}
        layout="fill"
        objectFit="cover"
        alt={""}
      />
    </div>
  );
};

export default Billboard;
