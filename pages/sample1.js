import PolicyHeroSec from "@/components/policyhero/policyhero";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
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

function UnauthPage() {
  return <PolicyHeroSec />;
}

export default UnauthPage;
