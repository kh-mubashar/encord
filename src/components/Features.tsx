import React from 'react';
import Image from 'next/image';
import { FeatureSectionFields } from '@/types/type';

interface FeaturesProps {
  featureSection: FeatureSectionFields[];
}

const Features = ({ featureSection }: FeaturesProps) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Title (Optional) */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Features
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featureSection?.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-center"
            >
              {/* Feature Icon */}
              {feature.icon?.fields.file?.url && (
                <div className="relative w-30 h-30 mb-4">
                  <Image
                    src={`https:${feature.icon.fields.file.url}`}
                    alt={feature.title}
                    width={200}
                    height={200}
                    sizes="(max-width: 640px) 100px, (max-width: 1024px) 150px, 100px"
                    className="object-contain mb-4"
                  />
                </div>
              )}

              {/* Feature Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
