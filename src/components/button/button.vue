<template>
    <button :class="className" type="button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'cdr-button',
        props: ['theme'],
        data() {
            return {
                className: 'button'
            }
        },
        created() {
            if (this.theme) {
                this.className = this[this.theme][this.className];
            }
        }
    }
</script>

<style module="red">
    @import '../../css/themes/red.css';
    @import '../../css/components/button.css';
</style>
 
<style module="blue"> 
    @import '../../css/themes/blue.css';
    @import '../../css/components/button.css';
</style>