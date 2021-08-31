import { Fragment } from "react";
import Link from "next/link";

export default function UsersHelp() {
  return (
    <Fragment>
      <h1>Help users with next.js nested routing</h1> <br />
      <br />
      <Link href="/"> Back to Home</Link>
    </Fragment>
  );
}
