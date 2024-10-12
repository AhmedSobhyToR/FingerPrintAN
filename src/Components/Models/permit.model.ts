import { Excavation } from "./excavation.mode";
import { Project } from "./project.model";
import { User } from "./user.model";

export interface Permit{
    id: string;
    user: User;
    project: Project;
    excavation: Excavation;
    status:string;
    RequestStatus: number;
    RequestStatusJson?: string;

}