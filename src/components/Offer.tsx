/** @format */

const Offer = () => {
  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-medium text-center text-gray-900 mb-16">
        What we offer
      </h2>

      <div className="space-y-16">
        {/* Specialized Bulk Emailing */}
        <div className="sm:text-left text-center">
          <h3 className="text-3xl font-medium text-gray-900 mb-6">
            Specialized Bulk Emailing
          </h3>
          <p className="text-lg text-gray-600 mx-auto leading-relaxed">
            With Wave, harness AI-powered filtering and smart segmentation to
            deliver highly targeted emails—no manual sorting or guesswork. Our
            system pays close attention to every detail, ensuring you send the
            right message to the right audience—all in one streamlined process
            that takes minutes, not hours.
          </p>
        </div>

        {/* Personalized Template */}
        <div className="sm:text-right text-center">
          <h3 className="text-3xl font-medium text-gray-900 mb-6">
            Personalized Template
          </h3>
          <p className="text-lg text-gray-600 mx-auto leading-relaxed">
            Wave integrates seamlessly with APIs from Canva, Figma, and Adobe,
            empowering you to design email templates exactly as you envision.
            Enjoy full flexibility in creating personalized, visually engaging
            emails tailored to your audience—right from the design tools you
            know and love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
