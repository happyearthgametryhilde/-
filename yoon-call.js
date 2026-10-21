(() => {
  'use strict';
  const first=[['윤','뭐냐? 끝났냐?'],['힐데','예? 아 아닙니다.'],['윤','되게 한가한가 보다. 여긴 장난 없는데.'],['힐데','아닙니다. 이만 끊겠습니다...']];
  const second=[
    ['힐데','윤!'],
    ['윤','센터코어 경계로 가는 중이다. 기차를 타고. 3시간 안이면 도착하겠지. X구역에서 핵이 터졌다는데 무사히 빠져나온 모양이다?'],
    ['힐데','...예.'],['힐데','마물이 떼로 센터코어 경계로 집합하고 있는 겁니까?'],['윤','드라이버 말로는.'],['힐데','잭과 통화를....'],['윤','그 전에. 너 얼굴 까고 나올 수 있냐?'],['힐데','아니요. 하나를 놓쳤습니다.'],['윤','그럼 얼굴 숨기고 본부로 돌아가.'],['힐데','예? 본부요?'],['윤','방역복 입은 뒤 방독면 같은 거 쓰고 들어가라고. 거기 아직도 공사 중이라 인부들 어슬렁대고 하니까.'],['힐데','그렇군요. 그런데 본부는 왜....'],['윤','포탈이 있으니까. 지금 이 전력으로는 카일과 대적하기는커녕 붙잡아두기조차 힘들어. 우린 변방에 도착하자마자 포탈 장치를 설치할 거다. 그걸 퇴로로 쓸지 병력 증강 루트로 쓸지는 가봐야 알겠지만.'],['힐데','아. 알겠습니다. 다만 포탈 장치는 이 저택에도 있으니 본부까지 나갈 필요는....'],['윤','(상황 설명)'],['힐데','마이어볼드가 그쪽으로 갔다고요?'],['윤','사람 말을 끝까지 들어.'],['윤','지금 돌아가는 꼴이 묘해.'],['힐데','감사합니다. 당장 돌아갈게요. 들키지 않게 조심하겠습니다.'],['윤','뭐 마음대로 해. 눈썰미 좋은 놈을 마주하지 않기만을 빌어라.'],['힐데','... 선배님들이 절 알아보진 않으시겠죠.'],['윤','너 연기 존나 못해.'],['힐데','윤 솔직히 그때 제가 앞으로 나서지 않았으면 저 못 발견했을 거 아닙니까! 그리고 대체 누가 저 찾겠다고 자기 손목을 그냥 부서지게 둡니까? 진짜 다시는 그러지 마십쇼!'],['윤','힘내 봐라. 너 잡아 죽이려는 놈들이 우글거리니까.'],['힐데','예에.... 윤도요.']
  ];
  const device=document.querySelector('#device');
  const el=document.createElement('section');el.id='yoonCall';el.hidden=true;device.appendChild(el);
  const s={ready:false,triggered:false,phase:'idle',part:0,firstDone:false,secondUsed:false,record:null,historyRecorded:false,followup:'idle',notify:null,avatar:'',timer:null,elapsed:0,remaining:0,index:0,last:0};
  let ringtone=null;
  try{if(window.Audio){ringtone=new window.Audio('assets/audio/yoon-ringtone.mp3?v=20261020tom1');ringtone.preload='auto';ringtone.setAttribute('playsinline','');ringtone.load();ringtone.onended=()=>{if(s.phase==='ringing'&&!document.hidden&&device.dataset.mode!=='locked'){ringtone.currentTime=3;ringtone.play()?.catch(()=>{});}};}}catch{}
  let laughSound=null;
  try{if(window.Audio){laughSound=new window.Audio('assets/kakao/notification-opening.wav?v=20261020trusted1');laughSound.preload='auto';laughSound.setAttribute('playsinline','');laughSound.load();}}catch{}
  function stopLaughSound(){if(!laughSound)return;laughSound.pause();try{laughSound.currentTime=0;}catch{}}
  function playLaughSound(){if(!laughSound||document.hidden||device.dataset.mode==='locked')return;try{if(window.navigator?.audioSession)window.navigator.audioSession.type='playback';laughSound.volume=.7;laughSound.currentTime=0;laughSound.play()?.catch(()=>{});}catch{}}
  function stopRingtone(){if(!ringtone)return;ringtone.pause();try{ringtone.currentTime=0;}catch{}}
  function playRingtone(offset){if(!ringtone||document.hidden||device.dataset.mode==='locked')return;try{if(window.navigator?.audioSession)window.navigator.audioSession.type='playback';ringtone.volume=.7;ringtone.currentTime=offset;ringtone.play()?.catch(()=>{});}catch{}}
  const phone='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 2.8 3.3 4.2C.7 5.4 4 12.9 7.5 16.4s11 6.8 12.2 4.2l1.4-3.3c.3-.6 0-1.2-.6-1.5l-3.7-1.6c-.5-.2-1-.1-1.3.3L14 16.2c-2.5-1.1-5.1-3.7-6.2-6.2l1.7-1.5c.4-.3.5-.8.3-1.3L8.2 3.5c-.3-.6-.9-.9-1.6-.7Z"/></svg>';
  const hang='<svg viewBox="0 0 64 64" aria-hidden="true"><path fill="currentColor" d="M8 39c-2 0-3-1-3-4v-6c0-3 2-6 5-8 12-8 32-8 44 0 3 2 5 5 5 8v6c0 3-1 4-3 4h-8c-2 0-3-1-3-3v-6c-8-4-18-4-26 0v6c0 2-1 3-3 3Z"/></svg>';
  const symbols={
    audio:'<path d="M6 24h10l13-11c2-2 4-1 4 2v34c0 3-2 4-4 2L16 40H6c-2 0-3-1-3-3V27c0-2 1-3 3-3Z"/><g fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"><path d="M40 24c4 5 4 11 0 16"/><path d="M47 18c8 9 8 19 0 28"/><path d="M54 11c12 13 12 29 0 42"/></g>',
    video:'<path fill-rule="evenodd" d="M10 13h25c4 0 6 2 6 6v26c0 4-2 6-6 6H10c-4 0-6-2-6-6V19c0-4 2-6 6-6Zm10 17h5c0-2 1-3 3-4 4-4 1-10-5-10-5 0-8 3-8 7h5c0-2 1-3 3-3 2 0 3 2 1 4-3 2-4 3-4 6Zm0 4v5h5v-5Z"/><path d="m45 23 12-8c2-1 3 0 3 2v30c0 2-1 3-3 2l-12-8Z"/>',
    mute:'<path d="M25 10c0-10 14-10 14 0v17L25 13Z"/><path d="M25 24v6c0 7 8 10 12 4Z"/><g fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"><path d="M18 23v8c0 16 20 21 28 9M46 18v12M32 46v10M23 56h18M10 5l45 52"/></g>',
    more:'<circle cx="14" cy="32" r="5"/><circle cx="32" cy="32" r="5"/><circle cx="50" cy="32" r="5"/>',
    keypad:Array.from({length:9},(_,i)=>'<circle cx="'+(15+i%3*17)+'" cy="'+(15+Math.floor(i/3)*17)+'" r="6.5"/>').join('')
  };
  const glyph=k=>'<svg viewBox="0 0 64 64" aria-hidden="true" fill="currentColor">'+symbols[k]+'</svg>';
  function show(){el.hidden=false;device.classList.add('has-yoon-call');}
  function close(){stopRingtone();clearTimeout(s.timer);el.hidden=true;device.classList.remove('has-yoon-call');s.phase='idle';}
  function ring(){if(document.hidden||device.dataset.mode==='locked'){stopRingtone();s.phase='pending';return;}s.phase='ringing';if(!s.historyRecorded){s.historyRecorded=true;s.record?.('ringing');}if(ringtone?.paused)playRingtone(3);else if(ringtone&&ringtone.currentTime<3)ringtone.currentTime=3;show();el.className='yoon-incoming';el.setAttribute('role','dialog');el.setAttribute('aria-label','윤에게서 걸려온 전화');el.innerHTML='<div class="yoon-incoming-person">'+s.avatar+'<strong>윤</strong></div><button data-yoon="decline" class="yoon-call-red" aria-label="전화 거절">'+hang+'</button><button data-yoon="answer" class="yoon-call-green" aria-label="전화 받기">'+phone+'</button>';}
  function finish(remote){
    if(!['active','ringing'].includes(s.phase))return;
    if(s.phase==='ringing')s.record?.('missed');
    const interrupted=!remote&&s.phase==='active'&&s.part===2;
    if(s.part===1)s.firstDone=true;
    close();el.innerHTML='';
    if(interrupted){
      s.followup='queued';
      playLaughSound();
      setTimeout(()=>{s.notify?.('ㅋㅋ');s.followup='awaiting';},1000);
    }
  }
  function tick(){if(s.phase!=='active')return;const now=Date.now();if(!document.hidden){const dt=now-s.last;s.elapsed+=dt;s.remaining-=dt;const clock=el.querySelector('.yoon-call-clock');if(clock)clock.textContent=String(Math.floor(s.elapsed/60000)).padStart(2,'0')+':'+String(Math.floor(s.elapsed/1000)%60).padStart(2,'0');if(s.remaining<=0){const lines=s.part===1?first:second;if(s.index>=lines.length){finish(true);return;}const [name,text]=lines[s.index++];const bubble=document.createElement('div');bubble.className='yoon-transcript-line '+(name==='힐데'?'mine':'theirs');const label=document.createElement('small');label.textContent=name;if(name!=='힐데')bubble.appendChild(label);const p=document.createElement('p');p.textContent=text;bubble.appendChild(p);const list=el.querySelector('.yoon-call-transcript');list.appendChild(bubble);list.scrollTop=list.scrollHeight;s.remaining=Math.max(2400,Math.min(14000,1500+text.length*85));}}s.last=now;s.timer=setTimeout(tick,250);}
  function start(part){stopRingtone();if(part===2){if(s.secondUsed)return;s.secondUsed=true;document.querySelectorAll('[data-action="yoon-callback"]').forEach(button=>{button.disabled=true;button.setAttribute('aria-disabled','true');button.removeAttribute('data-action');});}clearTimeout(s.timer);s.part=part;s.phase='active';if(part===1)s.record?.('answered');else s.record?.('outgoing');s.elapsed=0;s.remaining=900;s.index=0;s.last=Date.now();show();el.className='yoon-call-full';el.setAttribute('role','dialog');el.setAttribute('aria-label','윤과 통화 중');const controls=[['audio','오디오'],['video','FaceTime'],['mute','소리 끔'],['more','더 보기'],['end','종료'],['keypad','키패드']];el.innerHTML='<header class="yoon-call-heading"><div><time class="yoon-call-clock">00:00</time><h2>윤</h2></div></header><div class="yoon-call-transcript" role="log" aria-live="polite" aria-label="통화 대화"></div><div class="yoon-call-controls">'+controls.map(([k,label])=>'<button '+(k==='end'?'data-yoon="end"':'disabled aria-disabled="true"')+' class="'+(k==='end'?'is-end':k==='audio'?'is-audio':'')+'"><span>'+(k==='end'?hang:glyph(k))+'</span><small>'+label+'</small></button>').join('')+'</div>';s.timer=setTimeout(tick,250);}
  el.addEventListener('click',e=>{const button=e.target.closest('[data-yoon]');if(!button)return;e.preventDefault();e.stopPropagation();switch(button.dataset.yoon){case'answer':if(s.phase==='ringing')start(1);break;case'decline':if(s.phase==='ringing'){s.part=1;finish(false);}break;case'end':finish(false);break;}});
  document.addEventListener('visibilitychange',()=>{s.last=Date.now();if(document.hidden){stopRingtone();stopLaughSound();}else if(s.phase==='pending')ring();else if(s.phase==='ringing')playRingtone(3);});
  window.HILDE_YOON_CALL={ready(avatar,notify,record){s.ready=true;s.avatar=avatar;s.notify=notify;s.record=record;},sent(){if(s.followup==='awaiting'){s.followup='done';setTimeout(()=>s.notify?.('안 튀어?'),1200);return;}if(!s.ready||s.triggered)return;s.triggered=true;s.phase='scheduled';playRingtone(0);s.timer=setTimeout(ring,3000);},canReturn(id){return id==='yoon'&&s.firstDone&&!s.secondUsed;},callback(){if(s.firstDone&&!s.secondUsed&&s.phase==='idle')start(2);},suspend(){stopRingtone();stopLaughSound();},resume(){if(s.phase==='pending')ring();}};
})();
