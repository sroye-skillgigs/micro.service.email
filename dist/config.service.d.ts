export interface EnvConfig {
    [key: string]: string;
}
export declare class ConfigService {
    private readonly envConfig;
    constructor(filePath: string);
    get(key: string): string;
}
