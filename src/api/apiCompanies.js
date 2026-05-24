import supabaseClient from "@/utils/supabase";

export async function getCompanies(token) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase.from("companies").select("*");

  if (error) {
    console.error("Error fetching Companies:", error);
    return null;
  }

  return data;
}

export async function addNewCompany(token, _, companyData) {
  const supabase = await supabaseClient(token);

  const name = (companyData.name || "").trim();
  if (!name) throw new Error("Company name is required");

  if (companyData.logo) {
    try {
      const safeCompanyName = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      const fileName = safeCompanyName || "company";

      const { error: storageError } = await supabase.storage
        .from("company-logo")
        .upload(fileName, companyData.logo);

      if (storageError) {
        console.error("Error uploading Company Logo:", storageError);
        throw new Error(storageError.message || "Error uploading Company Logo");
      }

    } catch (error) {
      console.error("Logo upload failed:", error);
      throw error;
    }
  }

  const insertPayload = { name };

  const { data, error } = await supabase.from("companies").insert([insertPayload]).select();

  if (error) {
    console.error(error);
    throw new Error(error.message || "Error submitting Company");
  }

  return data;
}