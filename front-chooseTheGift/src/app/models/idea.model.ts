import { ParentEntity } from './parentEntity.model';

export class IdeaModel extends ParentEntity {
    public title: string;
    public img: string;
    public comment: string;
    public price: number;
    public jaime: boolean;
    public quantity: number;

}