import { getSession, signIn } from "next-auth/react";
import PolicyHeroSec from "@/components/policyhero/policyhero";
import { useEffect, useState } from "react";

export default function Sample() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      console.log(session);
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <>
      <PolicyHeroSec />
    </>
  );
}
