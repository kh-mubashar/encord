// Define types for file object, which is used for both backgroundImage and icon
export interface FileField {
  fields: {
    file: {
      url: string; // The URL of the file (image, for example)
    };
  };
}

// Define HeroSectionFields type
export interface HeroSectionFields {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: FileField; // backgroundImage is an object containing file.url
}

// Define FeatureSectionFields type (for the feature icon)
export interface FeatureSectionFields {
  title: string;
  description: string;
  icon: FileField; // icon is an object containing file.url
}

export interface CTASectionFields {
  title: string;
  subtitle: string;
  ctaText: string;
  link: string;
}

export interface LandingPageFields {
  title: string;
  heroSection: { fields: HeroSectionFields };
  featureSection: { fields: FeatureSectionFields }[];
  ctaSection: { fields: CTASectionFields };
}
