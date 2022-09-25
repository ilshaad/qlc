// all the select option for the accordian.
// for easier to loop list & cleaner look

// type accordianDataType = titleBodyObject;
type accordianDataType = { title: string; min: number; allOptions: string[] };

// latest order same as index file
// order date as descending (newest first)
export const accordianData: accordianDataType[] = [
  // evidenceAccordian:
  {
    title: "Add evidence",
    min: 5,
    allOptions: ["Evidence 1", "Evidence 2", "Evidence 3"],
  },
  // costAccordian:
  {
    title: "Add costs",
    min: 20,
    allOptions: ["Payroll", "Subcontractors", "Other"],
  },
  // documentAccordian:
  {
    title: "Add documents",
    min: 5,
    allOptions: ["Company Accounts", "Tax Comps", "CT600"],
  },
];
