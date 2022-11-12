import { ApiImplementation } from '../common/apiImplementation';
export declare class ChooseImage extends ApiImplementation<chooseImage.chooseImageConfig, chooseImage.success> {
    constructor();
    weChatDdkDoesNotInjectTriggerBehavior(): Promise<chooseImage.success>;
}
