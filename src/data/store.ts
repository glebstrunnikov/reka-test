import { defineStore } from "pinia";
import { reactive } from "vue";
import { SiteData } from "../types";
import data from "./data.json";
export const useSubsStore = defineStore("subs", {
  state: () => {
    const sites = reactive<SiteData[]>(data);
    return { sites };
  },
  getters: {
    percent(): number {
      const totalNumber: number = this.sites.length;
      let result: number = 0;
      this.sites.forEach((site) => {
        if (site.subscribed) {
          result++;
        }
      });

      return Math.floor((result / totalNumber) * 100);
    },
  },
  actions: {
    switch(site: string): any {
      for (let i = 0; i < this.sites.length; i++) {
        if (this.sites[i].site === site) {
          this.sites[i].subscribed = !this.sites[i].subscribed;
        }
      }
      console.log(this.sites);
    },
  },
});
