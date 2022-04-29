import Link from 'next/link';

const HeaderLink = ({ href, children }) => (
  <li className="px-4 py-2 text-gray-50 hover:bg-blue-300">
    <Link href={href}>{children}</Link>
  </li>
);
const Header = () => {
  return (
    <header className="flex w-full h-full justify-between items-center bg-blue-400">
      <div className="pl-4 py-2">
        <h1 className="text-gray-50">Kevin's Blog</h1>
      </div>
      <div>
        <ul className="flex pr-4">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/about">About</HeaderLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
