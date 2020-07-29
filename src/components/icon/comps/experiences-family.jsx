import CdrIcon from '../CdrIcon';
export default {
  name: 'IconExperiencesFamily',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path role="presentation" d="M16.864 12.973a4.129 4.129 0 012.636 3.842.375.375 0 01-.375.375h-4.492c.227.454.367.959.367 1.5a.375.375 0 01-.375.375h-6a.375.375 0 01-.375-.375c0-.541.14-1.046.367-1.5H4.125a.375.375 0 01-.375-.375 4.128 4.128 0 012.638-3.842 2.624 2.624 0 01-1.136-2.158A2.628 2.628 0 017.877 8.19a2.628 2.628 0 012.625 2.625c0 .894-.452 1.684-1.137 2.158.22.086.43.19.63.31a1.87 1.87 0 011.63-.967c.704 0 1.31.393 1.631.967.2-.12.41-.225.63-.31a2.624 2.624 0 01-1.136-2.158 2.628 2.628 0 012.625-2.625A2.628 2.628 0 0118 10.815c0 .894-.451 1.684-1.136 2.158zM13.5 10.815c0 1.034.841 1.875 1.875 1.875a1.878 1.878 0 001.875-1.875 1.878 1.878 0 00-1.875-1.875 1.878 1.878 0 00-1.875 1.875zm-2.898 2.913a1.11 1.11 0 00-.102.462c0 .592.46 1.073 1.04 1.117.028.001.056.008.085.008.62 0 1.125-.505 1.125-1.125 0-.165-.037-.32-.102-.462a1.124 1.124 0 00-1.023-.663c-.455 0-.846.273-1.023.663zM6 10.815c0 1.034.841 1.875 1.875 1.875a1.878 1.878 0 001.875-1.875A1.878 1.878 0 007.875 8.94 1.878 1.878 0 006 10.815zM4.521 16.44h4.606c.34-.376.756-.681 1.233-.874a1.864 1.864 0 01-.61-1.376c0-.054.011-.104.016-.157a3.341 3.341 0 00-1.891-.593 3.38 3.38 0 00-3.354 3zm4.506 1.875h5.196a2.597 2.597 0 00-.457-1.125 2.63 2.63 0 00-.791-.75 2.604 2.604 0 00-1.35-.375c-.105 0-.206.017-.307.029-.052.006-.106.005-.157.014a2.604 2.604 0 00-.886.332c-.315.19-.58.45-.791.75a2.6 2.6 0 00-.457 1.125zm5.096-1.875h4.606a3.38 3.38 0 00-3.354-3c-.703 0-1.35.224-1.89.593.004.053.015.103.015.157 0 .545-.238 1.033-.61 1.376.476.194.893.498 1.232.874zM11.36 8.406l-1.296-1.295a1.094 1.094 0 01.012-1.546c.416-.415 1.136-.42 1.546-.011l.003.003.003-.002c.41-.41 1.13-.405 1.546.01.43.43.435 1.124.012 1.547L11.89 8.407a.377.377 0 01-.53-.001zm-.753-2.31a.344.344 0 00-.012.485l1.03 1.03 1.029-1.031a.344.344 0 00-.011-.485c-.133-.134-.36-.138-.486-.012l-.267.268a.375.375 0 01-.53 0l-.268-.268a.327.327 0 00-.233-.094.357.357 0 00-.252.106z"></path>
    </cdr-icon>)
  },
};
