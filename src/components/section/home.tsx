import ButtonInvite from "../button/button-invite";

const Home = () => {
  return (
    <section className="bg-neutral-white text-primary-dark-blue relative flex flex-col gap-5 pb-20 min-h-[calc(100vh-4.125rem)]">
      {/* Image */}
      <div className="relative bg-[url('/images/bg-intro-mobile.svg')] bg-cover bg-[center_center] bg-no-repeat h-[calc(100vw*0.79)] after:bg-[url('/images/image-mockups.png')] after:bg-[length:93%] after:content-[''] after:bg-no-repeat after:bg-[center_bottom] after:absolute after:w-full after:h-full" />

      {/* Text Content */}
      <div className="m-6">
        <h1 className="font-normal text-4xl text-center leading-snug">
          Next generation digital banking
        </h1>
        <p className="text-[0.875rem] font-[300] text-center mt-4 max-w-md mx-auto leading-5 text-neutral-grayish-blue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <ButtonInvite />
      </div>
    </section>
  );
};

export default Home;
