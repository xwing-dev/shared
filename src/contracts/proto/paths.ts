import { join } from 'path';

export const PROTO_PATHS = {
    AUTH: join(__dirname, 'auth.proto'),
} as const;