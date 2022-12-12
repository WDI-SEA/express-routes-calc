class Calc {
	add(...args) {
		return args.reduce(function (acc, cur) {
			return acc + cur
		})
	}
	subtract(...args) {
		return args.reduce(function (acc, cur) {
			return acc - cur
		})
	}
	multiply(...args) {
		return args.reduce(function (acc, cur) {
			return acc * cur
		})
	}
	divide(...args) {
		return args.reduce(function (acc, cur) {
			return acc / cur
		})
	}
}

module.exports = Calc
