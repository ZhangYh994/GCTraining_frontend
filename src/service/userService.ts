import api from './api';
import type { User, UserSearchParams } from '../options/types';

export const userService = {
    async getUserList(params?: UserSearchParams): Promise<User[]> {
        const response = await api.get('/users', { params });
        return response.data;
    },

    async updateUser(id: number, userData: Partial<User>): Promise<User> {
        const response = await api.put(`/users/${id}`, userData);
        return response.data;
    },

    async deleteUser(id: number): Promise<void> {
        await api.delete(`/users/${id}`);
    },

    async createUser(userData: Omit<User, 'id'>): Promise<User> {
        const response = await api.post('/users', userData);
        return response.data;
    },

};