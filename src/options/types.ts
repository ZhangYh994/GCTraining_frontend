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

export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    message: string;
    code: number;
}

export interface PagedResponse<T> {
    list: T[];
    total: number;
    page: number;
    pageSize: number;
}

export interface MenuItem {
    key: string;
    label: string;
    icon?: React.ReactNode;
    path?: string;
    children?: MenuItem[];
}
