import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/payments">Payments</Link></li>
        <li><Link href="/users">Users</Link></li>
      </ul>
    </nav>
  );
}
