// all the select option for the accordian.
// for easier to loop list & cleaner look

// type accordianDataType = titleBodyObject;
type accordianDataType = { title: string; allOptions: string[] };

// latest order same as index file
// order date as descending (newest first)
// iK ensure to change the order within the index file if you change the order here
export const accordianData: accordianDataType[] = [
  // evidenceAccordian:
  {
    title: "Add evidence",
    allOptions: ["Evidence 1", "Evidence 2", "Evidence 3"],
  },
  // costAccordian:
  {
    title: "Add costs",
    allOptions: ["Payroll", "Subcontractors", "Other"],
  },
  // documentAccordian:
  {
    title: "Add documents",
    allOptions: ["Company Accounts", "Tax Comps", "CT600"],
  },
];
