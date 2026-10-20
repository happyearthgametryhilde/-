/* Edit these entries to change the phone's fictional contents.
   All dialogue and notes below are original examples, not quotations. */
window.HILDE_CONTENT = {
  owner: '힐데베르트 탈레브',
  badges: {},
  // General samples stay paused; the scripted Kakao exchange runs on unlock.
  notifications: {enabled:false,events:[]},
  kakaoScene: {
    chatId:'yoon',
    opening:{id:'yoon-privacy-opening',text:'너냐?',delay:1000},
    sentText:'이거 사생활 침해....',
    replies:[
      {id:'yoon-privacy-reply-1',text:'맞나보네',delay:1100},
      {id:'yoon-privacy-reply-2',text:'근황 확인 끝나면 전화해라',delay:2300},
      {id:'yoon-privacy-reply-3',text:'너 바쁘니까',delay:3500}
    ]
  },
  contacts: [],
  phone: {historyRevision:'contacts-cleared-20261018',calls:[]},
  messages: [],
  promotionalMessages: [],
  kakao: [],
  kakaoLayout: {targetConversations:29},
  kakaoProfileImages: {
    'kakao-kai':'assets/kakao/profiles/kai.png',
    ami:'assets/kakao/profiles/ami.png',
    'kakao-daeja':'assets/kakao/profiles/daeja.png',
    yoon:'assets/kakao/profiles/yoon.jpeg'
  },
  notesRevision: 'reference-notes-20261018-v75',
  notes: [
    {
        "id": "personal-details-2023",
        "title": "인적사항",
        "body": "생일 8.20\n나이 28\n친부모 모름\n보육원에서 자람\n초중고대 사이버 수강\n올 초 채용 시험에 합격했지만 노화 정지 및 회복력 강화 과정에서 문제가 생겨 배치가 늦어짐\n채용 과정은 비밀 서약 작성",
        "modified": "2023년",
        "year": 2023,
        "pinned": false
    },
    {
        "id": "checklist-2024",
        "title": "",
        "body": "시온의 장례\n세케이아의 '성공했다'는 말에 대해 알아보기\nFrom K 이스터에그 찾기\n다른 From 시리즈 입수 후 플레이하기\n포탈 사고에 대해 알아보기\n1/3의 동족에 대해 물어보기",
        "kind": "checklist",
        "checklist": [
            {
                "text": "시온의 장례",
                "checked": false
            },
            {
                "text": "세케이아의 '성공했다'는 말에 대해 알아보기",
                "checked": false
            },
            {
                "text": "From K 이스터에그 찾기",
                "checked": false
            },
            {
                "text": "다른 From 시리즈 입수 후 플레이하기",
                "checked": false
            },
            {
                "text": "포탈 사고에 대해 알아보기",
                "checked": false
            },
            {
                "text": "1/3의 동족에 대해 물어보기",
                "checked": false
            }
        ],
        "modified": "2024년",
        "year": 2024,
        "pinned": false
    }
],
  gallery: {mode:'placeholders',count:820,visibleCount:50,allowImports:false},
  photos: [
    {id:'photo-upload-20261020-06',src:'assets/photos/cat-06.jpg',label:'추가한 사진 6',date:'10월 20일'},
    {id:'photo-upload-20261020-05',src:'assets/photos/cat-05.jpg',label:'추가한 사진 5',date:'10월 20일'},
    {id:'photo-upload-20261020-04',src:'assets/photos/cat-04.jpg',label:'추가한 사진 4',date:'10월 20일'},
    {id:'photo-upload-20261020-03',src:'assets/photos/cat-03.jpg',label:'추가한 사진 3',date:'10월 20일'},
    {id:'photo-upload-20261020-02',src:'assets/photos/cat-02.jpg',label:'추가한 사진 2',date:'10월 20일'},
    {id:'photo-upload-20261020-01',src:'assets/photos/cat-01.jpg',label:'추가한 사진 1',date:'10월 20일'}
  ],
  events: [
    {day:17,title:'일정 확인',time:'09:00',color:'#e68a66'},
    {day:17,title:'윤에게 연락',time:'18:00',color:'#839f92'},
    {day:20,title:'메모 정리',time:'20:00',color:'#b99a62'}
  ],
  instagram: {
    username:'hildehildehildehildebert',
    followers:101000,
    following:62,
    stories:[
      {username:'0307tom',name:'톰 허슨'},
      {username:'liia.x',name:'리아'},
      {username:'sphia_kr7',name:'Sophia Karlak'},
      {username:'iho.chang',name:'Iho Chang'},
      {username:'dellxii_',name:'Deltei'},
      {username:'s_huu',name:'Shu Diamond'},
      {username:'dantewtf',name:'단테'},
      {username:'barbie.winter',name:'Barbie Winter'},
      {username:'axh1.fk',name:'Achille Fisker'},
      {username:'hessylyle_',name:'헤시 라일'},
      {username:'jhu_k',name:'강주'}
    ],
    connections:[
      {username:'blackjack',name:'Jack Black',initial:'JB',color:'#22272d',bio:'',verified:true,mutual:true,viewable:true,followers:1870000,following:58,postCount:63,visiblePostCount:9,visiblePostIds:['ig-hilde-01','ig-jack-01','ig-jack-02','ig-jack-03','ig-jack-04','ig-jack-05','ig-jack-06','ig-jack-07','ig-jack-08'],posts:[
        {"id":"ig-jack-01","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-02.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"After five seasons, I've decided to retire from Formula 1.\n\nFrom winning on my debut to five consecutive world titles, it's been an incredible journey. Thank you to the team and everyone I've worked with, and to all of you who have supported me through it all.\n\nI'm proud of what we achieved together. Thank you for everything. See you around 👊","date":"2024년 12월 8일","publishedAt":"2024-12-08","commentCount":86247,"repostCount":214000,"likedBy":"f1","commentsPreview":[{"username":"apex.afterhours","text":"Thank you for five unforgettable seasons. Enjoy the next chapter, Jack ❤️"},{"username":"pitlane.club","text":"From your first race to the last. What a career. Thank you, champ 🏆"}]},
        {"id":"ig-jack-02","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-03.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"FIVE-TIME WORLD CHAMPION!!!!! 🏆🏆🏆🏆🏆\nFrom a win on my F1 debut to five consecutive titles. Very proud of what we've done together. A big thank you to everyone in the team and all of you supporting us 🙌","date":"2024년 11월 24일","publishedAt":"2024-11-24","commentCount":1790,"repostCount":7100,"likedBy":"trackside.notes","commentsPreview":[{"username":"pitlane.club","text":"A champion in every season you've raced. That's ridiculous."},{"username":"racing.weekend","text":"FIVE. IN. A. ROW. 🏆"}]},
        {"id":"ig-jack-03","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-04.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"P1!!! Good pace all race and a strong final stint. We stayed calm and made the right calls. A very good Sunday for the team 💪","date":"2024년 9월 29일","publishedAt":"2024-09-29","commentCount":6524,"repostCount":19400,"likedBy":"flatout.support","commentsPreview":[{"username":"racing.weekend","text":"That last stint was unbelievable."},{"username":"thelatebrakers","text":"Another Sunday, another masterclass."}]},
        {"id":"ig-jack-04","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-05.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A few days at home. Good to recharge before we get back to racing 👊","date":"2024년 8월 18일","publishedAt":"2024-08-18","commentCount":923,"repostCount":2600,"likedBy":"garage.radio","commentsPreview":[{"username":"thelatebrakers","text":"Enjoy the time with your people."},{"username":"trackside.notes","text":"Get some rest, champ!"}]},
        {"id":"ig-jack-05","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-06.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A tough race in those conditions, but a very good result at the end! Happy with the car and the decisions we made. Great work from everyone 💪","date":"2024년 7월 7일","publishedAt":"2024-07-07","commentCount":2446,"repostCount":8200,"likedBy":"curbside.club","commentsPreview":[{"username":"trackside.notes","text":"That drive in those conditions. Respect."},{"username":"flatout.support","text":"The commitment through the fast corners!"}]},
        {"id":"ig-jack-06","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-07.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A weekend with this group 🙌 A lot of work goes on behind the garage doors. Good to share the result with everyone who helped make it happen.","date":"2024년 6월 2일","publishedAt":"2024-06-02","commentCount":8712,"repostCount":27100,"likedBy":"apex.afterhours","commentsPreview":[{"username":"flatout.support","text":"The people behind every good weekend."},{"username":"garage.radio","text":"What a team!"}]},
        {"id":"ig-jack-07","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-08.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"P2 today. We got the most out of the car, but didn't have quite enough pace to fight for the win. We know where we need to improve. We'll keep working 👊","date":"2024년 5월 12일","publishedAt":"2024-05-12","commentCount":3158,"repostCount":11600,"likedBy":"pitlane.club","commentsPreview":[{"username":"garage.radio","text":"We win together and we learn together."},{"username":"curbside.club","text":"Pace was there. Your time is coming."}]},
        {"id":"ig-jack-08","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-09.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"My first win of the year!! 🏆 A good result after a lot of hard work. Very happy to give the team something to celebrate. Thank you for the support 🙌","date":"2024년 4월 14일","publishedAt":"2024-04-14","commentCount":1649,"repostCount":4300,"likedBy":"racing.weekend","commentsPreview":[{"username":"curbside.club","text":"First of many this year, Jack! 🏆"},{"username":"apex.afterhours","text":"Worth the wait. Congratulations!"}]},
        {"id":"ig-jack-09","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-02.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A useful weekend for us. We found a better balance with the car and learned a lot over the long runs. Plenty to build on 👊","date":"2024년 6월 30일","publishedAt":"2024-06-30","commentCount":6204,"repostCount":2368,"likedBy":"thelatebrakers","commentsPreview":[{"username":"apex.afterhours","text":"Progress is progress. Keep going."},{"username":"pitlane.club","text":"The balance looked much better."}]},
        {"id":"ig-jack-10","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-03.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Some important points after a difficult race. Good work on the stops and a lot of effort from the team all weekend. We keep going 💪","date":"2024년 6월 9일","publishedAt":"2024-06-09","commentCount":7937,"repostCount":5939,"likedBy":"trackside.notes","commentsPreview":[{"username":"pitlane.club","text":"Good points from a tough weekend."},{"username":"racing.weekend","text":"Quick stops made the difference."}]},
        {"id":"ig-jack-11","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-04.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A few moments from the weekend. Not the result we wanted yet, but everyone's working hard to get us there. Thank you for the support 🙌","date":"2024년 5월 19일","publishedAt":"2024-05-19","commentCount":1470,"repostCount":9510,"likedBy":"flatout.support","commentsPreview":[{"username":"racing.weekend","text":"With you through the difficult weekends too."},{"username":"thelatebrakers","text":"Keep working, the results will come."}]},
        {"id":"ig-jack-12","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-05.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"We tried to put them under pressure, but the win wasn't there today. Important points and plenty to take into the next race 👊","date":"2024년 4월 28일","publishedAt":"2024-04-28","commentCount":3203,"repostCount":13081,"likedBy":"garage.radio","commentsPreview":[{"username":"thelatebrakers","text":"Enjoy the time with your people."},{"username":"trackside.notes","text":"The best kind of reset."}]},
        {"id":"ig-jack-13","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-06.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A quiet weekend away. Nice to have a little break before the next one.","date":"2024년 4월 7일","publishedAt":"2024-04-07","commentCount":4936,"repostCount":16652,"likedBy":"curbside.club","commentsPreview":[{"username":"trackside.notes","text":"That drive in those conditions. Respect."},{"username":"flatout.support","text":"The commitment through the fast corners!"}]},
        {"id":"ig-jack-14","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-07.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Some time with friends and family. Racing again soon 🙌","date":"2024년 3월 17일","publishedAt":"2024-03-17","commentCount":6669,"repostCount":20223,"likedBy":"apex.afterhours","commentsPreview":[{"username":"flatout.support","text":"Still not over that last lap."},{"username":"garage.radio","text":"What a drive. What a weekend."}]},
        {"id":"ig-jack-15","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-08.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"First laps in the new car done ✅ Good to be back with the team. Plenty of data to go through before the season starts.","date":"2024년 2월 25일","publishedAt":"2024-02-25","commentCount":8402,"repostCount":23794,"likedBy":"pitlane.club","commentsPreview":[{"username":"garage.radio","text":"We win together and we learn together."},{"username":"curbside.club","text":"Pace was there. Your time is coming."}]},
        {"id":"ig-jack-16","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-09.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A productive few days in the sim. Looking forward to seeing what we can do on track 👊","date":"2024년 2월 4일","publishedAt":"2024-02-04","commentCount":1935,"repostCount":27365,"likedBy":"racing.weekend","commentsPreview":[{"username":"curbside.club","text":"Enjoy the break, Jack!"},{"username":"apex.afterhours","text":"No telemetry on holiday, please."}]},
        {"id":"ig-jack-17","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-02.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Back to work. Four titles behind us, a new season ahead 💪","date":"2024년 1월 14일","publishedAt":"2024-01-14","commentCount":3668,"repostCount":3336,"likedBy":"thelatebrakers","commentsPreview":[{"username":"apex.afterhours","text":"What a season. Proud to be here for all of it."},{"username":"pitlane.club","text":"Already counting down to lights out again."}]},
        {"id":"ig-jack-18","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-03.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A very good year for us. Four championships together and a lot to be proud of. Thanks for all your support this season. Enjoy the holidays 🙌","date":"2023년 12월 24일","publishedAt":"2023-12-24","commentCount":5401,"repostCount":6907,"likedBy":"trackside.notes","commentsPreview":[{"username":"pitlane.club","text":"Four titles already. What a year."},{"username":"racing.weekend","text":"Enjoy the holidays, Jack!"}]},
        {"id":"ig-jack-19","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-04.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A win to end the year! Very pleased with the pace today. A great way to finish a season that has given us so much. Well done team 💪","date":"2023년 12월 3일","publishedAt":"2023-12-03","commentCount":7134,"repostCount":10478,"likedBy":"flatout.support","commentsPreview":[{"username":"racing.weekend","text":"Championship number four and still winning."},{"username":"thelatebrakers","text":"What a season from you and the team."}]},
        {"id":"ig-jack-20","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-05.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"FOUR-TIME WORLD CHAMPION!!!! 🏆🏆🏆🏆\nFour seasons in F1, four titles. A lot of hard work has gone into every one of them. Very proud of everyone who has been part of this. Thank you 🙌","date":"2023년 11월 12일","publishedAt":"2023-11-12","commentCount":667,"repostCount":14049,"likedBy":"garage.radio","commentsPreview":[{"username":"thelatebrakers","text":"FOUR IN FOUR. That's unbelievable."},{"username":"trackside.notes","text":"Your rookie title still feels like yesterday!"}]},
        {"id":"ig-jack-21","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-06.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Not an easy weekend, but we made good progress with the car. Happy to finish it with a win. Great effort from the whole team 💪","date":"2023년 10월 22일","publishedAt":"2023-10-22","commentCount":2400,"repostCount":17620,"likedBy":"curbside.club","commentsPreview":[{"username":"trackside.notes","text":"That drive in those conditions. Respect."},{"username":"flatout.support","text":"The commitment through the fast corners!"}]},
        {"id":"ig-jack-22","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-07.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A strong race 👊 The car felt good from the first lap. Thank you to everyone at the track and back at base!","date":"2023년 10월 1일","publishedAt":"2023-10-01","commentCount":4133,"repostCount":21191,"likedBy":"apex.afterhours","commentsPreview":[{"username":"flatout.support","text":"Still not over that last lap."},{"username":"garage.radio","text":"What a drive. What a weekend."}]},
        {"id":"ig-jack-23","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-08.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A good fight for the win today. We kept the tyres in a good window and had the pace when we needed it. Very happy with the result 🙌","date":"2023년 9월 10일","publishedAt":"2023-09-10","commentCount":5866,"repostCount":24762,"likedBy":"pitlane.club","commentsPreview":[{"username":"garage.radio","text":"We win together and we learn together."},{"username":"curbside.club","text":"Pace was there. Your time is coming."}]},
        {"id":"ig-jack-24","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-09.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A clean start and good pace meant we could run our own race. Nice work from the team on both stops as well 💪","date":"2023년 8월 20일","publishedAt":"2023-08-20","commentCount":7599,"repostCount":28333,"likedBy":"racing.weekend","commentsPreview":[{"username":"curbside.club","text":"Enjoy the break, Jack!"},{"username":"apex.afterhours","text":"No telemetry on holiday, please."}]},
        {"id":"ig-jack-25","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-02.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A few days to switch off. Then full focus on the next race 👊","date":"2023년 7월 30일","publishedAt":"2023-07-30","commentCount":1132,"repostCount":4304,"likedBy":"thelatebrakers","commentsPreview":[{"username":"apex.afterhours","text":"What a season. Proud to be here for all of it."},{"username":"pitlane.club","text":"Already counting down to lights out again."}]},
        {"id":"ig-jack-26","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-03.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Job done. A good haul of points for the team. Thanks everyone 🙌","date":"2023년 7월 9일","publishedAt":"2023-07-09","commentCount":2865,"repostCount":7875,"likedBy":"trackside.notes","commentsPreview":[{"username":"pitlane.club","text":"All eyes on Sunday. You have got this!"},{"username":"racing.weekend","text":"Full support from the first lap to the last."}]},
        {"id":"ig-jack-27","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-04.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A challenging race, but we brought the win home. The calls from the pit wall were spot on. Very pleased with how we handled it 💪","date":"2023년 6월 18일","publishedAt":"2023-06-18","commentCount":4598,"repostCount":11446,"likedBy":"flatout.support","commentsPreview":[{"username":"racing.weekend","text":"That final stint was unreal."},{"username":"thelatebrakers","text":"The whole garage deserves this one."}]},
        {"id":"ig-jack-28","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-05.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A special win in front of a great crowd. Thank you for the support all weekend 🙌","date":"2023년 5월 28일","publishedAt":"2023-05-28","commentCount":6331,"repostCount":15017,"likedBy":"garage.radio","commentsPreview":[{"username":"thelatebrakers","text":"Enjoy the time with your people."},{"username":"trackside.notes","text":"The best kind of reset."}]},
        {"id":"ig-jack-29","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-06.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"We weren't quick enough today, so there are a few things to understand before the next one. Thank you for the support. We'll keep pushing 👊","date":"2023년 5월 7일","publishedAt":"2023-05-07","commentCount":8064,"repostCount":18588,"likedBy":"curbside.club","commentsPreview":[{"username":"trackside.notes","text":"That drive in those conditions. Respect."},{"username":"flatout.support","text":"The commitment through the fast corners!"}]},
        {"id":"ig-jack-30","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-07.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Back on the top step 🏆 A strong weekend from everyone. Happy with the way the car has improved over the last few races.","date":"2023년 4월 16일","publishedAt":"2023-04-16","commentCount":1597,"repostCount":22159,"likedBy":"apex.afterhours","commentsPreview":[{"username":"flatout.support","text":"Still not over that last lap."},{"username":"garage.radio","text":"What a drive. What a weekend."}]},
        {"id":"ig-jack-31","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-08.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"We had to manage the tyres a bit, but the pace was good when it mattered. Another very good result for the team 💪","date":"2023년 3월 26일","publishedAt":"2023-03-26","commentCount":3330,"repostCount":25730,"likedBy":"pitlane.club","commentsPreview":[{"username":"garage.radio","text":"We win together and we learn together."},{"username":"curbside.club","text":"Pace was there. Your time is coming."}]},
        {"id":"ig-jack-32","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-09.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Three titles. A fresh season. Same target 👊","date":"2023년 3월 5일","publishedAt":"2023-03-05","commentCount":5063,"repostCount":1701,"likedBy":"racing.weekend","commentsPreview":[{"username":"curbside.club","text":"Enjoy the break, Jack!"},{"username":"apex.afterhours","text":"No telemetry on holiday, please."}]},
        {"id":"ig-jack-33","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-02.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Testing complete ✅ We got through the programme and learned a lot about the car. Looking forward to the first race!","date":"2023년 2월 12일","publishedAt":"2023-02-12","commentCount":6796,"repostCount":5272,"likedBy":"thelatebrakers","commentsPreview":[{"username":"apex.afterhours","text":"What a season. Proud to be here for all of it."},{"username":"pitlane.club","text":"Already counting down to lights out again."}]},
        {"id":"ig-jack-34","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-03.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"New helmet for the new season. Ready to get going 💪","date":"2023년 1월 22일","publishedAt":"2023-01-22","commentCount":8529,"repostCount":8843,"likedBy":"trackside.notes","commentsPreview":[{"username":"pitlane.club","text":"All eyes on Sunday. You have got this!"},{"username":"racing.weekend","text":"Full support from the first lap to the last."}]},
        {"id":"ig-jack-35","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-04.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A good break. Now back to preparing for the season ahead. Thanks for all the messages over the holidays 🙌","date":"2023년 1월 1일","publishedAt":"2023-01-01","commentCount":2062,"repostCount":12414,"likedBy":"flatout.support","commentsPreview":[{"username":"racing.weekend","text":"That final stint was unreal."},{"username":"thelatebrakers","text":"The whole garage deserves this one."}]},
        {"id":"ig-jack-36","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-05.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A third championship trophy to take home 🏆 An incredible year for the team. Proud of what we've achieved together. Thank you!","date":"2022년 12월 11일","publishedAt":"2022-12-11","commentCount":3795,"repostCount":15985,"likedBy":"garage.radio","commentsPreview":[{"username":"thelatebrakers","text":"Three titles and still the same trophy pose 😂"},{"username":"trackside.notes","text":"What a season. Congratulations!"}]},
        {"id":"ig-jack-37","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-06.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"THREE-TIME WORLD CHAMPION!!! 🏆🏆🏆\nThree in a row from the rookie season. Very happy to share this with such a good group of people. Thanks to everyone who has worked so hard for us 🙌","date":"2022년 11월 20일","publishedAt":"2022-11-20","commentCount":5528,"repostCount":19556,"likedBy":"curbside.club","commentsPreview":[{"username":"trackside.notes","text":"A title every year since your debut. Unreal."},{"username":"flatout.support","text":"Three in a row, champ! 🏆"}]},
        {"id":"ig-jack-38","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-07.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"We found a good balance with the car and carried that through the race. Nice work from the whole crew this weekend 💪","date":"2022년 10월 30일","publishedAt":"2022-10-30","commentCount":7261,"repostCount":23127,"likedBy":"apex.afterhours","commentsPreview":[{"username":"flatout.support","text":"Still not over that last lap."},{"username":"garage.radio","text":"What a drive. What a weekend."}]},
        {"id":"ig-jack-39","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-08.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A win after a very close race. We had to get everything right in the last stint. Very pleased we could finish the job 👊","date":"2022년 10월 9일","publishedAt":"2022-10-09","commentCount":794,"repostCount":26698,"likedBy":"pitlane.club","commentsPreview":[{"username":"garage.radio","text":"We win together and we learn together."},{"username":"curbside.club","text":"Pace was there. Your time is coming."}]},
        {"id":"ig-jack-40","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-09.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"We tried a different approach, but didn't have the pace to make it work. Still good points. We'll look through it all with the team.","date":"2022년 9월 18일","publishedAt":"2022-09-18","commentCount":2527,"repostCount":2669,"likedBy":"racing.weekend","commentsPreview":[{"username":"curbside.club","text":"Enjoy the break, Jack!"},{"username":"apex.afterhours","text":"No telemetry on holiday, please."}]},
        {"id":"ig-jack-41","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-02.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A demanding race 💪 Everyone had to stay focused today. A strong effort from the whole team to get this result.","date":"2022년 8월 28일","publishedAt":"2022-08-28","commentCount":4260,"repostCount":6240,"likedBy":"thelatebrakers","commentsPreview":[{"username":"apex.afterhours","text":"What a season. Proud to be here for all of it."},{"username":"pitlane.club","text":"Already counting down to lights out again."}]},
        {"id":"ig-jack-42","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-03.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Back in a kart for a few laps. Always good fun 🙌","date":"2022년 8월 7일","publishedAt":"2022-08-07","commentCount":5993,"repostCount":9811,"likedBy":"trackside.notes","commentsPreview":[{"username":"pitlane.club","text":"All eyes on Sunday. You have got this!"},{"username":"racing.weekend","text":"Full support from the first lap to the last."}]},
        {"id":"ig-jack-43","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-04.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Some time away from the circuit. Nice to catch up with everyone at home.","date":"2022년 7월 17일","publishedAt":"2022-07-17","commentCount":7726,"repostCount":13382,"likedBy":"flatout.support","commentsPreview":[{"username":"racing.weekend","text":"That final stint was unreal."},{"username":"thelatebrakers","text":"The whole garage deserves this one."}]},
        {"id":"ig-jack-44","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-05.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Great atmosphere all weekend. Good to give you all a win to celebrate. Thanks for coming out to support us 🙌","date":"2022년 6월 26일","publishedAt":"2022-06-26","commentCount":1259,"repostCount":16953,"likedBy":"garage.radio","commentsPreview":[{"username":"thelatebrakers","text":"Enjoy the time with your people."},{"username":"trackside.notes","text":"The best kind of reset."}]},
        {"id":"ig-jack-45","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-06.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A win and fastest lap 💪 Very happy with the car today. We could keep pushing right up to the end. Great work team!","date":"2022년 6월 5일","publishedAt":"2022-06-05","commentCount":2992,"repostCount":20524,"likedBy":"curbside.club","commentsPreview":[{"username":"trackside.notes","text":"That drive in those conditions. Respect."},{"username":"flatout.support","text":"The commitment through the fast corners!"}]},
        {"id":"ig-jack-46","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-07.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A difficult start to the weekend, but a very good result in the end. Well done to everyone who worked to turn this around 👊","date":"2022년 5월 15일","publishedAt":"2022-05-15","commentCount":4725,"repostCount":24095,"likedBy":"apex.afterhours","commentsPreview":[{"username":"flatout.support","text":"Still not over that last lap."},{"username":"garage.radio","text":"What a drive. What a weekend."}]},
        {"id":"ig-jack-47","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-08.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A couple of days at home before the next race. Good to take a short break.","date":"2022년 4월 24일","publishedAt":"2022-04-24","commentCount":6458,"repostCount":27666,"likedBy":"pitlane.club","commentsPreview":[{"username":"garage.radio","text":"We win together and we learn together."},{"username":"curbside.club","text":"Pace was there. Your time is coming."}]},
        {"id":"ig-jack-48","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-09.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"First win of the year 🏆 A strong race from start to finish. Happy to get it done for the team. Let's keep this going 💪","date":"2022년 4월 3일","publishedAt":"2022-04-03","commentCount":8191,"repostCount":3637,"likedBy":"racing.weekend","commentsPreview":[{"username":"curbside.club","text":"Enjoy the break, Jack!"},{"username":"apex.afterhours","text":"No telemetry on holiday, please."}]},
        {"id":"ig-jack-49","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-02.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A good starting point for the season. There are a few areas to improve, but plenty to work with. Looking forward to getting back out there 👊","date":"2022년 3월 13일","publishedAt":"2022-03-13","commentCount":1724,"repostCount":7208,"likedBy":"thelatebrakers","commentsPreview":[{"username":"apex.afterhours","text":"What a season. Proud to be here for all of it."},{"username":"pitlane.club","text":"Already counting down to lights out again."}]},
        {"id":"ig-jack-50","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-03.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Testing done. A lot of useful laps and a good understanding of the car. Next up, the first race 🙌","date":"2022년 2월 20일","publishedAt":"2022-02-20","commentCount":3457,"repostCount":10779,"likedBy":"trackside.notes","commentsPreview":[{"username":"pitlane.club","text":"All eyes on Sunday. You have got this!"},{"username":"racing.weekend","text":"Full support from the first lap to the last."}]},
        {"id":"ig-jack-51","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-04.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Preparation continues. Training, sim work and plenty of time with the team. Not long now 💪","date":"2022년 1월 30일","publishedAt":"2022-01-30","commentCount":5190,"repostCount":14350,"likedBy":"flatout.support","commentsPreview":[{"username":"racing.weekend","text":"That final stint was unreal."},{"username":"thelatebrakers","text":"The whole garage deserves this one."}]},
        {"id":"ig-jack-52","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-05.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Enjoying the last few days off. Then it's back to work for another season 👊","date":"2022년 1월 9일","publishedAt":"2022-01-09","commentCount":6923,"repostCount":17921,"likedBy":"garage.radio","commentsPreview":[{"username":"thelatebrakers","text":"Enjoy the time with your people."},{"username":"trackside.notes","text":"The best kind of reset."}]},
        {"id":"ig-jack-53","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-06.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"TWO-TIME WORLD CHAMPION!! 🏆🏆\nWinning the title in my first season was special. To do it again means a lot. Very proud of the team and the work we've done together. Thank you all 🙌","date":"2021년 12월 19일","publishedAt":"2021-12-19","commentCount":8656,"repostCount":21492,"likedBy":"curbside.club","commentsPreview":[{"username":"trackside.notes","text":"Rookie champion to double champion. What a start."},{"username":"flatout.support","text":"Two seasons. Two titles. Ridiculous."}]},
        {"id":"ig-jack-54","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-07.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Good pace and a well-executed strategy. The team did a great job today. Very happy with this one 💪","date":"2021년 11월 28일","publishedAt":"2021-11-28","commentCount":2189,"repostCount":25063,"likedBy":"apex.afterhours","commentsPreview":[{"username":"flatout.support","text":"Still not over that last lap."},{"username":"garage.radio","text":"What a drive. What a weekend."}]},
        {"id":"ig-jack-55","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-08.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A good Sunday for us. Tyre management was important and we got the balance right. Well done team 👊","date":"2021년 11월 7일","publishedAt":"2021-11-07","commentCount":3922,"repostCount":28634,"likedBy":"pitlane.club","commentsPreview":[{"username":"garage.radio","text":"We win together and we learn together."},{"username":"curbside.club","text":"Pace was there. Your time is coming."}]},
        {"id":"ig-jack-56","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-09.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A race with a bit of everything. We kept our heads down and took the opportunities. Very pleased with the result 💪","date":"2021년 10월 17일","publishedAt":"2021-10-17","commentCount":5655,"repostCount":4605,"likedBy":"racing.weekend","commentsPreview":[{"username":"curbside.club","text":"Enjoy the break, Jack!"},{"username":"apex.afterhours","text":"No telemetry on holiday, please."}]},
        {"id":"ig-jack-57","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-02.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"We were close, but not close enough today. We'll go through the weekend and see where we can find a bit more pace.","date":"2021년 9월 26일","publishedAt":"2021-09-26","commentCount":7388,"repostCount":8176,"likedBy":"thelatebrakers","commentsPreview":[{"username":"apex.afterhours","text":"What a season. Proud to be here for all of it."},{"username":"pitlane.club","text":"Already counting down to lights out again."}]},
        {"id":"ig-jack-58","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-03.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A win for the team 🏆 Very happy with how the car felt today. Thanks to everyone who made this weekend possible 🙌","date":"2021년 9월 5일","publishedAt":"2021-09-05","commentCount":921,"repostCount":11747,"likedBy":"trackside.notes","commentsPreview":[{"username":"pitlane.club","text":"All eyes on Sunday. You have got this!"},{"username":"racing.weekend","text":"Full support from the first lap to the last."}]},
        {"id":"ig-jack-59","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-04.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A good place to finish a Sunday 👊🏆","date":"2021년 8월 15일","publishedAt":"2021-08-15","commentCount":2654,"repostCount":15318,"likedBy":"flatout.support","commentsPreview":[{"username":"racing.weekend","text":"That final stint was unreal."},{"username":"thelatebrakers","text":"The whole garage deserves this one."}]},
        {"id":"ig-jack-60","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-05.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"A strong race and a very competitive car. Thanks for the hard work, team. More points on the board 💪","date":"2021년 7월 25일","publishedAt":"2021-07-25","commentCount":4387,"repostCount":18889,"likedBy":"garage.radio","commentsPreview":[{"username":"thelatebrakers","text":"Enjoy the time with your people."},{"username":"trackside.notes","text":"The best kind of reset."}]},
        {"id":"ig-jack-61","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-06.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"One season in F1, one world title. Very happy with that start, but there's still plenty I want to achieve. Good to be back working on the next one 👊","date":"2021년 7월 4일","publishedAt":"2021-07-04","commentCount":6120,"repostCount":22460,"likedBy":"curbside.club","commentsPreview":[{"username":"trackside.notes","text":"Still can't believe that rookie season."},{"username":"flatout.support","text":"Back-to-back titles next, please!"}]},
        {"id":"ig-jack-62","username":"blackjack","name":"Jack Black","initial":"JB","color":"#22272d","image":{"src":"assets/instagram/jack-gradient-07.svg?v=20261018ap","label":"오렌지·레드 계열의 그라데이션"},"caption":"Looking back at the debut win. First F1 start, first victory, and the title at the end of that rookie season. A special start with a great team. Thanks to everyone who believed in us 🙌","date":"2021년 6월 13일","publishedAt":"2021-06-13","commentCount":7853,"repostCount":26031,"likedBy":"apex.afterhours","commentsPreview":[{"username":"flatout.support","text":"Watched that debut live. Still gives me chills."},{"username":"garage.radio","text":"First race, first win. We knew you were special."}]}
      ]}
    ],
    posts:[
      {id:'ig-hilde-01',username:'blackjack',name:'Jack Black',initial:'JB',color:'#22272d',photo:'photo-0001',image:{src:'assets/instagram/jack-gradient-01.svg?v=20261018at',label:'짙은 회색 그라데이션'},caption:'From K',collaborators:['hildehildehildehildebert'],repostCount:38000,tags:[{username:'hildehildehildehildebert'}],date:'2025년 6월 21일',publishedAt:'2025-06-21',commentCount:23830,commentsPreview:[
        {username:'user_0820',text:'사진 더 올려 주세요.'},
        {username:'quiet.day',text:'오랜만이에요.'},
        {username:'hello_there',text:'잘 지내고 계시죠?'}
      ]}
    ],
    feedExtras:[
      {"id":"ig-noodles-ad","type":"ad","username":"lexique.noodles","name":"렉시크 누들","poster":"assets/instagram/lexique-noodles-emoji.svg?v=20261018ax","text":"힐데베르트 탈레브가 선택한 렉시크 누들 🍜"},
      {"id":"ig-sordi-reel","type":"reel","username":"dayoff_92","title":"소르디 비율 체감 영상ㄷㄷ","description":"시민이 촬영한 리카르도 소르디. 크리처 토벌 후 오토바이에 기대어 담배를 피우는 장면.","poster":"assets/instagram/reel-sordi.svg?v=20261018ay","posterLabel":"짙은 회색 단색 미리보기","plays":"124만","tone":"dark"},
      {"id":"ig-twain-reel","type":"reel","username":"yuna.__.o","title":"존잘 블랙배저 근황 #제이슨트베인","description":"시민이 촬영한 제이슨 트베인. 떨어지는 여성을 깔끔히 받아내고 씩 웃는 장면.","poster":"assets/instagram/reel-twain.svg?v=20261018ay","posterLabel":"중간 회색 단색 미리보기","plays":"187만","tone":"dark"},
      {"id":"ig-lo-reel","type":"reel","username":"minseok_07","title":"자코모 로 진짜 개웃기네ㅋㅋㅋㅋㅋㅋ","description":"시민이 촬영한 자코모 로. 우오오오 소리치며 아미를 태운 인력거를 엄청난 속도로 끌고 사라지는 장면.","poster":"assets/instagram/reel-lo.svg?v=20261019a","posterLabel":"회색 단색 미리보기","plays":"96만","tone":"dark"}
    ]
  },
  youtube: {
    "displayOnly": true,
    "videos": [
        {
            "id": "badger-tier10-hunt",
            "title": "블랙배저 10단계 크리처 토벌",
            "channel": "지나가던 시민",
            "channelColor": "#87939d",
            "category": "블랙배저",
            "poster": "assets/youtube/tier10-gray.svg?v=20261018bb",
            "posterLabel": "회색 단색 썸네일",
            "views": 100000000,
            "clickable": false,
            "published": "50년 전"
        },
        {
            "id": "mario-badger-dispatch",
            "title": "마리오 배저 출동 영상",
            "channel": "짤줍소",
            "channelColor": "#73868a",
            "category": "블랙배저",
            "poster": "assets/youtube/mario-dispatch-slate.svg?v=20261019f",
            "posterLabel": "회청색 단색 썸네일",
            "views": 328000,
            "published": "6개월 전",
            "clickable": false
        },
        {
            "id": "lexique-first-taste",
            "title": "화제의 렉시크 누들 한번 먹어봤습니다",
            "channel": "리뷰하는 준",
            "channelColor": "#ad6853",
            "category": "먹방",
            "poster": "assets/youtube/noodles-first-coral.svg?v=20261018bc",
            "posterLabel": "차분한 코랄색 단색 썸네일",
            "views": 186000,
            "published": "1년 전",
            "clickable": false
        },
        {
            "id": "hilde-appearance",
            "title": "'그' 등장",
            "channel": "이슈한컷",
            "channelColor": "#706a82",
            "category": "블랙배저",
            "poster": "assets/youtube/hilde-appearance-charcoal.svg?v=20261019f",
            "posterLabel": "짙은 회색 단색 썸네일",
            "views": 618000,
            "published": "3개월 전",
            "duration": "0:47",
            "likes": 27643,
            "clickable": true,
            "comments": [
                {"id":"appearance-c01","username":"@justpassing_","text":"검 뽑긴 한 거임? 뽑는 동작이 아예 안 보이는데;","likes":6842},
                {"id":"appearance-c02","username":"@bluehour_9","text":"제다이의 귀환","likes":3127},
                {"id":"appearance-c03","username":"@greenshell","text":"아 전염병 좀 돈다고 마리오는 안 쓰러진다고~ 백발 마리오 렉시크 누들 먹어야 된다고 어제도 렉시크 누들 맛있다는 말에 엄지손가락 들어줬다고","likes":8649},
                {"id":"appearance-c04","username":"@itsme_52","text":"잇츠 미! 마~리오!","parent":"appearance-c03","likes":325},
                {"id":"appearance-c05","username":"@chiptune_day","text":"띠디띠디리 띠!","parent":"appearance-c03","likes":184},
                {"id":"appearance-c06","username":"@silvercloud","text":"개잘생김","likes":4218},
                {"id":"appearance-c07","username":"@noodlequestion","text":"렉시크 누들 왜 이렇게 좋아함??","likes":1736},
                {"id":"appearance-c08","username":"@afterwork_21","text":"혀는 멀쩡하지 않나보지","parent":"appearance-c07","likes":946},
                {"id":"appearance-c09","username":"@snip_snip","text":"머리 잘라주고 싶다","likes":82},
                {"id":"appearance-c10","username":"@one_more_bite","text":"근데 렉시크 누들 진짜 맛있지 않냐?","likes":213},
                {"id":"appearance-c11","username":"@truthfinder_8","text":"세금 들여서 만든 강화신체라면서 갑자기 픽픽 쓰러져나가는게 말이 않 됨, 자꾸 저 백발만 밀어주는것도 그렇고 여론 조작의 넴새가 난다","likes":7},
                {"id":"appearance-c12","username":"@walkhome","text":"네다음크리처 먹이1","parent":"appearance-c11","likes":1204}
            ]
        },
        {
            "id": "lexique-original-mukbang",
            "title": "렉시크 누들 기본맛 먹방",
            "channel": "한입리뷰",
            "channelColor": "#8b925e",
            "category": "먹방",
            "poster": "assets/youtube/noodles-original-olive.svg?v=20261018bc",
            "posterLabel": "차분한 올리브색 단색 썸네일",
            "views": 128000,
            "published": "1년 전",
            "clickable": false
        },
        {
            "id": "hilde-noodle-tasteless",
            "title": "힐데베르트에게 렉시크 누들이 맛없다고 해보았다",
            "channel": "도하 DOHA",
            "channelColor": "#b18c66",
            "category": "먹방",
            "poster": "assets/youtube/noodle-prank-sand.svg?v=20261019f",
            "posterLabel": "모래색 단색 썸네일",
            "views": 437000,
            "published": "1년 전",
            "clickable": false
        },
        {
            "id": "lexique-flavor-review",
            "title": "렉시크 누들 맛 설명",
            "channel": "미식노트",
            "channelColor": "#927b9c",
            "category": "먹방",
            "poster": "assets/youtube/noodles-review-lilac.svg?v=20261018bc",
            "posterLabel": "차분한 연보라색 단색 썸네일",
            "views": 74000,
            "published": "1년 전",
            "clickable": false
        }
    ],
    "shorts": [
        {
            "id": "jack-final-lap-title",
            "title": "Jack Black Wins Title With Final Lap Overtake!",
            "channel": "BlackJack Onboard",
            "channelColor": "#b87338",
            "category": "F1",
            "poster": "assets/youtube/jack-orange.svg?v=20261018bb",
            "posterLabel": "주황색 단색 썸네일",
            "views": 7020000,
            "published": "5년 전",
            "clickable": false
        },
        {
            "id": "badger-doughnut",
            "title": "시민이 준 도넛 먹는 배저",
            "channel": "올리버",
            "channelColor": "#6f9cac",
            "category": "블랙배저",
            "poster": "assets/youtube/doughnut-sky.svg?v=20261018bb",
            "posterLabel": "하늘색 단색 썸네일",
            "views": 10430000,
            "published": "9년 전",
            "clickable": false
        },
        {
            "id": "mario-badger",
            "title": "마리오 배저",
            "channel": "Toad",
            "channelColor": "#b85c52",
            "category": "블랙배저",
            "poster": "assets/youtube/mario-red.svg?v=20261018bd",
            "posterLabel": "붉은색 단색 썸네일",
            "views": 19500000,
            "published": "3년 전",
            "clickable": false
        },
        {
            "id": "commander-territory-announcement",
            "title": "총사령관 영토 탈환 선언 vs 성공 발표",
            "channel": "1분정치",
            "channelColor": "#64758a",
            "category": "블랙배저",
            "poster": "assets/youtube/commander-bluegray.svg?v=20261018be",
            "posterLabel": "청회색 단색 썸네일",
            "views": 4830000,
            "published": "7년 전",
            "clickable": false
        }
    ]
},
  safari: {
    recentSearches:['블랙배저','렉시크 누들','잠꼬대 안 하는 법','잭 블랙','from k 마지막 글씨','from k 공략','from e 게임','선물용 양주 추천','최윤','에이택','포든','이예현']
  },
  alarmsRevision: 'single-disabled-0700-20261018-v75',
  alarms: [
    {id:'morning',hour:7,minute:0,label:'알람',enabled:false}
  ]
};
window.HILDE_CONTENT.photos = window.HILDE_CONTENT.photos.concat(Array.from({length:window.HILDE_CONTENT.gallery.count-window.HILDE_CONTENT.photos.length},(_,i)=>({
  id:'photo-'+String(i+1).padStart(4,'0'),
  src:'assets/placeholders/'+String(i%16+1).padStart(2,'0')+'.svg',
  label:'IMG_'+String(window.HILDE_CONTENT.gallery.count-i).padStart(4,'0'),
  date:'10월 17일'
})));
