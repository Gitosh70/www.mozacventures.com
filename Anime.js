<script>
document.addEventListener("DOMContentLoaded", function() {
  var words = document.querySelectorAll(".word");
  var delay = 0;

  words.forEach(function(word) {
    word.classList.add("slide-in"); // Add the slide-in class to each word element
    word.style.animationDelay = delay + "s";
    delay += 0.5;
  });
});
</script>
