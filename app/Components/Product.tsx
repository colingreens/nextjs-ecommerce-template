import { AddItemType } from "@/types/AddItemType";
import formatPrice from "@/util/PriceFormat";
import Image from "next/image";

export default function Product({ name, image, price }: AddItemType) {
  return (
    <div>
      <Image src={image} alt={name} width={400} height={400} />
      <h1>{name}</h1>
      {price ? formatPrice(price) : "N/A"}
    </div>
  );
}
