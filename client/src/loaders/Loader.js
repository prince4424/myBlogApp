import { Loader, Placeholder } from 'rsuite';

const Loaderr = () => (
  <div>
    <Placeholder.Paragraph rows={8} />
    <Loader center content="loading" />
  </div>
);

export default Loaderr;
