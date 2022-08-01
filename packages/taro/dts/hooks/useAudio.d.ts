import { InnerAudioContext } from "@tarojs/taro";
export declare function useAudio(): {
    audioInstance: InnerAudioContext;
    audioInstanceToUpdate: (conf: Partial<InnerAudioContext>) => void;
};
