import { useEffect, useState } from "react";

export const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowBanner(false);
    }, 2000);
  }, []);
  return showBanner ? (
    <h1 className="success-banner text-center my-4 mx-2 bg-green-400 capitalize rounded-sm ">
      {" "}
      Vote Recorded
    </h1>
  ) : null;
};
