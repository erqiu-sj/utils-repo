/// <reference types="react" />
import { InnerAudioContext } from "@tarojs/taro";
export declare function useAudio(): {
    audioInstanceToUpdate: (conf: Partial<InnerAudioContext>) => void;
    audioInstanceRef: import("react").MutableRefObject<InnerAudioContext | undefined>;
};
