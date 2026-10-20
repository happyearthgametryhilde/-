/* Phone-only timeline changes from content/phone-timeline.json. */
(() => {
  'use strict';
  const supplied={
  "revision": "calls-20261020-01",
  "recentWindow": {
    "startDate": "2025-06-07",
    "endDate": "2025-06-25",
    "year": "2026"
  },
  "calls": [
    {
      "id": "recent-20261018-37",
      "date": "2026-10-14",
      "time": "18:42",
      "direction": "incoming"
    },
    {
      "id": "missed-20261018-74",
      "date": "2026-10-13"
    },
    {
      "id": "missed-20261018-64",
      "date": "2026-09-27"
    },
    {
      "id": "missed-20261018-54",
      "date": "2026-09-03"
    },
    {
      "id": "missed-20261018-53",
      "date": "2026-08-16"
    },
    {
      "id": "missed-20261018-34",
      "date": "2026-07-25"
    },
    {
      "id": "missed-20261018-24",
      "date": "2026-07-04"
    }
  ]
};
  const C=window.HILDE_CONTENT;
  const updates=new Map(supplied.calls.map(call=>[call.id,call]));
  const range=supplied.recentWindow;
  const calls=C.phone.calls.map(call=>{
    const date=call.date>=range.startDate&&call.date<=range.endDate?range.year+call.date.slice(4):call.date;
    return {...call,date,...updates.get(call.id)};
  }).sort((a,b)=>(b.date+'T'+b.time).localeCompare(a.date+'T'+a.time)||a.id.localeCompare(b.id));
  C.phone={...C.phone,historyRevision:supplied.revision,callingEnabled:false,liveIncomingEnabled:false,calls};
  window.HILDE_PHONE_HISTORY_OVERRIDES=supplied;
})();
