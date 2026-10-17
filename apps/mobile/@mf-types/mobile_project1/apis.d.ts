
    export type RemoteKeys = 'mobile_project1';
    type PackageType<T> = T extends 'mobile_project1' ? typeof import('mobile_project1') :any;