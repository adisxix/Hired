import { useUser } from "@clerk/react";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { BarLoader } from "react-spinners";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const navigateUser = useCallback(
    (currRole) => {
      navigate(currRole === "recruiter" ? "/post-job" : "/jobs");
    },
    [navigate]
  );

  const handleRoleSelection = async (role) => {
    await user
      .update({ unsafeMetadata: { role } })
      .then(() => {
        navigateUser(role);
      })
      .catch((err) => {
        console.error("Error updating role:", err);
      });
  };

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigateUser(user.unsafeMetadata.role);
    }
  }, [navigateUser, user]);

  if (!isLoaded) {
    return (
      <div className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-6">
        <BarLoader width={"100%"} color="#60a5fa" />
      </div>
    );
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-3xl flex-col items-center justify-center px-6 py-12">
      <h2 className="gradient-title text-center text-6xl font-extrabold tracking-tighter sm:text-7xl">
        I am a . . .
      </h2>

      <div className="mt-16 grid w-full gap-5 sm:grid-cols-2">
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleRoleSelection("candidate")}
          className="cursor-pointer rounded-2xl border border-blue-500/30 bg-white/5 px-6 py-10 text-center text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10"
        >
          <p className="text-3xl font-extrabold">Candidate</p>
          <p className="mt-3 text-sm text-white/65">Search and apply for jobs</p>
        </div>

        <div
          role="button"
          tabIndex={0}
          onClick={() => handleRoleSelection("recruiter")}
          className="cursor-pointer rounded-2xl border border-red-500/30 bg-white/5 px-6 py-10 text-center text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-red-400 hover:bg-red-500/10"
        >
          <p className="text-3xl font-extrabold">Recruiter</p>
          <p className="mt-3 text-sm text-white/65">Post jobs and manage applicants</p>
        </div>
      </div>
    </main>
  );
};

export default Onboarding;