import { GetServerSideProps } from 'next';
import { FeatureSectionFields, LandingPageFields } from '@/types/type';
import { fetchLandingPage } from '@/utils/contentful';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

interface HomeProps {
  landingPage: LandingPageFields;
}

// Lazy load components
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
  loading: () => <Loading />,
});

const Features = dynamic(() => import('@/components/Features'), {
  ssr: false,
  loading: () => <Loading />,
});

const CTA = dynamic(() => import('@/components/CTA'), {
  ssr: false,
  loading: () => <Loading />,
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
