const q=(s,p=document)=>p.querySelector(s),
qa=(s,p=document)=>[...p.querySelectorAll(s)];

const menuButton=q('.menu-button'),mobileNav=q('.mobile-nav');
menuButton.addEventListener('click',()=>{
  const open=mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
  document.body.classList.toggle('menu-open',open);
});
qa('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{
  mobileNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
  document.body.classList.remove('menu-open');
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target)}
    });
},{threshold:.12});
qa('.reveal').forEach(el=>observer.observe(el));

const glow=q('.cursor-glow');
window.addEventListener('pointermove',e=>{
  glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'
});
qa('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{
    glow.style.width='44px';glow.style.height='44px'
  });
  el.addEventListener('mouseleave',()=>{
    glow.style.width='18px';glow.style.height='18px'
  });
});

const cases = {
  lune: {
    tag: 'BRANDING · UI/UX',
    title: 'LUNE',
    intro: '니치 향수의 감각을 과장하지 않고 여백과 질감으로 전달하는 브랜드 웹사이트를 기획했습니다.',
    challenge:'향이라는 비가시적인 경험을 화면에서 어떻게 기억하게 만들 것인가에 집중했습니다.',
    solution: '차분한 뉴트럴 팔레트, 편집적인 타이포그래피, L+U 모노그램을 중심으로 일관된 시각 언어를 구성했습니다.',
    items: [
      ['ROLE','Brand · UI design'],
      ['DEVICE','Desktop 1440'],
      ['TOOLS','Figma · Ps · Ai']
    ]
  },
  mung: { 
    tag: 'UX/UI · PUBLISHING',
    title: '멍이랑',
    intro: '애견동반펜션을 찾는 사용자가 객실과 반려견 조건을 빠르게 비교할 수 있도록 예약 경험을 재구성했습니다.',
    challenge: '많은 시설 정보와 객실 조건 때문에 사용자가 예약 전에 피로해지는 문제를 해결해야 했습니다.',
    solution: 'Quick Booking, 객실 미리보기, Pet Match Finder를 핵심 흐름으로 두고 모바일에서는 반복 콘텐츠를 과감히 줄였습니다.',
    items: [
      ['ROLE','UX/UI · Publishing'],
      ['DEVICE','1440 · 835 · 430'],
      ['TOOLS','Figma · HTML/CSS/JS']
    ]
  },
  samsung: {
    tag: 'CLONE-BASED REDESIGN',
    title: 'Samsung Design Study',
    intro: 'Samsung Design의 대형 비주얼과 에디토리얼 레이아웃을 분석하고, 새로운 이미지와 인터랙션으로 재해석했습니다.',
    challenge: '원본의 강한 인상을 유지하면서도 단순 복제가 아닌 구조 분석과 구현 역량을 보여주는 것이 목표였습니다.',
    solution: '풀스크린 슬라이더, 비대칭 카드 그리드, 스크롤 리빌과 반응형 전체화면 메뉴를 구현했습니다.',
    items: [
      ['ROLE','Analysis · Publishing'],
      ['DEVICE','Desktop · Tablet · Mobile'],
      ['TOOLS','HTML · CSS · JavaScript']
    ]
  }
};
const modal=q('#case-modal'),modalContent=q('.modal-content');
qa('[data-modal]').forEach(btn=>btn.addEventListener('click',()=>{
  const data=cases[btn.dataset.modal];
  modalContent.innerHTML=`
  <p class="eyebrow">${data.tag}</p>
  <h2>${data.title}</h2>
  <p>${data.intro}</p>
  <h3>Challenge</h3>
  <p>${data.challenge}</p>
  <h3>Direction</h3>
  <p>${data.solution}</p>
  <div class="modal-grid">${
    data.items.map(i=>`<div>
    <b>${i[0]}</b>
    <span>${i[1]}</span>
    </div>`).join('')
  }</div>`;
  modal.showModal();
}));
q('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

const toast=q('.toast');
q('.copy-contact').addEventListener('click',()=>{
  toast.textContent='연락처 영역은 이력서 정보에 맞게 연결할 수 있어요.';
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2400);
});
