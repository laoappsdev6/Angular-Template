export interface Req {
    object: string;
    method: string;
    data: Object;
    token: string;
}

export interface Res {
    status: number;
    message: string
    data: Array<any>;
    object: string;
    method: string;
}

export enum ECode {
    success = 1,
    fail = 0
}

export interface Base {
    id: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface Page extends Base {
    pageId: string;
    pageName: string;
    pageToken: string;
}