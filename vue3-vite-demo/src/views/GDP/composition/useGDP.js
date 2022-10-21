import { computed, watch, ref } from 'vue'
import gsap from 'gsap'

const colors = ["#334552", "#B34335", "#6E9FA5", "#A2C3AC", "#C8846C"];

export default function useRef(gdpRef, maxSize) {

    // 计算出max
    const maxValue = computed(() => {
        if (gdpRef.value.length) {
            return Math.max(...gdpRef.value.map(it => it.value))
        }
        return 0;
    });

    const bars = ref([]);
    // 条的最新状态
    const barTarget = computed(() => {
        console.log(gdpRef.value)
        return gdpRef.value.map(
            (it, i) => ({
                ...it,
                color: colors[i % color.length],
                size: (it.value / maxValue.value) * maxSize
            })
        )
    });

    watch(barTarget, () => {
        // 将bars变化到barsTarget
        for (let i = 0; i < barTarget.value.length; i++) {
            if (!bar.value[i]) {
                bar.value[i] = {
                    ...barTarget.value[i],
                    size: 0,
                    value: 0,
                }
            }
            /**
             * 使用 动画库 gsap
             * bars.value[i] 中的属性 逐步变化到 barsTarget.value[i]
             */
            gsap.to(bars.value[i]), {
                ...barTarget.value[i],
                duration: 1
            }
        }
    },
        { deep: true }
    )

    return {
        bars,
    }
}