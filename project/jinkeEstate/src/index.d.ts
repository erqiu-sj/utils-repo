/*
 * @Author: 邱狮杰
 * @Date: 2022-05-20 19:06:01
 * @LastEditTime: 2022-05-20 20:41:14
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/index.d.ts
 */

interface chooseImageConfig {
    count?: number
    sourceType?: ('album' | 'camera')[]
    sizeType: ('compressed' | 'original')[]
    success?: (res: {
        localIds: string[]
    }) => Promise<void> | void
    fail?: (res: any) => Promise<void> | void
    complete?: () => Promise<void> | void
}
interface uploadImageConfig {
    localId?: string
    isShowProgressTips?: number
    success?: (res: {
        serverId: string
    }) => Promise<void> | void
}
interface scanQRCodeConfig {
    needResult: number
    scanType?: ('barCode' | 'qrCode')[]
    success?: (res: {
        resultStr: string
    }) => Promise<void> | void
    fail?: (res: any) => Promise<void> | void
    complete?: () => Promise<void> | void
}

interface Window {
    wx: {
        chooseImage(conf?: Partial<chooseImageConfig>): Promise<void>
        uploadImage(conf?: Partial<uploadImageConfig>): Promise<void>
        scanQRCode(conf?: Partial<scanQRCodeConfig>): Promise<void>
        onMenuShareAppMessage(res: {
            title: string
            link: string
            imgUrl: string
            desc: string
            success?: () => void
        }): Promise<void>
        onMenuShareTimeline(res: {
            title: string
            link: string
            imgUrl: string
            success?: () => void
        }): Promise<void>
        getLocation(res: {
            success(res: { longitude: number, latitude: number }): void
        }
        ): Promise<void>
    }

}