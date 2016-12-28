/*
Written by : Pavel
Contribute by: Amzad Hossain & Miraz Hossain
Find me at: https://bd.linkedin.com/in/bdpavel
Email: hello@cssanimation.io
Released: 2016
Current Version: 1.0.1
Amount of Animation: 260
Description: "cssanimation.io - A CSS Animation Library for Developers and Ninjas"
Library Size: 76 kB
Copyright (c) 2016 cssanimation.io
License: cssanimation.io is licensed under the MIT license. http://opensource.org/licenses/MIT
*/

// Fade In Animation
TweenMax.from(".fadeIn", 1, {alpha:0});
TweenMax.from(".fadeInLeft", 1, {alpha:0, x:"-100%"});
TweenMax.from(".fadeInRight", 1, {alpha:0, x:"100%"});
TweenMax.from(".fadeInTop", 1, {alpha:0, y:"-100%"});
TweenMax.from(".fadeInBottom", 1, {alpha:0, y:"100%"});

// Fade Out Animation
TweenMax.to(".fadeOut", 1, {alpha:0});
TweenMax.to(".fadeOutLeft", 1, {alpha:0, x:"-100%"});
TweenMax.to(".fadeOutRight", 1, {alpha:0, x:"100%"});
TweenMax.to(".fadeOutTop", 1, {alpha:0, y:"-100%"});
TweenMax.to(".fadeOutBottom", 1, {alpha:0, y:"100%"});

// Move From Animation
TweenMax.from(".moveFromLeft", 1, {x:"-100%"});
TweenMax.from(".moveFromRight", 1, {x:"100%"});
TweenMax.from(".moveFromTop", 1, {y:"-100%"});
TweenMax.from(".moveFromBottom", 1, {y:"100%"});

// Move To Animation
TweenMax.to(".moveToLeft", 1, {x:"-100%"});
TweenMax.to(".moveToRight", 1, {x:"100%"});
TweenMax.to(".moveToTop", 1, {y:"-100%"});
TweenMax.to(".moveToBottom", 1, {y:"100%"});

// Door Close From Left
TweenMax.fromTo(".doorCloseFromLeft", 1, {css: {perspective: 400, transformOrigin: "left", rotationY:90}}, {css: {perspective: 400, transformOrigin: "left", rotationY:0}})
TweenMax.fromTo(".doorOpenFromRight", 1, {css: {perspective: 400, transformOrigin: "left", rotationY:0}}, {css: {perspective: 400, transformOrigin: "left", rotationY:90}})

// Heartbeat
tlheartbeat = new TimelineMax({repeat:-1});
tlheartbeat
  .to(".heartbeat", 0.2, {css:{scale:1.3}})
  .to(".heartbeat", 0.16, {css:{scale:1.3}})
  .to(".heartbeat", 0.2, {css:{scale:1}})

// Heartbeat 2
tlheartbeat2 = new TimelineMax({repeat:-1});
tlheartbeat2
  .to(".tlheartbeat2", 0.2, {css:{scale:1.5}})
  .to(".tlheartbeat2", 0.1, {css:{scale:1}})
  .to(".tlheartbeat2", 0.2, {css:{scale:1.5}})
  .to(".tlheartbeat2", 0.2, {css:{scale:1}})
  .to(".tlheartbeat2", 0.2, {css:{scale:1}})

// Hang On Left
hangOnLeft = new TimelineMax();
hangOnLeft
  .to(".hangOnLeft", 0.4, {css:{transformOrigin: "left", rotation:100}})
  .to(".hangOnLeft", 0.2, {css:{transformOrigin: "left", rotation:80}})
  .to(".hangOnLeft", 0.2, {css:{transformOrigin: "left", rotation:95}})
  .to(".hangOnLeft", 0.2, {css:{transformOrigin: "left", rotation:85}})
  .to(".hangOnLeft", 0.1, {css:{transformOrigin: "left", rotation:90}})

// Hang On right
hangOnRight = new TimelineMax();
hangOnRight
  .to(".hangOnRight", 0.4, {css:{transformOrigin: "right", rotation:-100}})
  .to(".hangOnRight", 0.2, {css:{transformOrigin: "right", rotation:-80}})
  .to(".hangOnRight", 0.2, {css:{transformOrigin: "right", rotation:-95}})
  .to(".hangOnRight", 0.2, {css:{transformOrigin: "right", rotation:-85}})
  .to(".hangOnRight", 0.1, {css:{transformOrigin: "right", rotation:-90}})

// Pulse Shake
pulseShake = new TimelineMax({delay:1, repeat:-1, repeatDelay:1});
pulseShake
  .to(".pulseShake", 0.2, {css:{scale:1}})
  .to(".pulseShake", 0.02, {css:{scale:1.4}})
  .to(".pulseShake", 0.02, {css:{scale:1}})
  .to(".pulseShake", 0.02, {css:{scale:1.3}})
  .to(".pulseShake", 0.02, {css:{scale:1}})

// Horizontal Shake
TweenMax.to(".horizontalShake", 0.01, {x:"+=20", yoyo:true, repeat:-1});
TweenMax.to(".horizontalShake", 0.01, {x:"-=20", yoyo:true, repeat:-1});

// Vertical Shake
TweenMax.to(".verticalShake", 0.01, {y:"+=20", yoyo:true, repeat:-1});
TweenMax.to(".verticalShake", 0.01, {y:"-=20", yoyo:true, repeat:-1});

// Mad Max
TweenMax.to(".madMax", 0.01, {y:"+=10", css:{scale:1.3}, yoyo:true, repeat:-1});
TweenMax.to(".madMax", 0.01, {y:"+=5", css:{scale:.5}, yoyo:true, repeat:-1});
TweenMax.to(".madMax", 0.01, {y:"-=15", css:{scale:1.3}, yoyo:true, repeat:-1});

// Mad Max
TweenMax.to(".madMax", 0.01, {y:"+=10", css:{scale:1.3}, yoyo:true, repeat:-1});
TweenMax.to(".madMax", 0.01, {y:"+=5", css:{scale:.5}, yoyo:true, repeat:-1});
TweenMax.to(".madMax", 0.01, {y:"-=15", css:{scale:1.3}, yoyo:true, repeat:-1});

// Cool Horizontal Shake
TweenMax.to(".coolHorizontalShake", .1, {x:"+=20", yoyo:true, repeat:-1});
TweenMax.to(".coolHorizontalShake", .1, {x:"-=20", yoyo:true, repeat:-1});

// Cool Vertical Shake
TweenMax.to(".coolVerticalShake", 0.1, {y:"+=20", yoyo:true, repeat:-1});
TweenMax.to(".coolVerticalShake", 0.1, {y:"-=20", yoyo:true, repeat:-1});
