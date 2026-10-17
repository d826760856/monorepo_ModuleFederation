
    export type RemoteKeys = 'mobile_project2/export-app';
    type PackageType<T> = T extends 'mobile_project2/export-app' ? typeof import('mobile_project2/export-app') :any;