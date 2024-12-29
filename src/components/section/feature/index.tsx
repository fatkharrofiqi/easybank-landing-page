// import SimpleBudgetingIcon from "@/components/svg/icon-budgeting.svg";

import IconApi from "@/components/svg/icon-api";
import IconBudgeting from "@/components/svg/icon-budgeting";
import IconOnboarding from "@/components/svg/icon-onboarding";
import IconOnline from "@/components/svg/icon-online";
import Card from "./card";

interface Feature {
  title: string;
  description: string;
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; // SVG as a React component
}

const list: Feature[] = [
  {
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    image: IconOnline,
  },
  {
    title: "Simple Bugeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    image: IconBudgeting,
  },
  {
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    image: IconOnboarding,
  },
  {
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    image: IconApi,
  },
];

const Feature = () => {
  return (
    <section className="bg-neutral-light-grayish-blue text-primary-dark-blue text-center md:text-left">
      <div className="container flex flex-col gap-16 mx-auto py-20 px-6">
        {/* Featured intro */}
        <div className="flex flex-col gap-6 md:gap-8 md:max-w-[50%]">
          <h2 className="font-[300] text-3xl">Why choose Easybank?</h2>
          <p className="text-neutral-grayish-blue text-[0.875rem] md:text-base leading-normal">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {list.map((feature) => (
            <Card
              key={feature.title}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
