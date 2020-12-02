import CdrIcon from '../CdrIcon';
export default {
  name: 'IconExperiencesFitness',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default && this.$slots.default()}
      <path role="presentation" d="M18.383 12.105a6.024 6.024 0 01-3.075 5.242L14.4 19.11a1.113 1.113 0 01-.998.608H11.37a1.13 1.13 0 01-.997-.6l-.953-1.785v-.008a6.003 6.003 0 01-3.022-4.845H6v.375c0 .21-.165.375-.375.375a.371.371 0 01-.375-.375v-1.5c0-.21.165-.375.375-.375s.375.165.375.375v.375h.39a6.002 6.002 0 013.022-4.838c.008-.007.008-.007.008-.014l.96-1.778c.195-.367.57-.6.99-.6h2.033c.42 0 .802.232.997.607l.9 1.755a5.962 5.962 0 013.082 5.243zm-7.35-6.66l-.51.96a5.846 5.846 0 011.852-.3c.63 0 1.245.097 1.83.285l-.48-.938a.358.358 0 00-.33-.202h-2.032a.382.382 0 00-.33.195zm2.692 13.313l.495-.945a5.918 5.918 0 01-1.83.292h-.015a5.977 5.977 0 01-1.845-.293l.503.945a.366.366 0 00.33.203h2.032a.374.374 0 00.33-.203zm-1.357-1.395v.007h.007c2.902-.008 5.258-2.363 5.258-5.258A5.22 5.22 0 0016.095 8.4a5.257 5.257 0 00-8.97 3.713c0 2.895 2.355 5.25 5.243 5.25zm.014-9.953a4.702 4.702 0 014.696 4.695 4.702 4.702 0 01-4.695 4.695 4.702 4.702 0 01-4.695-4.695 4.702 4.702 0 014.695-4.695zm0 .75c-2.077 0-3.764 1.62-3.915 3.66h1.545l.503-.96a.363.363 0 01.352-.202c.143 0 .27.082.33.21l.976 1.964 1.087-2.482a.368.368 0 01.675-.008l.682 1.478h1.68c-.15-2.04-1.837-3.66-3.915-3.66zm0 7.89c2.01 0 3.66-1.523 3.9-3.473l-1.905-.007a.37.37 0 01-.337-.218l-.435-.937-1.072 2.453a.377.377 0 01-.338.224h-.008a.384.384 0 01-.337-.21l-1.005-2.024-.263.51a.358.358 0 01-.33.202H8.49c.232 1.957 1.875 3.48 3.893 3.48z"></path>
    </cdr-icon>)
  },
};
