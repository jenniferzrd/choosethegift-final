import { ParentEntity } from './parentEntity.model';

export class ItemModel extends ParentEntity {
    public title: string;
    public img: string;
    public comment: string;
    public price: number;
    public jaime: boolean;
    public quantity: number;
}