export interface LoginResponse {
    status: string;
    data:   Data;
}

export interface Data {
    username: string;
    isAdmin:  boolean;
    token:    string;
}   

export interface Credentials {
    username: string;
    password: string;
}