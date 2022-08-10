import { ButtonCounter } from '../../common/components/button-counter';
import { Layout } from '../../common/components/layout';

export const HomePage = () => {
  return (
    <Layout>
      <ButtonCounter label="Hello" initialCount={97} />
      <ButtonCounter />
    </Layout>
  );
};
