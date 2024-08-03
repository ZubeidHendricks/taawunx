import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/users">Users</Link></li>
          <li><Link href="/payments">Payments</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          background: #333;
          color: #fff;
          padding: 1rem;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        li {
          display: inline;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        main {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Layout;
