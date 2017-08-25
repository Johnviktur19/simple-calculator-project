<script>

  function c(val) {
    document.getElementById("ft").value = val;
  }

  function v(val) {
    document.getElementById("ft").value += val;
  }

  function e() {
    try {
      c(eval(document.getElementById("ft").value))
  } 
    catch (e) {
      c('Error')
    }
  }
</script>