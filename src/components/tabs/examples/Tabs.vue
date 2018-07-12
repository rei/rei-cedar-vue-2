<template>
  <!-- eslint-disable max-len -->
  <div>
    <h2>Tabs</h2>
    <cdr-tabs>
      <cdr-tab name="Tab1"><div class="demo-content-container">
        <h1>Tab One Content</h1>
        <p>
          I'd like you to meet my good friend George McFly. Marty, will we ever see you again? Marty. Marty. Marty. Okay, okay you guys, oh ha ha ha very funny. Hey you guys are being real mature. Let's put him in there.
        </p>
        <p>
          Well, you mean, it makes perfect sense. Then how am I supposed to ever meet anybody. Yeah, yeah what are you wearing, Dave. But you're good, Marty, you're really good. And this audition tape of your is great, you gotta send it in to the record company. It's like Doc's always saying. Alright, take it up, go. Doc.
        </p>
      </div></cdr-tab>
      <cdr-tab name="Tab2"><div class="demo-content-container blue">
        <h1>
          Tab Two Content
        </h1>
        <p>
          There, there, now, just relax. You've been asleep for almost nine hours now. Yeah, who are you? Next, please. I'm too loud. I can't believe it. I'm never gonna get a chance to play in front of anybody. Last night, Darth Vader came down from planet Vulcan. And he told me that if I didn't take Lorraine, that he'd melt my brain.
        </p>
        <p>
          I don't like her, Marty. Any girl who calls a boy is just asking for trouble. It's uh, the other end of town, a block past Maple. Well, Marty, I want to thank you for all your good advise, I'll never forget it. Well looky what we have here. No no no, you're staying right here with me. Right, I got it.
        </p>
      </div></cdr-tab>
      <cdr-tab name="REALLY REALLY LARGE TAB NAME"><div class="demo-content-container red">
        <h1>
          Tab Three Content
        </h1>
        <p>
          Whoa, whoa, Biff, what's that? Hey beat it, spook, this don't concern you. Well uh, good, fine. Hey, hey, I've seen this one, I've seen this one. This is a classic, this is where Ralph dresses up as the man from space. Good evening, I'm Doctor Emmet Brown, I'm standing here on the parking lot of-
        </p>
        <p>
          Unroll their fire. It's about the future, isn't it? Wrecked? Hey Dad, George, hey, you on the bike. Go. Go.
        </p>
      </div></cdr-tab>
      <cdr-tab name="4"><div class="demo-content-container green">
        <h1>
          Four Content
        </h1>
        <p>
          This has gotta be a dream. Ah, where're my pants? Breakfast. No, fine, no , good, fine, good. No, Biff, you leave her alone.
        </p>
        <p>
          Say that again. Right, okay, so right around 9:00 she's gonna get very angry with me. Right. That's George McFly. George McFly? Oh, he's kinda cute and all, but, well, I think a man should be strong, so he could stand up for himself, and protect the woman he loves. Don't you?
        </p>
      </div></cdr-tab>
      <cdr-tab name="Five"><div class="demo-content-container yellow">
        <h1>
          Tab Five Content
        </h1>
        <p>
          Sam, quit fiddling with that thing and come in here and eat your dinner. I hope so. Good, you could start by sweeping the floor. Don't say a word. What?
        </p>
        <p>
          Good morning, Mom. Oh, Marty, I almost forgot, Jennifer Parker called. Sam, quit fiddling with that thing and come in here and eat your dinner. Huh? Working. Uh, no, no, no, no. What are you looking at, butt-head?
        </p>
      </div></cdr-tab>
      <cdr-tab name="Six"><div class="demo-content-container">
        <h1>
          Tab Six Content
        </h1>
        <p>
          No wait, Doc, the bruise, the bruise on your head, I know how that happened, you told me the whole story. you were standing on your toilet and you were hanging a clock, and you fell, and you hit your head on the sink, and that's when you came up with the idea for the flux capacitor, which makes time travel possible. What did she say? It's your mom, she's tracked you down. Quick, let's cover the time machine. Don't tell me anything. I hope so. I have to tell you about the future.
        </p>
        <p>
          Look, you gotta listen to me. Well, it will just happen. Like the way I met your father. Looks like a airplane, without wings. whoa, whoa Doc, stuck here, I can't be stuck here, I got a life in 1985. I got a girl. My god, do you know what this means? It means that this damn thing doesn't work at all.
        </p>
      </div></cdr-tab>
    </cdr-tabs>
    <h2>Compact Tabs</h2>
    <cdr-tabs modifier="full-width">
      <cdr-tab name="one">
        <h1>tab content</h1>
      </cdr-tab>
      <cdr-tab name="two">
        <h1>tab content</h1>
      </cdr-tab>
      <cdr-tab name="three">
        <h1>tab content</h1>
      </cdr-tab>
      <cdr-tab name="four">
        <h1>tab content</h1>
      </cdr-tab>
    </cdr-tabs>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'TabsExample',
  components: { ...Components },
};
</script>

<style>
  .demo-content-container {
    text-align: center;
    padding-top: 125px;
    font-size: 30px;
    height: 400px;
    background: lightgrey;
    position: relative;
  }

  .demo-content-container > p {
    text-align: left;
    font-size: 16px;
    padding: 0 20px;
  }

  .demo-content-container > h1 {
    margin-bottom: 30px;
  }

  .blue {
    background: lightblue;
  }

  .red {
    background: pink;
  }

  .green {
    background: lightgreen;
  }

  .yellow {
    background: lightyellow;
  }

  .purple {
    background: violet;
  }
</style>
