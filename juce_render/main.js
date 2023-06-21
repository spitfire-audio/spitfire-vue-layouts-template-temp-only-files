import { createApp } from './juce_render.ts';
import { store } from '@/stores/SetupStore';
import App from '@/App.vue';

const app = createApp(App);
const root = document.body;

app.use(store);
app.mount(root);
