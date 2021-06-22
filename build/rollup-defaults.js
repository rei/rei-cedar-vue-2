export default {
  onwarn: function ( warning, warn ) {
    // Ignore warnings about unresolved Cedar CSS imports during build. These imports will resolve in the built package.
    if(warning.message.includes("Unresolved `@import` in `@import url(\"@rei/cedar/dist/style/cdr-")) return;
    warn(warning);
  }
}
