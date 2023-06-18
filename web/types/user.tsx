export interface User {
    message: string;
    _id:            string;
    firstname:      string;
    lastname:       string;
    email:          string;
    password:       string;
    isBlocked:      boolean;
    isAdmin:        boolean;
    viewers:        any[];
    followers:      any[];
    following:      any[];
    posts:          any[];
    comments:       any[];
    blocked:        any[];
    userAward:      string;
    createdAt:      Date;
    updatedAt:      Date;
    __v:            number;
    fullname:       string;
    initials:       string;
    postCounts:     number;
    followersCount: number;
    followingCount: number;
    viewersCount:   number;
    blockedCount:   number;
    id:             string;
    lastPostDate:   string;
    isInactive:     boolean;
}