export default {
    mounted(el, binding, vnode) {
      const { value } = binding;
      const handler = (event) => {
        if (
          (event.ctrlKey || event.metaKey) &&
          event.key === '/'
        ) {
          event.preventDefault();
          if (typeof value === 'function') {
            value();
          }
        }
      };
  
      document.addEventListener('keydown', handler);
  
      el._onKeydown = handler;
    },
    unmounted(el) {
      document.removeEventListener('keydown', el._onKeydown);
    },
  };
  