<template>
  <div>
    <div data-backstop="heading-headline">
      <cdr-heading :level="1" :modifier="['headline']">headline</cdr-heading>
      <cdr-heading :level="2" :modifier="['headline']">headline</cdr-heading>
      <cdr-heading :level="3" :modifier="['headline']">headline</cdr-heading>
      <cdr-heading :level="4" :modifier="['headline']">headline</cdr-heading>
      <cdr-heading :level="5" :modifier="['headline']">headline</cdr-heading>
      <cdr-heading :level="6" :modifier="['headline']">headline</cdr-heading>
    </div>
    <div data-backstop="heading-title">
      <cdr-heading :level="1" :modifier="['title']">title</cdr-heading>
      <cdr-heading :level="2" :modifier="['title']">title</cdr-heading>
      <cdr-heading :level="3" :modifier="['title']">title</cdr-heading>
      <cdr-heading :level="4" :modifier="['title']">title</cdr-heading>
      <cdr-heading :level="5" :modifier="['title']">title</cdr-heading>
      <cdr-heading :level="6" :modifier="['title']">title</cdr-heading>
    </div>
    <div data-backstop="heading-subtitle">
      <cdr-heading :level="1" :modifier="['subtitle']">subtitle</cdr-heading>
      <cdr-heading :level="2" :modifier="['subtitle']">subtitle</cdr-heading>
      <cdr-heading :level="3" :modifier="['subtitle']">subtitle</cdr-heading>
      <cdr-heading :level="4" :modifier="['subtitle']">subtitle</cdr-heading>
      <cdr-heading :level="5" :modifier="['subtitle']">subtitle</cdr-heading>
      <cdr-heading :level="6" :modifier="['subtitle']">subtitle</cdr-heading>
    </div>
    <div data-backstop="heading-section-title">
      <cdr-heading :level="1" :modifier="['section-title']">section-title</cdr-heading>
      <cdr-heading :level="2" :modifier="['section-title']">section-title</cdr-heading>
      <cdr-heading :level="3" :modifier="['section-title']">section-title</cdr-heading>
      <cdr-heading :level="4" :modifier="['section-title']">section-title</cdr-heading>
      <cdr-heading :level="5" :modifier="['section-title']">section-title</cdr-heading>
      <cdr-heading :level="6" :modifier="['section-title']">section-title</cdr-heading>
    </div>
    <div data-backstop="heading-body-copy">
      <cdr-heading :level="1" :modifier="['body-copy']">body-copy</cdr-heading>
      <cdr-heading :level="2" :modifier="['body-copy']">body-copy</cdr-heading>
      <cdr-heading :level="3" :modifier="['body-copy']">body-copy</cdr-heading>
      <cdr-heading :level="4" :modifier="['body-copy']">body-copy</cdr-heading>
      <cdr-heading :level="5" :modifier="['body-copy']">body-copy</cdr-heading>
      <cdr-heading :level="6" :modifier="['body-copy']">body-copy</cdr-heading>
    </div>
    <div data-backstop="heading-pull-quote">
      <cdr-heading :level="1" :modifier="['pull-quote']">pull-quote</cdr-heading>
      <cdr-heading :level="2" :modifier="['pull-quote']">pull-quote</cdr-heading>
      <cdr-heading :level="3" :modifier="['pull-quote']">pull-quote</cdr-heading>
      <cdr-heading :level="4" :modifier="['pull-quote']">pull-quote</cdr-heading>
      <cdr-heading :level="5" :modifier="['pull-quote']">pull-quote</cdr-heading>
      <cdr-heading :level="6" :modifier="['pull-quote']">pull-quote</cdr-heading>
    </div>
    <div data-backstop="heading-sub-section">
      <cdr-heading :level="1" :modifier="['sub-section']">sub-section</cdr-heading>
      <cdr-heading :level="2" :modifier="['sub-section']">sub-section</cdr-heading>
      <cdr-heading :level="3" :modifier="['sub-section']">sub-section</cdr-heading>
      <cdr-heading :level="4" :modifier="['sub-section']">sub-section</cdr-heading>
      <cdr-heading :level="5" :modifier="['sub-section']">sub-section</cdr-heading>
      <cdr-heading :level="6" :modifier="['sub-section']">sub-section</cdr-heading>
    </div>
    <div data-backstop="heading-information">
      <cdr-heading :level="1" :modifier="['information']">information</cdr-heading>
      <cdr-heading :level="2" :modifier="['information']">information</cdr-heading>
      <cdr-heading :level="3" :modifier="['information']">information</cdr-heading>
      <cdr-heading :level="4" :modifier="['information']">information</cdr-heading>
      <cdr-heading :level="5" :modifier="['information']">information</cdr-heading>
      <cdr-heading :level="6" :modifier="['information']">information</cdr-heading>
    </div>
    <div data-backstop="heading-description">
      <cdr-heading :level="1" :modifier="['description']">description</cdr-heading>
      <cdr-heading :level="2" :modifier="['description']">description</cdr-heading>
      <cdr-heading :level="3" :modifier="['description']">description</cdr-heading>
      <cdr-heading :level="4" :modifier="['description']">description</cdr-heading>
      <cdr-heading :level="5" :modifier="['description']">description</cdr-heading>
      <cdr-heading :level="6" :modifier="['description']">description</cdr-heading>
    </div>
    <div data-backstop="heading-detail">
      <cdr-heading :level="1" :modifier="['detail']">detail</cdr-heading>
      <cdr-heading :level="2" :modifier="['detail']">detail</cdr-heading>
      <cdr-heading :level="3" :modifier="['detail']">detail</cdr-heading>
      <cdr-heading :level="4" :modifier="['detail']">detail</cdr-heading>
      <cdr-heading :level="5" :modifier="['detail']">detail</cdr-heading>
      <cdr-heading :level="6" :modifier="['detail']">detail</cdr-heading>
    </div>
    <div data-backstop="heading-disclaimer">
      <cdr-heading :level="1" :modifier="['disclaimer']">disclaimer</cdr-heading>
      <cdr-heading :level="2" :modifier="['disclaimer']">disclaimer</cdr-heading>
      <cdr-heading :level="3" :modifier="['disclaimer']">disclaimer</cdr-heading>
      <cdr-heading :level="4" :modifier="['disclaimer']">disclaimer</cdr-heading>
      <cdr-heading :level="5" :modifier="['disclaimer']">disclaimer</cdr-heading>
      <cdr-heading :level="6" :modifier="['disclaimer']">disclaimer</cdr-heading>
    </div>
  </div>
</template>

<script>
  import cdrHeading from '../../components/headings/Heading';

  export default {
    name: 'headings',
    components: { cdrHeading },
  };
</script>
