import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';

interface Props {}

const DefaultLayout: React.FC<Props> = (props) => {
  return (
    <>
      <Header></Header>
      <main>{props.children}</main>
      <Footer></Footer>
    </>
  );
};

export default DefaultLayout;
