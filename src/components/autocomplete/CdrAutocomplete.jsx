import style from './styles/CdrAutocomplete.scss';

export default {
  name: 'CdrAutocomplete',
  data() {
    return {
      style,
      activeIndex: -1,
      // focused?
    };
  },
  render() {
    return (
      <div>

        // // slot for input component
        // @input="update property that feeds into autocomplete"



      </div>
    );
  },
};
//     onMouseSelectIndex(index) {
//       this.inputValue = this.flattenedMatches[index] || '';
//       this.activeIndex = index;
//       this.emitAutocompleteChange();
//       this.clearActiveIndex();
//       this.focused = false;
//     },
//     handleInput(val) {
//       const didChange = this.previousValue !== val;
//       if (didChange) {
//         this.$emit('autocomplete-change', this.inputValue);
//         this.$emit('clear-autocomplete-selection');
//         this.getMatches(this.inputValue);
//       }
//     },
//     handleKeyDown(e) {
//       if (!this.matches) return;
//
//       switch (e.key) {
//         case 'ArrowUp':
//         case 'Up': {
//           if (this.activeIndex > -1) {
//             this.focused = true;
//             this.activeIndex -= 1;
//             this.setValueByIndex(this.activeIndex);
//           }
//           break;
//         }
//         case 'ArrowDown':
//         case 'Down': {
//           if (this.activeIndex < (this.matches.length - 1)) {
//             this.focused = true;
//             this.activeIndex += 1;
//             this.setValueByIndex(this.activeIndex);
//           }
//           break;
//         }
//         case 'Enter':
//           if (this.activeIndex > -1) {
//             e.preventDefault();
//             this.inputValue = this.flattenedMatches[this.activeIndex] || '';
//             this.emitAutocompleteChange();
//           } else {
//             this.$emit('autocomplete-submit');
//           }
//           this.clearActiveIndex();
//           this.focused = false;
//           break;
//         default:
//           this.focused = true;
//           break;
//       }
//     },
//     handleBlur() {
//       this.focused = false;
//       this.$emit('autocomplete-focus', false);
//     },
//     onFocus() {
//       this.activeIndex = -1;
//       this.getMatches(this.inputValue);
//       this.focused = true;
//       this.$emit('autocomplete-focus', true);
//     },
//     setValueByIndex(index) {
//       this.inputValue = this.flattenedMatches[index] || '';
//     },
//     setCurrentValue(value) {
//       if (value === this.inputValue) return;
//       this.inputValue = value;
//     },
//   },
// };
// </script>
// <template>
//   <div>
//     <div class="autocomplete-container">
//       <slot name="input"/>
//     </div>
//
//     <autocomplete-list
//       :debug="debug"
//       :focused="focused"
//       :matches="matches"
//       :match-property="matchProperty"
//       :active-index="activeIndex"
//       @mouse-selected-index="onMouseSelectIndex"
//     >
//       <template v-for="(slot, slotName) in $scopedSlots" :slot="slotName" slot-scope="slotProps">
//         <slot :name="slotName" v-bind="slotProps"></slot>
//       </template>
//     </autocomplete-list>
//   </div>
// </template>


// <script>
// export default {
//   name: 'autocomplete-list',
//   props: {
//     matchProperty: {
//       type: String,
//       required: false,
//     },
//     matches: {
//       type: Array,
//       required: false,
//     },
//     activeIndex: {
//       type: Number,
//       default: -1,
//     },
//     focused: {
//       type: Boolean,
//       default: false,
//     },
//     debug: {
//       type: Boolean,
//       requred: false,
//     },
//   },
//   methods: {
//     setActiveIndex(index) {
//       this.$emit('mouse-selected-index', index);
//     },
//   },
// };
// </script>
// <template>
//   <div
//     v-if="focused && matches && matches.length > 0 || debug"
//     class="autocomplete-list"
//   >
//     <button
//       type="button"
//       tabindex="-1"
//       v-for="(match, index) in matches"
//       :key="`match-${index}`"
//       :class="{ active : index === activeIndex }"
//       :data-ui="`autocomplete-suggestion-${index}`"
//       @mousedown="setActiveIndex(index)"
//     >
//       <slot name="match" v-bind:match="match">
//         {{ matchProperty && match[matchProperty] ? match[matchProperty] : match }}
//       </slot>
//      </button>
//   </div>
// </template>
