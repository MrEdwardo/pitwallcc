import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Garage61Callback = () => {
  const [searchParams] = useSearchParams();
  const [redirectAttempted, setRedirectAttempted] = useState<boolean>(false);

  const deepLink = `vibecode://auth/garage61/callback?${searchParams.toString()}`;

  useEffect(() => {
    window.location.href = deepLink;
    setRedirectAttempted(true);
  }, [deepLink]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
      <div className="text-center space-y-4 px-6">
        <p className="text-lg text-neutral-300">Redirecting to app…</p>
        {redirectAttempted ? (
          <a
            href={deepLink}
            className="inline-block text-sm text-blue-400 underline underline-offset-4 hover:text-blue-300"
          >
            Tap here if the app didn't open
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Garage61Callback;
