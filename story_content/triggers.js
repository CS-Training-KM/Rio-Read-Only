function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xdiAW3P8H6":
        Script1();
        break;
      case "6VWkge0EHKz":
        Script2();
        break;
      case "5wlS9NtMX89":
        Script3();
        break;
      case "5VKBIk0ysJI":
        Script4();
        break;
      case "5l76zSZhzNJ":
        Script5();
        break;
      case "6SGQXP3MHAB":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  player.once(() => {
const target = object('64L5rGkOAjz');
const duration = 750;
const easing = 'ease-out';
const id = '5lKmA5GYp8g';
const pulseAmount = 0.07;
const delay = 6000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6I0e8QD0ylX');
const duration = 750;
const easing = 'ease-out';
const id = '61rXV1w1tP0';
const pulseAmount = 0.07;
const delay = 6000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5sxYZWnUJUC');
const duration = 750;
const easing = 'ease-out';
const id = '63I5XicA5Ta';
const pulseAmount = 0.07;
const delay = 3000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5hXWVhEuOUr');
const duration = 750;
const easing = 'ease-out';
const id = '6LzMM7WG6tW';
const pulseAmount = 0.07;
const delay = 4000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6EWzlBYfQFq');
const duration = 750;
const easing = 'ease-out';
const id = '5zSsu3sE4nT';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  const target = object('5Wttz07dSSy');
const duration = 750;
const easing = 'ease-out';
const id = '68VY1BfqtAV';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
