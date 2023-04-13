import { BaseEntity } from 'typeorm';
export declare class UsersEntity extends BaseEntity {
    id: string;
    tg_id: string;
    full_name: string;
    user_name: string;
}
