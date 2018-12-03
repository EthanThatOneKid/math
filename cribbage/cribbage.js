class Cribbage {

	constructor(hand = Cribbage.randomHand()) {
		this.hand = hand;
		this.fifteens = Cribbage.fifteens(this.hand);
		this.matches = Cribbage.matches(this.hand);
		this.flush = Cribbage.flush(this.hand);
		this.run = Cribbage.run(this.hand);
		this.knob = Cribbage.knob(this.hand);
		this.isValid = Cribbage.isValid(this.hand);
		this.total = Cribbage.total(this);
	}

	log() {
		console.log(this);
	}

	static cardFromString(str) {
		const card = str[0];
		const suit = str[1].toUpperCase();
		const value = card == "K" || card == "Q" || card == "J" ? 10 : card == "A" ? 1 : Number(card);
		const royalty = {"1": "A", "11": "J", "12": "Q", "13": "K"};
		return {value, suit, card};
	}

	static cardStringFromObject(obj) {
		const translator = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
		return translator[obj.value] + obj.suit.toUpperCase();
	}

	static optimizeHand(hand) {
		const used_cards = new Set(...hand);
		hand = hand.reverse().map(Cribbage.cardFromString);

		const remaining_cards = [];
		["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"].forEach((c) => {
			["S", "C", "D", "H"].forEach((s) => {
				if (!used_cards.has(c + s))
					remaining_cards.push(Cribbage.cardFromString(c + s);
			});
		});

		const combinations = Cribbage.k_combinations(remaining_cards, 5 - hand.length);

		const fitness_chart = [];
		for (let i in combinations) {
			const gimme_hand = [...combinations[i], ...hand];
			const gimme_score = (new Cribbage(gimme_hand)).total;
			fitness_chart.push(gimme_score);
		}

		const best_fitness = Math.max(...fitness_chart);
		return fitness_chart.reduce((acc, cur, i) => {
			if (cur == best_fitness) {
				const hand = [...combinations[i], ...hand].map(Cribbage.cardStringFromObject);
				acc.possibilities.push(hand);
			} return acc;
		}, {
			points: best_fitness,
			possibilities: []
		});
	}

	static randomHand(len = 5) {
		let result = [];
		const suits = ["S", "C", "D", "H"];
		const royalty = {"1": "A", "11": "J", "12": "Q", "13": "K"};
		for (let i = 0; i < len; i++) {
			const val = Math.floor(Math.random() * 13) + 1;
			result.push({
				"value": val > 10 ? 10 : val,
				"suit": suits[Math.floor(Math.random() * suits.length)],
				"card": val > 10 || val == 1 ? royalty[val] : val
			});
		}
		return result;
	}

	static fifteens(hand) {
		let score = 0;
		(function recurse(j = 0, total = 0) {
			for (; j < hand.length; j++) {
				let subtotal = total + hand[j].value;
				if (subtotal == 15) score++;
				else if (subtotal < 15) recurse(j + 1, subtotal);
			}
		})();
		return score;
	}

	static matches(hand) {
		return Object.entries(hand.reduce((a, c) => {
			c = c.card;
			a[c] = a[c] ? a[c] + 1 : 1;
			return a;
		}, {})).filter(x => x[1] > 1);
	}

	static flush(hand) {
		return Object.entries(hand.reduce((a, c) => {
			c = c.suit;
			a[c] = a[c] ? a[c] + 1 : 1;
			return a;
		}, {})).filter(x => x[1] > 3);
	}

	static run(temp_hand) {
		let hand = Object.entries(temp_hand.map(x =>
			x.card == "K" ? 13 :
			x.card == "Q" ? 12 :
			x.card == "J" ? 11 :
			x.card == "A" ? 1 : x.value
		).reduce((a, c) => {
			a[c] = a[c] ? a[c] + 1 : 1;
			return a;
		}, {})).map(x => [Number(x[0]), x[1]]).sort((a, b) => a[0] - b[0]);
		let run = [hand[0]];
		for (let i = 1; i < hand.length; i++) {
			if (hand[i - 1][0] + 1 == hand[i][0]) {
				if (hand[i][0] - 1 == run[run.length - 1][0])
					run.push(hand[i]);
			} else if (run.length < 3) run = [hand[i]];
		}
		return run.length > 2 ? run : [];
	}

	static knob(hand) {
		if (hand.length != 5) return 0;
		const starter = hand[4];
		for (let i = 0; i < 4; i++)
			if (hand[i].card == "J")
				if (hand[i].suit == starter.suit) return 1;
		return 0;
	}

	static isValid(hand) {
		return Object.values(hand.reduce((a, c) => {
			c = c.card + c.suit;
			a[c] = a[c] ? a[c] + 1 : 1;
			return a;
		}, {})).length == hand.length;
	}

	static total(crib) {
		let data = {};
		let total = 0;

		data["fifteens"] = crib.fifteens;
		total += crib.fifteens * 2;

		data["flush"] = crib.flush.length ? `${crib.flush[0][1]} ${crib.flush[0][0]}'s` : "none";
		total += crib.flush.reduce((acc, cur) => {
			if (cur[1] == 4) acc += 4;
			else if (cur[1] == 5) acc += 5;
			return acc;
		}, 0);

		data["run"] = crib.run.length ? JSON.stringify(crib.run) : "none";
		let run = crib.run.length,
			scl = crib.run.reduce((acc, cur) => acc <= cur[1] ? acc * cur[1] : acc, 1);
		total += scl == 1 ? run :
			scl == 2 && run == 3 ? 8 :
			scl == 2 && run == 4 ? 10 :
			scl == 3 ? 15 : 16;

		data["match"] = JSON.stringify(crib.matches);
		if (scl == 1) {
			total += crib.matches.reduce((acc, cur) => {
				if (cur[1] == 2) acc += 2;
				else if (cur[1] == 3) acc += 6;
				else if (cur[1] == 4) acc += 12;
				return acc;
			}, 0);
		}

		data["knob"] = crib.knob;
		total += crib.knob;

		data["total"] = total;

		return data;
	}

	static k_combinations(set, k) {
		let i, j, combs, head, tailcombs;
		if (k > set.length || k <= 0) return [];
		if (k == set.length) return [set];
		if (k == 1) {
			combs = [];
			for (i = 0; i < set.length; i++) combs.push([set[i]]);
			return combs;
		}
		combs = [];
		for (i = 0; i < set.length - k + 1; i++) {
			head = set.slice(i, i + 1);
			tailcombs = k_combinations(set.slice(i + 1), k - 1);
			for (j = 0; j < tailcombs.length; j++) combs.push(head.concat(tailcombs[j]));
		}
		return combs;
	}

}
