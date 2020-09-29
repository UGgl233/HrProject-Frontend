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

export interface hrHouseList{
    houseList: hrHouseDetails[];
}

export interface hrHouseDetails{
    address: String;
    numEmployees: String;
    landlord:String;
    phone: String;
    email:String;
    employeeList: employeesHR[];
    facility: facilityDetails[];
}

export interface employeesHR{
    name:String;
    phone:String;
    car:String
}

export interface facilityDetails{
    id:String;
    description: String;
    quantity: String;
}
