document.querySelectorAll('.popular-majors-trigger').forEach(function(trigger){
  let popup = trigger.querySelector('.popular-majors-popup');
  let closeBtn = popup.querySelector('.close-popup-btn');
  function close() {
    trigger.classList.remove('open');
    popup.style.display = 'none';
  }
  trigger.addEventListener('click', function(e){
    e.stopPropagation();
    document.querySelectorAll('.popular-majors-trigger').forEach(function(t){
      if (t !== trigger) t.classList.remove('open');
    });
    trigger.classList.toggle('open');
    if (trigger.classList.contains('open')) {
      popup.style.display = 'block';
    } else {
      popup.style.display = 'none';
    }
  });
  // ปิดเมื่อคลิกข้างนอก
  window.addEventListener('click', function(e){
    if (!trigger.contains(e.target)) close();
  });
  // ปิดเมื่อกด Esc
  window.addEventListener('keydown', function(e){
    if(e.key === 'Escape') close();
  });
  // ปิดเมื่อกดปุ่ม
  closeBtn.addEventListener('click', close);
});