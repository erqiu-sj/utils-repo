import { ApiImplementation } from '../common/apiImplementation';
export declare class UploadImage extends ApiImplementation<uploadImage.uploadImageConfig, uploadImage.success> {
    constructor();
    weChatDdkDoesNotInjectTriggerBehavior(): Promise<uploadImage.success>;
}
