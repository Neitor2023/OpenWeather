export function loader () {
  const load = document.getElementById('loader')
  if (loader) {
    setTimeout(() => {
      loader.style.display = 'none'
    }, 3000)
  }
}
