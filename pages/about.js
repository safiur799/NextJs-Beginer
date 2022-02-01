import { useRouter } from "next/router";

const about = () => {
  const router = useRouter();
  return (
    <div>
      <h1>about page</h1>
      <button onClick={() => router.push("/")}>got to home</button>
    </div>
  );
};
export default about;
