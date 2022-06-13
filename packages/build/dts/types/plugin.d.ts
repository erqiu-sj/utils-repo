import { UserConfigExport } from "vite";
/**
 * @description 合并配置基础继承抽象类
 */
export declare abstract class MergeConfiguration {
    abstract getConfig(userConfig: UserConfigExport): UserConfigExport;
}
