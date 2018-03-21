const inputs = document.querySelectorAll('input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  // console.log(this.name);
  document.documentElement.style.setProperty('--' + this.name + '', this.value + suffix)
  // console.log(suffix);
}

inputs.forEach(function(input) {
  input.addEventListener('change', handleUpdate);
  input.addEventListener('mousemove', handleUpdate);
});
