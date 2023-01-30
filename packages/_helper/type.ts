import Vue from 'vue/types/umd'
import { CombinedVueInstance } from 'vue/types/vue'

export type CombinedComponent<PropsType> = CombinedVueInstance<Vue, object, object, object, {props: PropsType}>