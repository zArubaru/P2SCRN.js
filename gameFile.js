var p;

window.onload = function () {
	// game script
	var tree = {
		start: [
			"... at the table your gaze down. The tablecloth is a bit bland, but somehow rich, you can't quite grasp what makes it seem so. Someone clears their throat. \
			You look up to meet the gaze of a waiter smiling down at you.\n\n *Here's your coffee, the first cup is on the house for our valued customer*,\n\n the waiter says cheerfully. \
			There's a slight monotonous gait to the waiter's voice.\n",
			{optn: "> Thank the waiter.", next: "branch01"},
			{optn: "> Decline the offer.", next: "branch02"},
			{optn: "> Look at the coffee.", next: "branch03"},
			{optn: "> Drink the coffee.", next: "branch04"}
		],
		branch01: [
			"\n\nYou offer the waiter a slight smile and a thanks in appreciation.",
			"\n\n[ to be continued... ]"
		],
		branch02: [
			"\n\nYou decline politely, informing the waiter you'd rather...\n",
			{optn: "> Look at a menu.", next: "branch05"},
			{optn: "> Enquire about the cafe.", next: "branch05"},
		],
		branch03: [
			"\n\nYou look down at the coffee. It isn't quite what you're used to, but that definitely isn't a bad thing. \
			As soon as you tilt your head forward for a smell, the sweet pungent fragrance enters your nostrils...",
			"\n\n[ to be continued... ]"
		],
		branch04: [
			"\n\nWith a slight sense of fatigue, you dive right into the coffee. Just what you needed.",
			"\n\n[ to be continued... ]"
		],
		branch05: [
			"\n\n[ to be continued... ]"
		],
	};
	// init engine with game script
	p = new P2SCRN(5, "You sit down...", tree);
	p.init(); 
}