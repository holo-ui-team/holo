import Vue from 'vue/types/umd'
import { CombinedVueInstance } from 'vue/types/vue'

export type RenderHelperVueComponent<PropsType> = CombinedVueInstance<Vue, object, object, object, {props: PropsType}>