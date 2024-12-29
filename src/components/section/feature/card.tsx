interface CardProps {
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const Card = ({ image: Image, title, description }: CardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center md:justify-start mb-4">
        <Image />
      </div>
      <h3 className="font-[300] leading-[1.15] text-primary-dark-blue text-[1.25rem]">
        {title}
      </h3>
      <p className="text-neutral-grayish-blue text-[0.875rem] md:text-[1.125rem] leading-normal">
        {description}
      </p>
    </div>
  );
};

export default Card;
