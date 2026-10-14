const chatExamples = {
  ask: [
    { role: 'user', text: '为什么很多乡村会在节庆时举办舞龙活动？' },
    { role: 'ai', text: '舞龙常与祈福、驱邪和庆祝丰收相关。不同地区的龙舞在造型、节奏和仪式上会有差异，因此还需要结合具体村落与当地资料来理解。', source: '可继续追问：地区差异｜仪式流程｜历史来源' }
  ],
  retrieve: [
    { role: 'user', text: '帮我找找关于传统晒秋习俗的资料。' },
    { role: 'ai', text: '我会优先从知识库中检索与“晒秋”“农事节令”“村落生活”相关的资料片段，再基于来源进行整理，避免只依赖模型记忆。', source: '检索策略：关键词扩展 + 相关片段召回' }
  ],
  explain: [
    { role: 'user', text: '用容易理解的话解释“乡土文化”。' },
    { role: 'ai', text: '可以把乡土文化理解为：一个地方的人在长期共同生活中形成的记忆和生活方式。它既包括建筑、技艺，也包括方言、节庆、礼俗和口述故事。', source: '表达策略：先定义，再举例，减少专业术语' }
  ],
  trace: [
    { role: 'user', text: '这个说法一定是真的吗？' },
    { role: 'ai', text: '需要区分史料记载与民间传说。如果现有资料不足，我会明确说明信息边界，并建议进一步查阅地方志、博物馆资料或非遗名录。', source: '回答边界：不把推测写成确定事实' }
  ]
};

const chatBody = document.querySelector('#chatBody');
const featureTabs = document.querySelectorAll('.feature-tab');

function renderChat(key) {
  chatBody.innerHTML = chatExamples[key].map((item, index) => (
    '<div class="bubble ' + item.role + '" style="animation-delay:' + index * 100 + 'ms">' +
    item.text + (item.source ? '<small>' + item.source + '</small>' : '') + '</div>'
  )).join('');
}

featureTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    featureTabs.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    renderChat(tab.dataset.feature);
  });
});

renderChat('ask');

const header = document.querySelector('.site-header');
const readingBar = document.querySelector('#readingBar');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  readingBar.style.width = (scrollable > 0 ? window.scrollY / scrollable * 100 : 0) + '%';
}, { passive: true });

const menuButton = document.querySelector('#menuButton');
const siteNav = document.querySelector('#siteNav');
menuButton.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  siteNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#printButton').addEventListener('click', () => window.print());

const toast = document.querySelector('#toast');
document.querySelector('#copyButton').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    toast.textContent = '链接已复制';
  } catch {
    toast.textContent = '请从地址栏复制链接';
  }
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
});
