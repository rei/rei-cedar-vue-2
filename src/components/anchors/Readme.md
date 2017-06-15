Basic Example:

    <Anchor data-backstop="cdr-link" href="https://www.rei.com/">An example link</Anchor>

Another example:

    new Vue({
        data: {
            text: 'Vue Styleguidist is fun!'
        },
        template: `<Anchor data-backstop="cdr-link" href="https://www.rei.com/">{{ text }}</Anchor>`
    })

You can use multiple components, in an example

    const name_secret = 'default button';
    const href_custom = 'https://www.google.com';
    let another_text = 'Hello Vue!'
    function log(){
        console.log('example11')
    }

    <section>
        <Button data-backstop="cdr-button" type="submit" :handle-click="log">{{ name_secret }}</Button>
        <br>
        <br>
        {{ another_text }}
        <Anchor data-backstop="cdr-link" :href="href_custom">{{ name_secret }}</Anchor>
    </section>

Be creative :D
    
    const TEXT_1 = 'Hello!';
    const TEXT_2 = 'Hi!';

    new Vue({
        data: {
            textRandom: '',
            log: () => {
                console.log('-')
            }
        },
        watch: {
            textRandom(value) {
                if (value === TEXT_1 ) {
                    this.changeText(TEXT_2)
                } else {
                    this.changeText(TEXT_1)
                }
            }
        },
        methods: {
            changeText(text){
                setTimeout(()=>{
                    this.textRandom = text;
                }, 1000)
            }
        },
        mounted(){
           this.textRandom = TEXT_1
        },
        template: `<Button data-backstop="cdr-button" type="submit" :handle-click="log">{{ textRandom }}</Button>`,
    })