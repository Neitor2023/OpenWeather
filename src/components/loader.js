export function loader () {
  window.addEventListener('load', () => {
    console.log('llegue')
    const container_loader = document.querySelector('.container_loader')
    container_loader.style.opacity = 0
    container_loader.style.visibility = 'hidden'
})
}
