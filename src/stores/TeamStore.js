import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', {
    // state() {
    //     return {
    //         name: '',
    //         spot: 0,
    //         members: []
    //     }
    // },
    state: () => ({
        name: '',
        spot: 5,
        members: []
    }),

    actions: {
        async fill() {
            const r = await import('@/team.json')
            this.$state = r.default;
        }

            // fill() {
            //     import('@/team.json').then(r => {
            //         this.state = r.default;
            //         let data = r.default
            //
            //         this.name = data.name;
            //         this.spot = data.spot;
            //         this.members = data.members;
            //     })
            // }

            // fill() {
            //     import('@/team.json').then(r => {
            //         let data = r.default;
            //         this.$patch({
            //             name = data.name;
            //             spot = data.spot,
            //             members = data.members
            //         })
            //     })
            // }
    },

    getters: {
        spotRemaining() {
            return this.spot - this.members.length
        }
    }
})