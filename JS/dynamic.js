let btn = document.createElement('button');
btn.innerHTML = '+';
btn.style.backgroundColor = 'blue';
btn.style.color = 'white';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
  let ele = document.createElement('input');
  ele.setAttribute('type', 'text');
  document.body.appendChild(ele);
});
