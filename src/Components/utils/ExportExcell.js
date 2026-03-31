import * as XLSX from "xlsx";

export const exportToExcel = (
  data,
  fileName = "OverseasScholarships.xlsx"
) => {
  if (!data || data.length === 0) {
    alert("No data to export");
    return;
  }

  // ✅ Pick only required fields
const filteredData = data.map((item) => ({
  Name: `${item.givenName || ""} ${item.surname || ""}`,
  Email: item.email || "",
  DOB: item.dob || "",
  Gender: item.gender || "",
  HomeDistrict: item.homeDistrict || "",
  HomeProvince: item.homeProvince || "",
  Whatsapp: item.whatsapp || "",
  ParentsEmail: item.parentsEmail || "",
  ParentsWhatsapp: item.parentsWhatsapp || "",
  GuardiansWhatsapp: item.guardiansWhatsapp || "",
  CountryOfStudy: item.countryOfStudy || "",
  YearOfAdmission: item.yearOfAdmission || "",
  University: item.universityName || "",
  Course: item.courseName || "",
  CurrentYear: item.currentYear || "",
  AccountName: item.accountName || "",
  AccountNumber: item.accountNumber || "",
  BankName: item.bankName || "",
  BranchName: item.branchName || "",
  PassportExpiry: item.passportExpiry || "",
  ProfileImage: item.profileImage || "",
  PassportBio: item.passportBio || "",
  StemCerts: item.stemCerts || [],
  OfferLetter: item.offerLetter || [],
  AcceptanceLetter: item.acceptanceLetter || "",
  SemesterReports: item.semesterReports || [],
  Invoices: item.invoices?.map(inv => ({
    url: inv.url || "",
    description: inv.description || ""
  })) || [],
  ContractState: item.contractState || "",
  ParentsConsent: item.parentsConsent || "",
  PaymentDetails: item.paymentDetails || [],
  CreatedAt: item.createdAt,
  UpdatedAt: item.updatedAt
}));


  // Convert JSON to worksheet
  const worksheet = XLSX.utils.json_to_sheet(filteredData);

  // Get range of the sheet (to know header row)
  const range = XLSX.utils.decode_range(worksheet['!ref']);

  // Style the header row (first row = range.s.r)
  for (let C = range.s.c; C <= range.e.c; ++C) {
    const cellAddress = XLSX.utils.encode_cell({ r: range.s.r, c: C });
    if (!worksheet[cellAddress]) continue;

    worksheet[cellAddress].s = {
      font: { bold: true, color: { rgb: "FFFFFF" } }, // White text
      fill: { fgColor: { rgb: "4472C4" } },           // Blue background
      alignment: { horizontal: "center", vertical: "center" },
    };
  }

  // Create workbook and append worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Scholarships");

  // Trigger file download
  XLSX.writeFile(workbook, fileName);
};
