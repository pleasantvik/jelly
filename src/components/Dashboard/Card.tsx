import { numberFormatter } from "@/helpers/formatter";
import clsx from "clsx";
import { HiDotsVertical } from "react-icons/hi";

const Card = ({ isbg = false, color = "", count, percent, title }: ICard) => {
  return (
    <article
      className={clsx(
        "px-4 py-2 border border-red h-44 w-full flex  flex-col justify-around",
        {
          linearGradient: isbg && color === "green",
        }
      )}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl text-dark-main">{title}</h3>
        <HiDotsVertical />
      </div>
      <div>
        <p className="text-dark font-bold">{numberFormatter(count)}</p>
        <p className="rounded-xl mt-2">
          {isbg ? (
            <span className="bg-white rounded-full px-2   text-primary font-bold text-sm">
              +{percent}%
            </span>
          ) : (
            <span className="bg-primary text-primary-light text-sm rounded-full px-2">
              +{percent}%
            </span>
          )}
        </p>
      </div>
    </article>
  );
};

interface ICard {
  isbg?: boolean;
  color?: string;
  title: string;
  count: number;
  percent: number;
}
export default Card;
