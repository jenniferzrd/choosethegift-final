import { ParentEntity } from './parentEntity.model';

export class ProjectModel extends ParentEntity {
    public title: string;
    public totalmoney: number;
    public comment: string;
}