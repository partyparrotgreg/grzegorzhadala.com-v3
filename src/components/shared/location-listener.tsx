import { useEffect } from "react";
import { useRouter } from "next/router";

export function UrlChangeListener() {
  const router = useRouter();
  useEffect(() => {
    console.log(`The page is now: ${router.pathname}`);
  }, [router]);
  return <></>;
}
