import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
function UnauthPage(context) {
  const router = useRouter();
  return (
    <div>
      <h1>go to Home</h1>
      <button onClick={() => router.push("/")}>Go to login page</button>
    </div>
  );
}

export default UnauthPage;
