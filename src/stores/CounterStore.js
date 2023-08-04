// import { reactive } from "vue";
//
// export const counter = reactive({
//     count: 0,
//
//     increment() {
//         if (this.count >= 10) {
//             return
//         }
//         this.count++
//     }
// })

import { defineStore } from "pinia";

export const useCounterStore = defineStore('this- counter', {
    state() {
        return {
            count: 11
        };
    },

    actions: {
        increment() {
            if (this.count <10) {
                this.count++
            }
        }
    },

    getters: {
        remaining() {
            return 10 - this.count
        }
    }
})

