export function getCompanyLogoPath(companyName) {
  const safeName = companyName
    ?.toLowerCase()
    ?.replace(/[^a-z0-9]+/g, "-")
    ?.replace(/^-+|-+$/g, "");

  if (!safeName) return null;

  const logoMap = {
    google: "/companies/google.webp",
    netflix: "/companies/netflix.png",
    microsoft: "/companies/microsoft.webp",
    meta: "/companies/meta.svg",
    ibm: "/companies/ibm.svg",
    atlassian: "/companies/atlassian.svg",
    amazon: "/companies/amazon.svg",
    uber: "/companies/uber.svg",
  };

  return logoMap[safeName] || `/companies/${safeName}.svg`;
}
