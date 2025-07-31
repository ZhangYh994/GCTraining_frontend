export const ROUTES = {
    DASHBOARD: '/dashboard',
    SCHEDULE: '/schedule',
    PRODUCTION: '/production',
    ATTENDANCE: '/attendance',
    BASIC_INFO: '/basic-info',
    PERMISSION: '/permission',
    ORGANIZATION: '/permission/organization',
    ROLE: '/permission/role',
    USER: '/permission/user',
    AUTH: '/permission/auth',
} as const;

export const USER_STATUS_OPTIONS = [
    { label: '正常', value: '正常' },
    { label: '禁用', value: '禁用' },
];

export const LOGIN_TYPE_OPTIONS = [
    { label: '用户名登录', value: 'username' },
    { label: '手机号登录', value: 'phone' },
    { label: '邮箱登录', value: 'email' },
];

export const DEPARTMENT_OPTIONS = [
    { label: '技术部', value: '技术部' },
    { label: '产品部', value: '产品部' },
    { label: '运营部', value: '运营部' },
    { label: '人事部', value: '人事部' },
    { label: '财务部', value: '财务部' },
];
