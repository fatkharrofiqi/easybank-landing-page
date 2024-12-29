interface CardProps {
  image: string;
  author: string;
  title: string;
  description: string;
}

const Card = ({ image, author, title, description }: CardProps) => {
  return (
    <div className="group flex flex-col shadow-md rounded-md overflow-hidden cursor-pointer">
      <div className="h-[12.5rem]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-7 flex flex-col gap-2">
        <p className="text-neutral-grayish-blue text-xs mb-1">{author}</p>
        <h3 className="group-hover:text-primary-lime-green text-primary-dark-blue leading-snug text-[1.0625rem]">
          {title}
        </h3>
        <p className="text-[0.8125rem] leading-snug text-neutral-grayish-blue">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
