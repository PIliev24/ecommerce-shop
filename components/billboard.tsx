import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="rounded-xl w-full overflow-hidden flex justify-center items-start h-full">
      <Image src={data?.imageUrl ?? ""} alt={""} fill objectFit="contain" />
    </div>
  );
};

export default Billboard;
