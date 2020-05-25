module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'airbnb-base/legacy',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2020,
        "sourceType": "module"
    },
    'rules': {
        'semi': ['error', 'always'],
        'quotes': ['error', 'double'],
        'global-require': 0,
        'linebreak-style': [0, 'error', 'windows']
    }
};
