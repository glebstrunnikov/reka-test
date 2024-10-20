import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { SiteData } from "./types";
import data from "./data.json";
import subscribtions from "./subscribe.json";

function printNoDescriptions(siteArr: SiteData[]): void {
  const result = siteArr;
  for (let i: number = 0; i < result.length; i++) {
    delete result[i].description;
  }
  //   Parse+stringify, чтобы в консоль выводился обычный объект, а не Proxy
  console.log(JSON.parse(JSON.stringify(result)));
}

export const useSubsStore = defineStore("subs", {
  state: () => {
    const userSubs = <SiteData[]>subscribtions;
    const sites = reactive<SiteData[]>(data);

    sites.forEach((site) => {
      const matchingSub = userSubs.find((sub) => sub.site === site.site);
      if (matchingSub) {
        site.subscribed = matchingSub.subscribed;
      } else {
        site.subscribed = false;
      }
    });

    const modalOpen = ref<boolean>(false);
    return { sites, modalOpen };
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
    toggleSub(site: string): any {
      for (let i = 0; i < this.sites.length; i++) {
        if (this.sites[i].site === site) {
          this.sites[i].subscribed = !this.sites[i].subscribed;
        }
      }
      printNoDescriptions(this.sites);
    },
    toggleAllSubs(isOn: boolean) {
      for (let i = 0; i < this.sites.length; i++) {
        this.sites[i].subscribed = isOn;
      }
      printNoDescriptions(this.sites);
    },
    toggleModal(isVisible: boolean) {
      this.modalOpen = isVisible;
      if (isVisible) {
        document.body.classList.add("body-no-scroll");
      } else {
        document.body.classList.remove("body-no-scroll");
      }
    },
  },
});
