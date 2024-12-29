import ButtonInvite from "../../button/button-invite";

const Home = () => {
  return (
    <section className="bg-neutral-white text-primary-dark-blue relative">
      <div className="container mx-auto flex flex-col md:justify-center md:items-center md:flex-row gap-4 pb-20 md:pb-0">
        {/* Image */}
        <div
          className="relative
                    bg-[url('/images/bg-intro-mobile.svg')]
                    bg-cover
                    bg-[center_center]
                    bg-no-repeat
                    h-[calc(100vw*0.79)]
                    md:h-[41rem]
                    md:flex-[3]
                    md:order-2
                    md:bg-none
                    md:before:h-full
                    md:before:w-[130%]
                    md:before:absolute
                    md:before:bg-[0_83%]
                    md:before:bg-no-repeat
                    md:before:content-['']
                    md:before:bg-[length:122%]
                    md:before:bg-[url('/images/bg-intro-desktop.svg')]
                    after:content-['']
                    after:bg-[url('/images/image-mockups.png')]
                    after:bg-[length:93%]
                    after:bg-no-repeat
                    after:bg-[center_bottom]
                    after:absolute
                    after:w-full
                    after:h-full
                    md:after:absolute
                    md:after:bg-no-repeat
                    md:after:w-[110%]
                    md:after:h-[120%]
                    md:after:bg-[center_bottom]
                    md:after:left-[20%]
                    "
        />

        {/* Text Content */}
        <div className="md:flex-[2] p-6 text-center md:text-left flex flex-col gap-8">
          <h1 className="font-medium text-4xl md:text-[3.25rem] leading-snug">
            Next generation digital banking
          </h1>
          <p className="text-[0.875rem] md:text-[1.125rem] md:leading-[1.5] font-[300] mx-auto leading-5 text-neutral-grayish-blue">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="mt-1">
            <ButtonInvite />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
