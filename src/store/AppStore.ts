/**
 * App 整体相关 store
 */
import {observable} from "mobx";

export class AppStore {
    @observable
    name: string = 'canyu-frontend';
}

export const appStore = new AppStore();