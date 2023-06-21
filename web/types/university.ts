export interface University {
    _id:                 string;
    name:                string;
    phone:               string;
    email:               string;
    address:             string;
    links:               string;
    deadlines:           Deadline[];
    applicationFees:     ApplicationFee[];
    testPolicy:          TestPolicy;
    evaluations:         Evaluations;
    additionalInfo:      string;
    writingRequirements: WritingRequirements;
    academicPrograms:    AcademicProgram[];
    images:              Images;
}

export interface AcademicProgram {
    name: string;
    _id:  string;
}

export interface ApplicationFee {
    _id:    string;
    type:   string;
    amount: string;
}

export interface Deadline {
    _id:      string;
    term:     string;
    level:    string;
    deadline: string;
}

export interface Evaluations {
    other:              Other;
    coursesAndGrades:   string;
    recommendations:    string[];
    teacherEvaluations: string;
    _id:                string;
}

export interface Other {
    optional: number;
}

export interface Images {
    logo:         CampusGate;
    insideCampus: CampusGate;
    campusGate:   CampusGate;
}

export interface CampusGate {
    url: string;
    _id: string;
}

export interface TestPolicy {
    type:    string;
    details: string;
    _id:     string;
}

export interface WritingRequirements {
    personalEssay:     string;
    collegeQuestions:  string;
    writingSupplement: string;
    _id:               string;
}
