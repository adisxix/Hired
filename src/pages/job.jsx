import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import MDEditor from "@uiw/react-md-editor";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/react";
import { Briefcase, DoorClosed, DoorOpen, MapPin } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ApplyJobDrawer } from "@/components/apply-job";
import ApplicationCard from "@/components/application-card";

import useFetch from "@/hooks/use-fetch";
import { getSingleJob, updateHiringStatus } from "@/api/apiJobs";
import { getCompanyLogoPath } from "@/utils/company-logo";

const JobPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();

  const {
    loading: loadingJob,
    data: job,
    fn: fnJob,
  } = useFetch(getSingleJob, {
    job_id: id,
  });

  useEffect(() => {
    if (isLoaded) fnJob();
  }, [isLoaded, fnJob]);

  const { loading: loadingHiringStatus, fn: fnHiringStatus } = useFetch(
    updateHiringStatus,
    {
      job_id: id,
    }
  );

  const handleStatusChange = (value) => {
    const isOpen = value === "open";
    fnHiringStatus(isOpen).then(() => fnJob());
  };

  const handleLogoError = (event) => {
    const fallbackLogo = getCompanyLogoPath(job?.company?.name);
    if (fallbackLogo && event.currentTarget.src !== fallbackLogo) {
      event.currentTarget.src = fallbackLogo;
    }
  };

  if (!isLoaded || loadingJob) {
    return (
      <div className="mb-4 w-full">
        <BarLoader color="#36d7b7" cssOverride={{ width: "100%" }} height={6} />
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/5 backdrop-blur-sm sm:p-6 lg:p-8">
        <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h1 className="gradient-title font-extrabold text-4xl sm:text-5xl lg:text-6xl">
              {job?.title}
            </h1>
            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3 sm:text-base">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1">
                <MapPin size={16} /> {job?.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1">
                <Briefcase size={16} /> {job?.applications?.length} Applicants
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1">
                {job?.isOpen ? <DoorOpen size={16} /> : <DoorClosed size={16} />}
                {job?.isOpen ? "Open" : "Closed"}
              </span>
            </div>
          </div>

          {job?.company?.name && (
            <div className="flex justify-start md:justify-end">
              <img
                src={job.company.logo_url || getCompanyLogoPath(job.company.name)}
                className="h-12 max-w-32 object-contain sm:h-14 sm:max-w-40"
                alt={job?.company?.name}
                onError={handleLogoError}
              />
            </div>
          )}
        </div>

        {job?.recruiter_id === user?.id && (
          <div className="mt-6">
            <Select onValueChange={handleStatusChange}>
              <SelectTrigger
                className={`h-12 w-full rounded-xl ${job?.isOpen ? "bg-green-950" : "bg-red-950"}`}
              >
                <SelectValue
                  placeholder={
                    "Hiring Status " + (job?.isOpen ? "( Open )" : "( Closed )")
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <div className="rounded-3xl border border-white/10 bg-background/70 p-5 shadow-sm sm:p-6 lg:p-8">
        <h2 className="text-2xl font-bold sm:text-3xl">About the job</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          {job?.description}
        </p>

        <h2 className="mt-8 text-2xl font-bold sm:text-3xl">
          What we are looking for
        </h2>
        <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
          <MDEditor.Markdown
            source={job?.requirements}
            className="bg-transparent sm:text-lg"
          />
        </div>

        {job?.recruiter_id !== user?.id && (
          <div className="mt-8">
            <ApplyJobDrawer
              job={job}
              user={user}
              fetchJob={fnJob}
              applied={job?.applications?.find((ap) => ap.candidate_id === user?.id)}
            />
          </div>
        )}

        {loadingHiringStatus && (
          <div className="mt-6 w-full">
            <BarLoader color="#36d7b7" cssOverride={{ width: "100%" }} height={6} />
          </div>
        )}
      </div>

      {job?.applications?.length > 0 && job?.recruiter_id === user?.id && (
        <div className="space-y-4">
          <h2 className="ml-1 text-xl font-bold sm:text-2xl">Applications</h2>
          <div className="grid gap-4">
            {job?.applications.map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPage;