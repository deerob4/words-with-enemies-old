let isClass = element => element.charAt(0) === '.' ? true : false;

export default (hideElementDOM, removeAnimation, showElementDOM, addAnimation) => {
  let hideElement = isClass(hideElementDOM) ? document.getElementsByClass(hideElementDOM.replace('.', '')) 
                                            : document.getElementById(hideElementDOM.replace('#', ''));
  hideElement.classList.add('animated', removeAnimation);

  setTimeout(() => {
    hideElement.style.display = 'none';
    hideElement.classList.remove('animated', removeAnimation);

    let showElement = isClass(showElementDOM) ? document.getElementsByClass(showElementDOM.replace('.', ''))
                                              : document.getElementById(showElementDOM.replace('#', ''));
    showElement.style.display = 'block';
    showElement.classList.add('animated', addAnimation);
  }, 500);
};
