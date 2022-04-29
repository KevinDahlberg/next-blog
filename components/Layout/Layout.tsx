import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="h-full w-full grid grid-rows-[60px_auto_100px]">
        <div className="h-full w-full flex items-center">
          <Header />
        </div>
        <div className="bg-gray-50">{children}</div>
        <div className="h-full w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
