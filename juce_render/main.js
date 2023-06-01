import { createApp } from './juce_render.ts';
import { store } from '../../src/stores/SetupStore';
import App from '../../src/App.vue';

const app = createApp(App);
const root = document.body;

app.use(store);
app.mount(root);
