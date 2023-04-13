import { BaseEntity } from 'typeorm';
export declare class UsersEntity extends BaseEntity {
    id: string;
    tg_id: number;
    full_name: string;
    user_name: string;
}
