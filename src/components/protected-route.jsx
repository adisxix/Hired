import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/react";
import { BarLoader } from "react-spinners";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname } = useLocation();
  const isRecruiter = user?.unsafeMetadata?.role === "recruiter";

  if (!isLoaded) {
    return (
      <div className="mb-4 w-full">
        <BarLoader color="#36d7b7" cssOverride={{ width: "100%" }} height={6} />
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" replace />;
  }

  if (!user?.unsafeMetadata?.role && pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace />;
  }

  if (isRecruiter && (pathname === "/saved-jobs" || pathname === "/saved-job")) {
    return <Navigate to="/jobs" replace />;
  }

  return children;
};

export default ProtectedRoute;