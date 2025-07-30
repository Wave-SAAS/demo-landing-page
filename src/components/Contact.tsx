/** @format */

const Contact = () => {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        How Can We Help? <span className="text-orange-500">Contact Us.</span>
      </h2>
      <div className="items-center gap-5">
        <a
          href="https://www.instagram.com/trywa.ve?igsh=dW1kNW10ZW11NmY5"
          target="_blank"
        >
          <button className="rounded-full mx-3 cursor-pointer">
            <img src="/linkedin-logo.png" className="!h-[35px] !w-[35px]" />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/company/budgifyatitsbest/"
          target="_blank"
        >
          <button className="rounded-full mx-3 cursor-pointer">
            <img src="/tiktok.png" className="!h-[35px] !w-[35px]" />
          </button>
        </a>
        <a
          href="https://www.tiktok.com/@trywave1?_t=ZM-8ySIphxW4iz&_r=1"
          target="_blank"
        >
          <button className="rounded-full mx-3 cursor-pointer">
            <img src="/instagram.png" className="!h-[35px] !w-[35px]" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
