const WA = '5531973319402';
const products = [
  {cat:'kits',name:'KIT ESSENTIALS',detail:'CAMISETA + ACESSÓRIO',tag:'SELEÇÃO LORD',img:'photo-kit',kind:'Kit conceito'},
  {cat:'camisetas',name:'CAMISETA STATEMENT',detail:'CAIMENTO PREMIUM',tag:'PEÇA-CHAVE',img:'photo-tee',kind:'Camiseta conceito'},
  {cat:'acessorios',name:'ACESSÓRIO EM FOCO',detail:'O TOQUE FINAL DO LOOK',tag:'COMPLEMENTO',img:'photo-accessory',kind:'Acessório conceito'},
  {cat:'kits',name:'KIT STREET EDIT',detail:'COMBINAÇÃO DA CASA',tag:'LOOK PRONTO',img:'photo-street',kind:'Kit conceito'},
  {cat:'calcas',name:'CALÇA CARGO',detail:'SILHUETA STREET',tag:'STREET SELECT',img:'photo-pants',kind:'Calça conceito'},
  {cat:'sneakers',name:'SNEAKER DAILY',detail:'PRA USAR TODO DIA',tag:'FOOTWEAR',img:'photo-sneaker',kind:'Sneaker conceito'},
  {cat:'camisetas',name:'CAMISETA OVERSIZED',detail:'VOLUME NA MEDIDA',tag:'FIT FAVORITO',img:'photo-oversized',kind:'Camiseta conceito'},
  {cat:'acessorios',name:'BONÉ SIGNATURE',detail:'ASSINATURA DO LOOK',tag:'ACESSÓRIO',img:'photo-cap',kind:'Boné conceito'},
  {cat:'kits',name:'KIT MONOCHROME',detail:'TONS QUE SE COMPLETAM',tag:'LORD COMBO',img:'photo-monochrome',kind:'Kit conceito'},
  {cat:'calcas',name:'DENIM RELAXED',detail:'CLÁSSICO COM ATITUDE',tag:'DENIM EDIT',img:'photo-denim',kind:'Jeans conceito'},
  {cat:'sneakers',name:'SNEAKER COURT',detail:'LINHAS CLÁSSICAS',tag:'COURT STYLE',img:'photo-court',kind:'Sneaker conceito'},
  {cat:'acessorios',name:'MEIAS STATEMENT',detail:'DETALHE QUE APARECE',tag:'SMALL DETAIL',img:'photo-socks',kind:'Meia conceito'}
];
const grid = document.querySelector('#grid');
function render(filter = 'all') {
  const visible = products.filter(p => filter === 'all' || p.cat === filter);
  grid.innerHTML = visible.map(p => `<article class="card"><div class="product-image ${p.img}" role="img" aria-label="Imagem ilustrativa: ${p.kind}"><span class="product-index">${String(products.indexOf(p)+1).padStart(2,'0')}</span><span class="product-tag">${p.tag}</span><span class="image-mark" aria-hidden="true">L<span>®</span></span></div><div class="product-meta"><div><h3>${p.name}</h3><p>${p.detail}</p><small>IMAGEM ILUSTRATIVA · CONSULTE TAMANHOS E CORES</small></div><a class="ask" href="https://wa.me/${WA}?text=${encodeURIComponent(`Oi! Vi a loja conceito da Lord Premium e queria consultar se vocês têm ${p.name.toLowerCase()}, além dos tamanhos, cores e valor.`)}" target="_blank" rel="noopener noreferrer" aria-label="Consultar ${p.name} pelo WhatsApp">↗</a></div></article>`).join('');
}
document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filters .active')?.classList.remove('active');
  document.querySelectorAll('.filters button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  button.classList.add('active');
  render(button.dataset.filter);
}));
render();
