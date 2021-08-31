import { Fragment } from "react";
import Link from "next/link";

export default function FahadViewsAboutNextJS() {
  return (
    <Fragment>
      <Link href="/"> Go to Home </Link>
      <br />
      <ul>
        <li>
          Framework of React.js Library build with the bundle of advantages
        </li>
        <li>Production ready apps</li>
        <li>Automatic Routing according to the strucure of the pages folder</li>
        <li>No need to maintain the routing like we do in React.js</li>
        <li>
          Benificient when even we are doing SEO (Search Engine Optimization)
        </li>
        <li>It have server side routing</li>
        <li>
          Data fetching and data crawling suppose to be in the server side
        </li>

        <li>It asutomatically pre render the pages in the server by default</li>
        <li>
          We can have the dynamic routing to write over the file name in
          paranthesis like [routings]
        </li>
        <li>
          We can get the data from the URL and can process that data using
          dynamic routing.
        </li>
        <li>
          It also builds the single page full stack application that we can
          create api folder and we can write the Node.js Code also
        </li>
      </ul>
    </Fragment>
  );
}
