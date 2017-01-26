mouseMovement(0.08);

function mouseMovement(moveAmount) {

	bodyEl.mousemove(function( e) {
		var cursorX = e.pageX;
		var cursorY = e.pageY;
		var moveX = (cursorX - (halfWindowWidth))*-moveAmount;
		var moveY = (cursorY - (halfWindowHeight))*-moveAmount;
		var rotateY = moveX * -0.09;

		TweenMax.to($('.figure-mover.active .js-figure-2'),
			1.175, {
				x: moveX,
				y: moveY,
				rotationY: rotateY
			}
		);

		TweenMax.to($('.figure-mover.active .js-figure'),
			1.175, {
				x: moveX*0.4,
				y: moveY*0.8,
				rotationY: rotateY*0.4
			}
		);
	});
}
