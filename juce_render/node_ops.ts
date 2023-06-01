import { RendererOptions } from 'vue'

// Error here indicates an un-implemented node operation has been called
function noop(fn: string): any {
    //throw Error(`no-op: ${fn}`)
    console.log(`no-op: ${fn}`)
    return null;
}

export const svgNS = 'http://www.w3.org/2000/svg'
const doc = (typeof document !== 'undefined' ? document : null) as Document

// Implements the necessary node operations from https://github.com/vuejs/vue-next/blob/7ffa225aa334f0fd7da6ba30bee9109de3597643/packages/runtime-dom/src/nodeOps.ts
// export function createNodeOps(nodeMap: NodeMap): RendererOptions<any, any>
export function createNodeOps(): RendererOptions<any, any> {
    return {
        patchProp: (el, key, prevVal, nextVal) => {
            el.patchProp(key, prevVal, nextVal)
        },

        insert: (child, parent, anchor) => {
            parent.insertBefore(child, anchor || null)            
        },

        remove: child => {
          const parent = child.parentNode
          if (parent) {
            parent.removeChild(child)
          }
        },

        createElement: (tag, isSVG, customElementTag, props) => {
            //@ts-ignore
            var el;

            if (isSVG)
            //@ts-ignore
              el = doc.createElementNS(exports.svgNS, tag, props)
            else
              //@ts-ignore
              el = doc.createElement(tag, customElementTag ? { customElementTag } : undefined, props)

            if (tag === 'select' && props && props.multiple != null) {
              ;(el as HTMLSelectElement).setAttribute('multiple', props.multiple)
            }

            return el
        },

        createText: (text: string) => {
            return doc.createTextNode(text);
        },

        parentNode: (node) => node.parentNode as Element | null,

        createComment: (text) => doc.createComment(text),

        setText: (node, text) => {
          node.nodeValue = text
        },

        setElementText: (el, text) => {
          el.setElementText(text)
        },

        nextSibling: (node) => node.nextSibling,

        querySelector: (selector) => doc.querySelector(selector),

        setScopeId: (el, id) => el.setAttribute(id, ''),

        // Simplified from https://github.com/vuejs/core/blob/15adf251ab69459fc5713f66921781931f3a517f/packages/runtime-dom/src/nodeOps.ts#L76
        insertStaticContent: (content, parent, anchor, isSVG) => {
          const before = anchor ? anchor.previousSibling : parent.lastChild

          content = isSVG ? `<svg>${content}</svg>` : `<div>${content}</div>`
          parent.setInnerXML (content)

          return [
            // first
            before ? before.nextSibling! : parent.firstChild!,
            // last
            anchor ? anchor.previousSibling! : parent.lastChild!
          ]
        },
        
        // No-ops...
        cloneNode: () => noop('cloneNode'),
        //forcePatchProp: () => noop('forcePatchProp'),
    }
}
