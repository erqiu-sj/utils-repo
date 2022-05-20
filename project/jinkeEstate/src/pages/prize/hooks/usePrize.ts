/*
 * @Author: 邱狮杰
 * @Date: 2022-05-20 14:08:01
 * @LastEditTime: 2022-05-20 14:31:37
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/pages/prize/hooks/usePrize.ts
 */

import { useMemo } from 'react';
import iceCream from '~/assets/iceCream.png';
import liquor from '~/assets/liquor.png';
import { useCommon } from "~/hooks";

export function usePrize() {

    const { curStateWithCommon } = useCommon()

    const prize = useMemo(() => {

        const p = curStateWithCommon.prizeList.find(i => {
            return i.id === curStateWithCommon.lotteryId
        })

        const src = p?.id === 1 ? liquor : iceCream

        const clazz = p?.id === 1 ? 'mike' : 'iceCream'

        return {
            tips: p?.tips || '您没有中奖',
            title: p?.tips ? "恭喜您" : '很遗憾',
            src: !!!p?.id ? '' : src,
            clazz,
            id: p?.id
        }
    }, [curStateWithCommon])

    return {
        prize
    }

}
