$('.accordion-trigger').click(function() {
  $(this)
    // Spin the triangle.
    .toggleClass('is-active')
    // Open the body.
    .next('.accordion-body').cssAnimateAuto();
});