export interface User {
    id: number;
    username: string;
    password?: string;
    phone: string;
    email: string;
    nickname: string;
    department: string;
    manager: string;
    status: string;
    loginType: string;
}

export interface UserSearchParams {
    username?: string;
    department?: string;
    status?: string;
    page: number;
    pageSize: number;
}

