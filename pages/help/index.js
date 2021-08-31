import Link from "next/link";

export default function Help() {
  return (
    <div>
      <button>
        <Link href="/help/users">Help Users With Nested Routing</Link>
      </button>
      <br />
      <br />
      <Link href="/">Back to Home</Link>
      <h1>Next.js Help out of the the box 🆘</h1>
    </div>
  );
}
