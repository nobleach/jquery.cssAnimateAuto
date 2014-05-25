$('.accordion-trigger').click(function() {
  $(this)
    // Spin the triangle.
    .toggleClass('is-active')
    // Open or close the body.
    .next('.accordion-body').cssAnimateAuto();
});