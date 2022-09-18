import { AbsenceType } from "@crewmeister-code-challenge/constants";


export interface IEmployee{

    admitterId?: number,
    admitterNote?: string ,
    confirmedAt?: string,
    createdAt: string,
    crewId: number,
    endDate: string,
    id: number,
    memberNote: string,
    rejectedAt?: string,
    startDate: string,
    type: AbsenceType,
    userId: number

}
