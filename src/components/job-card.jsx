import { Heart, MapPinIcon, Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { getCompanyLogoPath } from "@/utils/company-logo";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/use-fetch";
import { deleteJob, saveJob } from "@/api/apiJobs";
import { useUser } from "@clerk/react";

import { BarLoader } from "react-spinners";

const JobCard = ({
  job,
  savedInit = false,
  onJobAction = () => {},
  isMyJob = false,
}) => {
  const { user } = useUser();
  const isRecruiter = user?.unsafeMetadata?.role === "recruiter";

  const { loading: loadingDeleteJob, fn: fnDeleteJob } = useFetch(deleteJob, {
    job_id: job.id,
  });

  const {
    loading: loadingSavedJob,
    data: savedJob,
    fn: fnSavedJob,
  } = useFetch(saveJob);

  const saved = savedJob !== undefined ? savedJob?.length > 0 : savedInit;

  const handleLogoError = (event) => {
    const fallbackLogo = getCompanyLogoPath(job.company?.name);
    if (fallbackLogo && event.currentTarget.src !== fallbackLogo) {
      event.currentTarget.src = fallbackLogo;
    }
  };

  const handleSaveJob = async () => {
    await fnSavedJob({
      user_id: user.id,
      job_id: job.id,
    });
    onJobAction();
  };

  const handleDeleteJob = async () => {
    await fnDeleteJob();
    onJobAction();
  };

  return (
    <Card className="relative flex flex-col">
      {loadingDeleteJob && (
        <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
      )}
      <CardHeader className="flex pr-10">
        <CardTitle className="font-bold">
          {job.title}
        </CardTitle>
        {isMyJob && (
          <Trash2Icon
            fill="red"
            size={18}
            className="absolute right-4 top-4 cursor-pointer text-red-300"
            onClick={handleDeleteJob}
          />
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between">
          {job.company && (
            <img
              src={job.company.logo_url || getCompanyLogoPath(job.company.name)}
              className="h-6"
              alt={job.company.name}
              onError={handleLogoError}
            />
          )}
          <div className="flex gap-2 items-center">
            <MapPinIcon size={15} /> {job.location}
          </div>
        </div>
        <hr />
        {job.description
          ? `${String(job.description).split(".")[0]}.`
          : ""}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link to={`/job/${job.id}`} className="flex-1">
          <Button variant="secondary" className="w-full cursor-pointer">
            More Details
          </Button>
        </Link>
        {!isMyJob && !isRecruiter && (
          <Button
            variant="outline"
            className="w-15"
            onClick={handleSaveJob}
            disabled={loadingSavedJob}
          >
            {saved ? (
              <Heart size={20} fill="red" stroke="red" />
            ) : (
              <Heart size={20} />
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default JobCard;