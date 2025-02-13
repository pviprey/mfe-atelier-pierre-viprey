
    export type RemoteKeys = 'mfe/button' | 'mfe/header';
    type PackageType<T> = T extends 'mfe/header' ? typeof import('mfe/header') :T extends 'mfe/button' ? typeof import('mfe/button') :any;