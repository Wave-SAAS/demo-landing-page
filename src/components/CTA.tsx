
const CTA = () => {
  return (
    <section className="mx-4 mb-16">
      <div className="bg-[#0C8F5B] rounded-2xl px-4 py-10 md:px-8 md:py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl text-center md:text-4xl font-medium text-white mb-6 md:mb-0">
          Customer Matters First
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfGRYllFm_r3LCnsO-ZC96zV0tcjRWl8bpsgqdeWol1uBtJoQ/viewform?usp=header" target="_blank"
            className="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#0C8F5B] border-1 border-white rounded-sm shadow-sm hover:bg-white hover:text-[#0C8F5B] hover:border-[#0C8F5B] focus:outline-none"
          >
            Try for free
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfGRYllFm_r3LCnsO-ZC96zV0tcjRWl8bpsgqdeWol1uBtJoQ/viewform?usp=header" target="_blank"
            className="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-[#0C8F5B] whitespace-no-wrap bg-white border-1 hover:border-white rounded-sm shadow-sm hover:bg-transparent hover:text-white border-white focus:outline-none"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA