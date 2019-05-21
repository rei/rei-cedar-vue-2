<template>
  <div>
    <div class="demo-cdr-container cdr-container cdr-stack--xl">
      <cdr-row
        cols="1 2@sm 3@lg"
        class="demo-row"
      >
        <cdr-col span="12">
          <div>
            <h2>The cdr-grid in a standard cdr-container</h2>
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col 1
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col 2
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col 3
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col 4
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col 5
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col 6
          </div>
        </cdr-col>
      </cdr-row>
    </div>

    <div class="demo-cdr-container cdr-container cdr-stack--xl">
      <cdr-row
        cols="2 4@sm 6@lg"
        class="demo-row"
      >
        <cdr-col span="12">
          <div>
            <h2>A nested and responsive cdr-grid</h2>
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <cdr-col
            is-row
            cols="1 2@md"
            gutter="xxs@md xxs@lg"
            class="demo-col falseRow"
          >
            <cdr-col class="demo-col nested">
              <cdr-col
                is-row
                gutter="xxs"
              >
                <cdr-col
                  class="demo-col nested"
                  span="6"
                >
                  <div class="content">
                    content in a nested nested col
                  </div>
                </cdr-col>
                <cdr-col
                  class="demo-col nested"
                  span="6"
                >
                  <div class="content">
                    content in a nested nested col
                  </div>
                </cdr-col>
              </cdr-col>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <div class="content">
                content in a nested col
              </div>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <div class="content">
                content in a nested col
              </div>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <div class="content">
                content in a nested col
              </div>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <div class="content">
                content in a nested col
              </div>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <div class="content">
                content in a nested col
              </div>
            </cdr-col>
          </cdr-col>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
      </cdr-row>
    </div>

    <div class="demo-cdr-container cdr-container cdr-stack--xl">
      <cdr-row
        cols="1"
        class="demo-row"
      >
        <cdr-col span="12">
          <div>
            <h2>A complex cdr-grid</h2>
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <cdr-col
            is-row
            cols="1 2@sm"
            gutter="xxs"
            class="demo-col falseRow"
          >
            <cdr-col class="demo-col nested">
              <cdr-col
                is-row
                gutter="xxs"
                cols="1 4@lg"
                class="demo-col falseRow"
              >
                <cdr-col
                  span="6"
                  class="demo-col nested"
                >
                  <cdr-col
                    is-row
                    gutter="xxs"
                    cols="2 4@lg"
                    class="demo-col falseRow"
                  >
                    <cdr-col class="demo-col nested">
                      <div class="content nested-content">
                        content in a nested col 1
                      </div>
                    </cdr-col>
                    <cdr-col class="demo-col nested">
                      <div class="content nested-content">
                        content in a nested col
                      </div>
                    </cdr-col>
                    <cdr-col class="demo-col nested">
                      <cdr-col
                        is-row
                        gutter="xxs"
                        cols="2"
                        class="demo-col falseRow"
                      >
                        <cdr-col class="demo-col nested">
                          <div class="content nested-content">
                            content in a nested col
                          </div>
                        </cdr-col>
                        <cdr-col class="demo-col nested">
                          <div class="content nested-content">
                            content in a nested col
                          </div>
                        </cdr-col>
                        <cdr-col class="demo-col nested">
                          <div class="content nested-content">
                            content in a nested col
                          </div>
                        </cdr-col>
                        <cdr-col class="demo-col nested">
                          <div class="content nested-content">
                            content in a nested col 1
                          </div>
                        </cdr-col>
                      </cdr-col>
                    </cdr-col>
                    <cdr-col class="demo-col nested">
                      <div class="content nested-content">
                        content in a nested col 1
                      </div>
                    </cdr-col>
                  </cdr-col>
                </cdr-col>
                <cdr-col
                  span="6"
                  class="demo-col nested"
                >
                  <div class="content nested-content">
                    content in a nested col
                  </div>
                </cdr-col>
                <cdr-col
                  span="12"
                  class="demo-col nested"
                >
                  <cdr-col
                    is-row
                    cols="2"
                    gutter="xxs"
                    class="demo-col falseRow"
                  >
                    <cdr-col class="demo-col nested">
                      <cdr-col
                        is-row
                        gutter="xxs"
                        cols="4"
                        class="demo-col falseRow"
                      >
                        <cdr-col
                          span="6"
                          class="demo-col nested"
                        >
                          <cdr-col
                            is-row
                            gutter="xxs"
                            cols="4"
                            class="demo-col falseRow"
                          >
                            <cdr-col
                              span="6"
                              class="demo-col nested"
                            >
                              <div class="content nested-content">
                                content in a nested col
                              </div>
                            </cdr-col>
                            <cdr-col
                              span="6"
                              class="demo-col nested"
                            >
                              <div class="content nested-content">
                                content in a nested col
                              </div>
                            </cdr-col>
                            <cdr-col
                              span="12"
                              class="demo-col nested"
                            >
                              <cdr-col
                                is-row
                                gutter="xxs"
                                cols="2"
                                class="demo-col falseRow"
                              >
                                <cdr-col
                                  span="6"
                                  class="demo-col nested"
                                >
                                  <div class="content nested-content">
                                    content in a nested col
                                  </div>
                                </cdr-col>
                                <cdr-col
                                  span="6"
                                  class="demo-col nested"
                                >
                                  <div class="content nested-content">
                                    content in a nested col
                                  </div>
                                </cdr-col>
                                <cdr-col
                                  span="12"
                                  class="demo-col nested"
                                >
                                  <div class="content nested-content">
                                    content in a nested col
                                  </div>
                                </cdr-col>
                              </cdr-col>
                            </cdr-col>
                          </cdr-col>
                        </cdr-col>
                        <cdr-col
                          span="6"
                          class="demo-col nested"
                        >
                          <div class="content nested-content">
                            content in a nested col
                          </div>
                        </cdr-col>
                        <cdr-col
                          span="12"
                          class="demo-col nested"
                        >
                          <div class="content nested-content">
                            content in a nested col
                          </div>
                        </cdr-col>
                      </cdr-col>
                    </cdr-col>
                    <cdr-col class="demo-col nested">
                      <div class="content">
                        content in a nested col
                      </div>
                    </cdr-col>
                    <cdr-col class="demo-col nested">
                      <div class="content">
                        content in a nested col
                      </div>
                    </cdr-col>
                    <cdr-col class="demo-col nested">
                      <div class="content">
                        content in a nested col
                      </div>
                    </cdr-col>
                    <cdr-col class="demo-col nested">
                      <cdr-col
                        is-row
                        cols="2"
                        gutter="xxs"
                        class="demo-col falseRow"
                      >
                        <cdr-col class="demo-col nested">
                          <cdr-col
                            is-row
                            gutter="xxs"
                            cols="4"
                            class="demo-col falseRow"
                          >
                            <cdr-col
                              span="6"
                              class="demo-col nested"
                            >
                              <cdr-col
                                is-row
                                gutter="xxs"
                                cols="4"
                                class="demo-col falseRow"
                              >
                                <cdr-col
                                  span="6"
                                  class="demo-col nested"
                                >
                                  <div class="content nested-content">
                                    content in a nested col
                                  </div>
                                </cdr-col>
                                <cdr-col
                                  span="6"
                                  class="demo-col nested"
                                >
                                  <div class="content nested-content">
                                    content in a nested col
                                  </div>
                                </cdr-col>
                                <cdr-col
                                  span="12"
                                  class="demo-col nested"
                                >
                                  <cdr-col
                                    is-row
                                    gutter="xxs"
                                    cols="2"
                                    class="demo-col falseRow"
                                  >
                                    <cdr-col
                                      span="6"
                                      class="demo-col nested"
                                    >
                                      <div class="content nested-content">
                                        content in a nested col
                                      </div>
                                    </cdr-col>
                                    <cdr-col
                                      span="6"
                                      class="demo-col nested"
                                    >
                                      <div class="content nested-content">
                                        content in a nested col
                                      </div>
                                    </cdr-col>
                                    <cdr-col
                                      span="12"
                                      class="demo-col nested"
                                    >
                                      <div class="content nested-content">
                                        content in a nested col
                                      </div>
                                    </cdr-col>
                                  </cdr-col>
                                </cdr-col>
                              </cdr-col>
                            </cdr-col>
                            <cdr-col
                              span="6"
                              class="demo-col nested"
                            >
                              <div class="content nested-content">
                                content in a nested col
                              </div>
                            </cdr-col>
                            <cdr-col
                              span="12"
                              class="demo-col nested"
                            >
                              <div class="content nested-content">
                                content in a nested col
                              </div>
                            </cdr-col>
                          </cdr-col>
                        </cdr-col>
                        <cdr-col class="demo-col nested">
                          <cdr-col
                            is-row
                            gutter="xxs"
                            cols="4"
                            class="demo-col falseRow"
                          >
                            <cdr-col
                              span="6"
                              class="demo-col nested"
                            >
                              <cdr-col
                                is-row
                                gutter="xxs"
                                cols="4"
                                class="demo-col falseRow"
                              >
                                <cdr-col
                                  span="12"
                                  class="demo-col nested"
                                >
                                  <div class="content nested-content">
                                    content in a nested col
                                  </div>
                                </cdr-col>
                                <cdr-col
                                  span="12"
                                  class="demo-col nested"
                                >
                                  <div class="content nested-content">
                                    content in a nested col
                                  </div>
                                </cdr-col>
                                <cdr-col
                                  span="12"
                                  class="demo-col nested"
                                >
                                  <cdr-col
                                    is-row
                                    gutter="xxs"
                                    cols="2"
                                    class="demo-col falseRow"
                                  >
                                    <cdr-col
                                      span="4"
                                      class="demo-col nested"
                                    >
                                      <div class="content nested-content">
                                        content in a nested col
                                      </div>
                                    </cdr-col>
                                    <cdr-col
                                      span="4"
                                      class="demo-col nested"
                                    >
                                      <div class="content nested-content">
                                        content in a nested col
                                      </div>
                                    </cdr-col>
                                    <cdr-col
                                      span="4"
                                      class="demo-col nested"
                                    >
                                      <div class="content nested-content">
                                        content in a nested col
                                      </div>
                                    </cdr-col>
                                  </cdr-col>
                                </cdr-col>
                              </cdr-col>
                            </cdr-col>
                            <cdr-col
                              span="6"
                              class="demo-col nested"
                            >
                              <cdr-col
                                is-row
                                gutter="xxs"
                                cols="8"
                                class="demo-col falseRow"
                              >
                                <cdr-col
                                  span="4"
                                  class="demo-col nested"
                                >
                                  <div class="content nested-content">
                                    content in a nested col
                                  </div>
                                </cdr-col>
                                <cdr-col
                                  span="4"
                                  class="demo-col nested"
                                >
                                  <div class="content nested-content">
                                    content in a nested col
                                  </div>
                                </cdr-col>
                                <cdr-col
                                  span="4"
                                  class="demo-col nested"
                                >
                                  <div class="content nested-content">
                                    content in a nested col
                                  </div>
                                </cdr-col>
                              </cdr-col>
                            </cdr-col>
                            <cdr-col
                              span="12"
                              class="demo-col nested"
                            >
                              <div class="content nested-content">
                                content in a nested col
                              </div>
                            </cdr-col>
                          </cdr-col>
                        </cdr-col>
                        <cdr-col class="demo-col nested">
                          <div class="content">
                            content in a nested col
                          </div>
                        </cdr-col>
                        <cdr-col class="demo-col nested">
                          <div class="content">
                            content in a nested col
                          </div>
                        </cdr-col>
                        <cdr-col class="demo-col nested">
                          <div class="content">
                            content in a nested col
                          </div>
                        </cdr-col>
                        <cdr-col class="demo-col nested">
                          <div class="content">
                            content in a nested col
                          </div>
                        </cdr-col>
                      </cdr-col>
                    </cdr-col>
                    <cdr-col class="demo-col nested">
                      <div class="content">
                        content in a nested col
                      </div>
                    </cdr-col>
                  </cdr-col>
                </cdr-col>
              </cdr-col>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <div class="content">
                content in a nested col
              </div>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <div class="content">
                content in a nested col
              </div>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <div class="content">
                content in a nested col
              </div>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <div class="content">
                content in a nested col
              </div>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <div class="content">
                content in a nested col
              </div>
            </cdr-col>
          </cdr-col>
        </cdr-col>
      </cdr-row>
    </div>

    <div class="demo-cdr-container cdr-container-fluid">
      <cdr-row
        justify="between"
        class="demo-row cdr-stack--xl"
      >
        <cdr-col span="12">
          <div>
            <h2>The cdr-grid within a cdr-container-fluid</h2>
          </div>
        </cdr-col>
        <cdr-col
          span="6"
          class="demo-col"
        >
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col
          span="6"
          class="demo-col"
        >
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col
          span="3"
          class="demo-col"
        >
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col
          span="3"
          class="demo-col"
        >
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col
          span="3"
          class="demo-col"
        >
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col
          span="3"
          class="demo-col"
        >
          <div class="content">
            content in a col
          </div>
        </cdr-col>
      </cdr-row>
    </div>

    <div class="demo-cdr-container cdr-container cdr-stack--xl">
      <cdr-col
        is-row
        cols="4"
        justify="around"
        gutter="xxs@md"
        class="demo-row"
      >
        <cdr-col span="12">
          <div>
            <h2>Other examples and truoble shooting</h2>

            <h3>Using "is-row" at the root col</h3>
          </div>
        </cdr-col>
        <cdr-col
          span="6"
          class="demo-col"
        >
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col
          span="6"
          class="demo-col"
        >
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col
          span="4"
          class="demo-col"
        >
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
      </cdr-col>
    </div>

    <cdr-row
      justify="around"
      class="demo-row cdr-stack--xl"
    >
      <cdr-col span="12">
        <div>
          <h2>Look out for</h2>

          <h3>A grid without a container</h3>
        </div>
      </cdr-col>
      <cdr-col
        span="6"
        class="demo-col"
      >
        <div class="content">
          content in a col
        </div>
      </cdr-col>
      <cdr-col
        span="3"
        class="demo-col"
      >
        <div class="content">
          content in a col
        </div>
      </cdr-col>
      <cdr-col
        span="3"
        class="demo-col"
      >
        <div class="content">
          content in a col
        </div>
      </cdr-col>
      <cdr-col
        span="6"
        class="demo-col"
      >
        <div class="content">
          content in a col
        </div>
      </cdr-col>
      <cdr-col
        span="6"
        class="demo-col"
      >
        <div class="content">
          content in a col
        </div>
      </cdr-col>
      <cdr-col
        span="12"
        class="demo-col"
      >
        <div class="content">
          content in a col
        </div>
      </cdr-col>
    </cdr-row>

    <h2>Content outside of the grid containers</h2>
    <div class="demo-cdr-container cdr-container-flex cdr-stack--xl">
      <cdr-row
        cols="1 2@sm 3@lg"
        class="demo-row"
      >
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            content in a col
          </div>
        </cdr-col>
      </cdr-row>
    </div>

    <div class="demo-cdr-container cdr-container">
      <cdr-row
        type="list"
        cols="2"
        class="demo-row"
      >
        <cdr-col class="demo-col">
          <div class="content">
            One
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <cdr-row
            is-list
            cols="2"
            class="demo-row"
          >
            <cdr-col class="demo-col nested">
              <div class="content">
                Two
              </div>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <cdr-row
                is-list
                cols="2"
                class="demo-row"
              >
                <cdr-col class="demo-col nested">
                  <div class="content">
                    Two
                  </div>
                </cdr-col>
                <cdr-col class="demo-col nested">
                  <div class="content">
                    Two
                  </div>
                </cdr-col>
                <cdr-col
                  class="demo-col nested"
                  span="12"
                >
                  <div class="content">
                    Two
                  </div>
                </cdr-col>
                <cdr-col
                  class="demo-col nested"
                  span="12"
                >
                  <div class="content">
                    Two
                  </div>
                </cdr-col>
              </cdr-row>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <div class="content">
                Two
              </div>
            </cdr-col>
            <cdr-col class="demo-col nested">
              <div class="content">
                Two
              </div>
            </cdr-col>
          </cdr-row>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            Three
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            Four
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            five
          </div>
        </cdr-col>
        <cdr-col class="demo-col">
          <div class="content">
            six
          </div>
        </cdr-col>
      </cdr-row>
    </div>
  </div>
</template>

<script>
import CdrRow from 'componentsdir/grid/CdrRow';
import CdrCol from 'componentsdir/grid/CdrCol';

export default {
  name: 'Grid',
  components: {
    CdrRow,
    CdrCol,
  },
};
</script>

<style>

.demo-row {
  background-color: rgba(130, 234, 255, 0.5);
}

.demo-cdr-container {
  background-color: lightcoral;
  color: purple;
}

.demo-col {
  background-color: rgba(0, 255, 171, 0.4);
}

.content,
.row-demo {
  background-color: rgba(0, 255, 171, 0.8);
  color: #000;
}

.demo-col.nested .content,
.nested-content {
  background-color: rgba(195, 0, 255, 0.4);
}

</style>
