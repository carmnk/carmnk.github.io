export const formatFullName = (
  title?: string | null,
  first_name?: string,
  last_name?: string
) =>
  `${title ? title + " " : ""}${first_name ? first_name + " " : ""}${
    last_name ?? ""
  }`;

export const formatReverseFullName = (
  title?: string | null,
  first_name?: string,
  last_name?: string
) => `${last_name}, ${title ? title + " " : ""}${first_name ?? ""}`;

export const formatFirstName = (title?: string | null, first_name?: string) =>
  `${title ? title + " " : ""}${first_name ?? ""}`;

export const makeInitials = (person: {
  first_name?: string;
  last_name?: string;
  company_name?: string;
}) => {
  const company_name = person?.company_name;
  return company_name
    ? `${company_name?.slice(0, 1)}${
        company_name?.indexOf(" ") !== -1
          ? company_name
              ?.substring(
                company_name.indexOf(" ") + 1,
                company_name.indexOf(" ") + 2
              )
              ?.toUpperCase?.()
          : ""
      }`
    : !person?.first_name && !person?.last_name
    ? ""
    : `${(person?.first_name ?? "").slice(0, 1)?.toUpperCase()}${(
        person?.last_name ?? ""
      )
        .slice(0, 1)
        .toUpperCase()}`;
};
export const sortByFullName = (
  array: {
    title?: string | null;
    first_name?: string | null;
    last_name?: string | null;
  }[]
) =>
  array?.sort((a, b) =>
    formatFullName?.(
      a?.title,
      a?.first_name ?? "",
      a?.last_name ?? ""
    )?.toLowerCase() >
    formatFullName?.(
      b?.title,
      b?.first_name ?? "",
      b?.last_name ?? ""
    )?.toLowerCase()
      ? 1
      : formatFullName?.(
          a?.title,
          a?.first_name ?? "",
          a?.last_name ?? ""
        )?.toLowerCase() <
        formatFullName(
          b?.title,
          b?.first_name ?? "",
          b?.last_name ?? ""
        )?.toLowerCase()
      ? -1
      : 0
  );
