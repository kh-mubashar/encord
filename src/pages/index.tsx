import { GetServerSideProps } from 'next';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import { FeatureSectionFields, LandingPageFields } from '@/types/type';
import { fetchLandingPage } from '@/utils/contentful';
import dynamic from 'next/dynamic';

interface HomeProps {
  landingPage: LandingPageFields;
}

// Lazy load components
const Hero = dynamic(() => import('../components/Hero'), {
  ssr: false, // Disable SSR for Hero (optional, you can use SSR if required)
  loading: () => <p>Loading Hero...</p>, // You can show a loading spinner or text
});

const Features = dynamic(() => import('../components/Features'), {
  ssr: false,
  loading: () => <p>Loading Features...</p>,
});

const CTA = dynamic(() => import('../components/CTA'), {
  ssr: false,
  loading: () => <p>Loading Call to Action...</p>,
});

const Home = ({ landingPage }: HomeProps) => {
  if (!landingPage) return <div>Loading...</div>;

  return (
    <>
      <Hero heroSection={landingPage.heroSection.fields} />
      <Features
        featureSection={landingPage.featureSection.map(
          (item: { fields: FeatureSectionFields }) => item.fields
        )}
      />
      <CTA ctaSection={landingPage.ctaSection.fields} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const landingPage = await fetchLandingPage();
  return {
    props: { landingPage },
  };
};

export default Home;
