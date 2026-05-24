import { useEffect, useState } from "react";
import { useUser } from "@clerk/react";
import { State } from "country-state-city";
import { BarLoader } from "react-spinners";
import useFetch from "@/hooks/use-fetch";

import JobCard from "@/components/job-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getCompanies } from "@/api/apiCompanies";
import { getJobs } from "@/api/apiJobs";

const JobListing = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");

  const { isLoaded } = useUser();

  const {
    data: companies,
    fn: fnCompanies,
  } = useFetch(getCompanies);

  const {
    loading: loadingJobs,
    data: jobs,
    fn: fnJobs,
  } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded) {
      fnCompanies();
    }
  }, [isLoaded, fnCompanies]);

  useEffect(() => {
    if (isLoaded) fnJobs();
  }, [isLoaded, location, company_id, searchQuery, fnJobs]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput.trim());
  };

  const clearFilters = () => {
    setSearchInput("");
    setSearchQuery("");
    setCompany_id("");
    setLocation("");
  };

  if (!isLoaded) {
    return (
      <div className="mb-4 w-full">
        <BarLoader color="#36d7b7" cssOverride={{ width: "100%" }} height={6} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="gradient-title pb-2 text-center text-6xl font-extrabold sm:text-7xl">
        Latest Jobs
      </h1>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/5 backdrop-blur-sm sm:p-5">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Search
              </label>
              <Input
                type="text"
                placeholder="Search jobs by title"
                name="search-query"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="h-12 rounded-xl px-4 text-sm shadow-sm"
              />
            </div>
            <Button
              type="submit"
              className="h-12 w-full rounded-xl px-6 lg:w-36"
              variant="blue"
            >
              Search
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Location
              </label>
              <Select value={location} onValueChange={(value) => setLocation(value)}>
                <SelectTrigger className="h-12 rounded-xl px-4">
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {State.getStatesOfCountry("IN").map(({ name }) => (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Company
              </label>
              <Select value={company_id} onValueChange={(value) => setCompany_id(value)}>
                <SelectTrigger className="h-12 rounded-xl px-4">
                  <SelectValue placeholder="Filter by company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {companies?.map(({ name, id }) => (
                      <SelectItem key={name} value={id}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:self-end">
              <label className="text-sm font-medium text-transparent select-none">
                Actions
              </label>
              <Button
                type="button"
                className="h-12 w-full rounded-xl px-5 md:w-36"
                variant="destructive"
                onClick={clearFilters}
              >
                Clear
              </Button>
            </div>
          </div>
        </form>
      </div>

      {searchQuery || location || company_id ? (
        <div className="flex flex-wrap gap-2">
          {searchQuery && (
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
              Search: {searchQuery}
            </span>
          )}
          {location && (
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-600 dark:text-emerald-300">
              Location: {location}
            </span>
          )}
          {company_id && (
            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-600 dark:text-amber-300">
              Company selected
            </span>
          )}
        </div>
      ) : null}

      {loadingJobs && (
        <div className="mt-4 w-full">
          <BarLoader color="#36d7b7" cssOverride={{ width: "100%" }} height={6} />
        </div>
      )}

      {loadingJobs === false && (
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobs?.length ? (
            jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                savedInit={job?.saved?.length > 0}
              />
            ))
          ) : (
            <div>No Jobs Found 😢</div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobListing;
