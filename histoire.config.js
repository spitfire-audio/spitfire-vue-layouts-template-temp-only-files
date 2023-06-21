import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';

export default defineConfig({
    defaultStoryProps: {
        layout: {
            type: 'grid',
            width: 200,
        },
    },
    plugins: [HstVue()],
    setupFile: 'src/histoire.setup.js',
    tree: {
        file: 'path',
    },
});
