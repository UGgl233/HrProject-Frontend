export interface houseDetails{
    address: String;
    numberOfPerson: String;
    employees: employee[]
}
export interface employee{
    FirstName:String;
    LastName:String;
    Phone:String
}

export interface facilityReport{
    title:String;
    description: String;
    createdBy: String;
    date: String;
    status: String;
}
export interface facilityReportsList{
    facilityReport: facilityReport[];
}