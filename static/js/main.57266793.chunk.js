(this.webpackJsonpttt_app=this.webpackJsonpttt_app||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(3),o=t.n(i),c=(t(10),t(1));t(11);function m(){return r.a.createElement("img",{className:"playerIcon",src:"./images/corgicorn.png",alt:"Corgi"})}function l(){return r.a.createElement("img",{className:"playerIcon",src:"./images/unicorn.png",alt:"Unicorn"})}function d(e){return r.a.createElement("div",{className:"playerWrapper"},!0===e.gameState.unicornTurn&&null===e.gameState.winnerAnnouncement&&r.a.createElement("div",{className:"insidePlayerWrapper"},r.a.createElement("p",null,"IT'S THE UNICORNS TURN!"),r.a.createElement(l,null)),!1===e.gameState.unicornTurn&&null===e.gameState.winnerAnnouncement&&r.a.createElement("div",{className:"insidePlayerWrapper"},r.a.createElement("p",null,"IT'S THE CORGIS TURN!"),r.a.createElement(m,null)))}function s(e){var a=!0!==e.gameState.unicornTurn;var t="U"===e.gameState.gameBoard[e.id].display?r.a.createElement(l,null):"C"===e.gameState.gameBoard[e.id].display?r.a.createElement(m,null):void 0;function n(){var a=e.gameState.gameBoard.slice(),t=e.gameState.unicornTurn?"U":"C";return a[e.id]=Object(c.a)(Object(c.a)({},a[e.id]),{},{display:t}),a}return r.a.createElement("div",null,"U"===e.image&&r.a.createElement("button",{className:"boxButton"},r.a.createElement(l,null)),"C"===e.image&&r.a.createElement("button",{className:"boxButton"},r.a.createElement(m,null)),"N"===e.image&&r.a.createElement("button",{className:"boxButton",onClick:function(t){return e.setGameState((function(e){return Object(c.a)(Object(c.a)({},e),{},{unicornTurn:a,gameBoard:n()})}))}},t))}function g(e){return Object(n.useEffect)((function(){"U"!==e.gameState.gameBoard[0].display&&"U"!==e.gameState.gameBoard[3].display&&"U"!==e.gameState.gameBoard[6].display||("U"===e.gameState.gameBoard[1].display&&"U"===e.gameState.gameBoard[2].display||"U"===e.gameState.gameBoard[4].display&&"U"===e.gameState.gameBoard[5].display||"U"===e.gameState.gameBoard[7].display&&"U"===e.gameState.gameBoard[8].display)&&e.setGameState((function(e){return Object(c.a)(Object(c.a)({},e),{},{score:{unicorn:e.score.unicorn+1,corgi:e.score.corgi},winnerAnnouncement:"U"})})),"C"!==e.gameState.gameBoard[0].display&&"C"!==e.gameState.gameBoard[3].display&&"C"!==e.gameState.gameBoard[6].display||("C"===e.gameState.gameBoard[1].display&&"C"===e.gameState.gameBoard[2].display?(console.log("WERE HERE"),e.setGameState((function(e){return Object(c.a)(Object(c.a)({},e),{},{score:{unicorn:e.score.unicorn,corgi:e.score.corgi+1},winnerAnnouncement:"C"})}))):("C"===e.gameState.gameBoard[4].display&&"C"===e.gameState.gameBoard[5].display||"C"===e.gameState.gameBoard[7].display&&"C"===e.gameState.gameBoard[8].display)&&e.setGameState((function(e){return Object(c.a)(Object(c.a)({},e),{},{score:{unicorn:e.score.unicorn,corgi:e.score.corgi+1},winnerAnnouncement:"C"})}))),("U"===e.gameState.gameBoard[0].display&&"U"===e.gameState.gameBoard[3].display&&"U"===e.gameState.gameBoard[6].display||"U"===e.gameState.gameBoard[1].display&&"U"===e.gameState.gameBoard[4].display&&"U"===e.gameState.gameBoard[7].display||"U"===e.gameState.gameBoard[2].display&&"U"===e.gameState.gameBoard[5].display&&"U"===e.gameState.gameBoard[8].display)&&e.setGameState((function(e){return Object(c.a)(Object(c.a)({},e),{},{score:{unicorn:e.score.unicorn+1,corgi:e.score.corgi},winnerAnnouncement:"U"})})),("C"===e.gameState.gameBoard[0].display&&"C"===e.gameState.gameBoard[3].display&&"C"===e.gameState.gameBoard[6].display||"C"===e.gameState.gameBoard[1].display&&"C"===e.gameState.gameBoard[4].display&&"C"===e.gameState.gameBoard[7].display||"C"===e.gameState.gameBoard[2].display&&"C"===e.gameState.gameBoard[5].display&&"C"===e.gameState.gameBoard[8].display)&&e.setGameState((function(e){return Object(c.a)(Object(c.a)({},e),{},{score:{unicorn:e.score.unicorn,corgi:e.score.corgi+1},winnerAnnouncement:"C"})})),"U"===e.gameState.gameBoard[4].display&&("U"===e.gameState.gameBoard[0].display&&"U"===e.gameState.gameBoard[8].display||"U"===e.gameState.gameBoard[2].display&&"U"===e.gameState.gameBoard[6].display)&&e.setGameState((function(e){return Object(c.a)(Object(c.a)({},e),{},{score:{unicorn:e.score.unicorn+1,corgi:e.score.corgi},winnerAnnouncement:"U"})})),void("C"===e.gameState.gameBoard[4].display&&("C"===e.gameState.gameBoard[0].display&&"C"===e.gameState.gameBoard[8].display||"C"===e.gameState.gameBoard[2].display&&"C"===e.gameState.gameBoard[6].display)&&e.setGameState((function(e){return Object(c.a)(Object(c.a)({},e),{},{score:{unicorn:e.score.unicorn,corgi:e.score.corgi+1},winnerAnnouncement:"C"})})))}),[e.gameState.gameBoard]),r.a.createElement("div",{className:"gameBoard"},r.a.createElement("div",{className:"gameBoardWrapper"},e.gameState.gameBoard.map((function(a){var t=a.index,n=a.display;return"U"===n||"N"===n||"C"===n?r.a.createElement(s,{image:n,key:t,id:t,gameState:e.gameState,setGameState:e.setGameState}):r.a.createElement("p",null,"A ROW!")}))))}var u=t(4);function p(e){return r.a.createElement("div",{className:"winnerWrapper"},"U"===e.gameState.winnerAnnouncement&&r.a.createElement("div",null,r.a.createElement("p",null,"UNICORN wins this round!"),r.a.createElement(l,null)),"C"===e.gameState.winnerAnnouncement&&r.a.createElement("div",null,r.a.createElement("p",null,"CORGI wins this round!"),r.a.createElement(m,null)))}var S=function(){var e=function(){var e=Object(n.useState)({unicornTurn:!0,gameBoard:[{index:0,display:"N"},{index:1,display:"N"},{index:2,display:"N"},{index:3,display:"N"},{index:4,display:"N"},{index:5,display:"N"},{index:6,display:"N"},{index:7,display:"N"},{index:8,display:"N"}],score:{unicorn:0,corgi:0},winnerAnnouncement:null}),a=Object(u.a)(e,2);return{gameState:a[0],setGameState:a[1]}}(),a=e.gameState,t=e.setGameState,i=[{index:0,display:"N"},{index:1,display:"N"},{index:2,display:"N"},{index:3,display:"N"},{index:4,display:"N"},{index:5,display:"N"},{index:6,display:"N"},{index:7,display:"N"},{index:8,display:"N"}];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Tic Tac Toe: Unicorn vs. Corgicorn!")),r.a.createElement("body",null,r.a.createElement("div",{className:"gameBoardTopper"},r.a.createElement("div",null,null===a.winnerAnnouncement&&r.a.createElement(d,{gameState:a,setGameState:t}),null!==a.winnerAnnouncement&&r.a.createElement(p,{gameState:a,setGameState:t})),r.a.createElement("div",null,r.a.createElement("p",null,"The Score is: ",r.a.createElement("br",null),"Unicorn: ",r.a.createElement("span",null,a.score.unicorn)," ",r.a.createElement("br",null),"Corgi: ",r.a.createElement("span",null,a.score.corgi)),r.a.createElement("button",{onClick:function(e){return t((function(e){return Object(c.a)(Object(c.a)({},e),{},{score:{unicorn:0,corgi:0}})}))}},"RESET THE SCORE!"),r.a.createElement("button",{onClick:function(e){return t((function(e){return Object(c.a)(Object(c.a)({},e),{},{gameBoard:i,winnerAnnouncement:null})}))}},"Play Again!"))),r.a.createElement(g,{gameState:a,setGameState:t})),r.a.createElement("footer",null,r.a.createElement("p",null,"Ticking Tacky Toes since 2020.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.57266793.chunk.js.map