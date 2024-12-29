import Card from "./card";

interface News {
  image: string;
  author: string;
  title: string;
  description: string;
}

const data: News[] = [
  {
    image: "/images/image-currency.jpg",
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    image: "/images/image-restaurant.jpg",
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    image: "/images/image-plane.jpg",
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    image: "/images/image-confetti.jpg",
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
  },
];

const Article = () => {
  return (
    <section className="bg-neutral-very-light-gray text-primary-dark-blue">
      <div className="container mx-auto py-20 px-6">
        <h2 className="text-[1.875rem] font-[300] leading-normal mb-6">
          Latest Article
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {data.map((article) => (
            <Card
              key={article.title}
              image={article.image}
              title={article.title}
              description={article.description}
              author={article.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;
