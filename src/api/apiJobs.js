import supabaseClient from "@/utils/supabase";

function getCompanyLogoStorageUrl(supabase, companyName) {
  if (!companyName) return null;

  const safeName = companyName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!safeName) return null;

  return supabase.storage.from("company-logo").getPublicUrl(safeName).data.publicUrl;
}

function applyJobFilters(query, { location, company_id, searchQuery }) {
  if (location) {
    query = query.eq("location", location);
  }

  if (company_id) {
    query = query.eq("company_id", company_id);
  }

  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  return query;
}

function attachCompanyLogo(supabase, row) {
  if (!row?.company) return row;

  return {
    ...row,
    company: {
      ...row.company,
      logo_url: row.company.logo_url || getCompanyLogoStorageUrl(supabase, row.company.name),
    },
  };
}

function attachCompanyLogos(supabase, rows) {
  if (!rows?.length) return rows;

  return rows.map((row) => attachCompanyLogo(supabase, row));
}

export async function getJobs(token, { location, company_id, searchQuery }) {
  const supabase = await supabaseClient(token);
  let query = applyJobFilters(supabase.from("jobs").select("*, saved: saved_jobs(id), company: companies(name)"), {
    location,
    company_id,
    searchQuery,
  });

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching Jobs:", error);
    return null;
  }

  return attachCompanyLogos(supabase, data);
}

export async function getSavedJobs(token) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("saved_jobs")
    .select("*, job: jobs(*, company: companies(name))");

  if (error) {
    console.error("Error fetching Saved Jobs:", error);
    return null;
  }

  return data?.map((row) => ({
    ...row,
    job: attachCompanyLogo(supabase, row.job),
  }));
}

export async function getSingleJob(token, { job_id }) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("jobs")
    .select("*, company: companies(name), applications: applications(*)")
    .eq("id", job_id)
    .single();

  if (error) {
    console.error("Error fetching Job:", error);
    return null;
  }

  return attachCompanyLogo(supabase, data);
}

export async function saveJob(token, { alreadySaved }, saveData) {
  const supabase = await supabaseClient(token);
  const userId = saveData?.user_id;
  const jobId = saveData?.job_id;

  const { data: existingSave, error: lookupError } = await supabase
    .from("saved_jobs")
    .select("id")
    .eq("job_id", jobId)
    .eq("user_id", userId)
    .maybeSingle();

  if (lookupError) {
    console.error("Error checking saved job:", lookupError);
  }

  if (alreadySaved || existingSave) {
    const { data, error: deleteError } = await supabase
      .from("saved_jobs")
      .delete()
      .eq("job_id", jobId)
      .eq("user_id", userId);

    if (deleteError) {
      console.error("Error removing saved job:", deleteError);
      return data;
    }

    return data;
  } else {
    const { data, error: insertError } = await supabase
      .from("saved_jobs")
      .insert([saveData])
      .select();

    if (insertError) {
      console.error("Error saving job:", insertError);
      return data;
    }

    return data;
  }
}

export async function updateHiringStatus(token, { job_id }, isOpen) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("jobs")
    .update({ isOpen })
    .eq("id", job_id)
    .select();

  if (error) {
    console.error("Error Updating Hiring Status:", error);
    return null;
  }

  return attachCompanyLogos(supabase, data);
}

export async function getMyJobs(token, { recruiter_id }) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("jobs")
    .select("*, company: companies(name)")
    .eq("recruiter_id", recruiter_id);

  if (error) {
    console.error("Error fetching Jobs:", error);
    return null;
  }

  return attachCompanyLogos(supabase, data);
}

export async function deleteJob(token, { job_id }) {
  const supabase = await supabaseClient(token);

  const { data, error: deleteError } = await supabase
    .from("jobs")
    .delete()
    .eq("id", job_id)
    .select();

  if (deleteError) {
    console.error("Error deleting job:", deleteError);
    return data;
  }

  return data;
}

export async function addNewJob(token, _, jobData) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("jobs")
    .insert([jobData])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error Creating Job");
  }

  return data;
}