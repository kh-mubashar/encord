import { CTASectionFields } from '@/types/type';

interface CTAProps {
  ctaSection: CTASectionFields;
}

const CTA = ({ ctaSection }: CTAProps) => {
  if (!ctaSection) return null;

  const { title, subtitle, ctaText, link } = ctaSection;

  return (
    <section className="relative bg-blue-600 text-white py-20 px-6 flex items-center justify-center text-center">
      <div className="max-w-3xl animate-fadeIn">
        {/* CTA Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          {title}
        </h2>

        {/* Subtitle (Optional) */}
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-200">{subtitle}</p>
        )}

        {/* CTA Button */}
        <a href={link}>
          <button className="mt-6 px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 transition-all">
            {ctaText}
          </button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
