<template>
  <div>
    <cdr-list>
      <li>List default</li>
      <li>List default
        <cdr-list>
          <li>List default - nested</li>
          <li>List default - nested
            <cdr-list :modifier="['numbered']">
              <li>List default - nested - numbered</li>
              <li>List default - nested - numbered</li>
            </cdr-list>
          </li>
        </cdr-list>
      </li>
    </cdr-list>

    <cdr-list type="ol">
      <li>List ordered - default</li>
      <li>List ordered - default
        <cdr-list type="ol" :modifier="['unstyled']">
          <li>List ordered - nested - unstyled</li>
          <li>List ordered - nested - unstyled
            <cdr-list type="ol" :modifier="['bulleted']">
              <li>List ordered - nested - bulleted</li>
              <li>List ordered - nested - bulleted</li>
            </cdr-list>
          </li>
        </cdr-list>
        </li>
    </cdr-list>

    <cdr-list :modifier="['unstyled']">
      <li>List unstyled</li>
      <li>List unstyled</li>
    </cdr-list>

    <cdr-list :modifier="['menu']" data-backstop="cdr-list--menu">
      <li><a href="/">List menu</a></li>
      <li><a href="/">List menu</a></li>
    </cdr-list>
  </div>
</template>

<script>
  import cdrList from '../../components/lists/Lists';

  export default {
    name: 'lists',
    components: { cdrList },
  };
</script>
