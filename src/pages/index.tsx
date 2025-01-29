import { GetServerSideProps } from 'next';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import { FeatureSectionFields, LandingPageFields } from '@/types/type';
import { fetchLandingPage } from '@/utils/contentful';

interface HomeProps {
  landingPage: LandingPageFields;
}

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
