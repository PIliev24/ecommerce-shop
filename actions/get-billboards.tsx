import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getBillboards = async (): Promise<Billboard[]> => {
  const res = await fetch(`${URL}/billboards`);
  return res.json();
};

export default getBillboards;
