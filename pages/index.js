import Link from "next/link";
const IndexPage = () => {
  if (typeof window === "undefined") {
    return <p>Loading</p>;
  }
  return (
    <>
      <h1>index page</h1>
      <Link href="/about">about page</Link>
    </>
  );
};
export default IndexPage;
