import { ApiImplementation } from "../common/apiImplementation";
export declare class DownloadImage extends ApiImplementation<downloadImage.downloadImageConfig, downloadImage.success> {
    constructor();
    weChatDdkDoesNotInjectTriggerBehavior(): Promise<downloadImage.success>;
}
