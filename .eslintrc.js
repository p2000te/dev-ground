/* global module */
module.exports = {
	"env": {
		"browser": true,
		"node": true
	},
    "rules": {
        // enable additional rules
        "indent": ["warn", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["warn", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["warn", "always"],

        // disable rules from base configurations
        "no-console": "off"
    },
	"parserOptions": {
		"ecmaVersion": 6,
        "ecmaFeatures": {
            "impliedStrict": true
        }
	},
	"globals": {
		"require": false,
		"module": true,
		"exports": true,
		"define": false
	}
};

