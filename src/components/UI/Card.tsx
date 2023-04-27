interface CardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export const Card = (props: CardProps) => {
  return (
    <div className="border flex flex-col gap-8 shadow-sm rounded-xl border-slate-100 h-[378px] w-[398px]">
      <img
        src={props.image}
        alt=""
        className="max-h-44 w-full object-cover rounded-t-xl"
      />
      <div className="flex flex-col flex-grow">
        <div className="px-5 mb-5">
          <h3 className="text-lg mb-3">{props.title}</h3>
          <p className="text-sm text-zinc-500 mb-3">{props.description}</p>
        </div>

        <p className="text-green-600 px-5 pb-3">{props.price}</p>
      </div>
    </div>
  );
};
