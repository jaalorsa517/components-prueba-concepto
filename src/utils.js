import { defineCustomElement as VueDefineCustomElement, h, createApp, getCurrentInstance } from "vue";

export const defineCustomElement = (component, { plugins = [] } = {}) =>
  VueDefineCustomElement({
    ...component,
    setup(props) {
      const app = createApp(component);

      // install plugins
      plugins.forEach(app.use);

      const inst = getCurrentInstance();
      Object.assign(inst.appContext, app._context);

      return () => h(component, props);
    },
  });

export const defineCustomElement2 = (component) => VueDefineCustomElement(component);
