import { createRenderer } from 'vue'
// @ts-ignore
import { createNodeOps } from './node_ops.ts'

const nodeOps = createNodeOps()
const { createApp } = createRenderer(nodeOps)

export { createApp }