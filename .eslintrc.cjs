module.exports = {
  //root: true,
  env: { 
    browser: true, 
    es2021: true 
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
    /* 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended', */
  ],
  overrides: [
  ],
  //ignorePatterns: ['dist', '.eslintrc.cjs'],
  //parser: '@typescript-eslint/parser',
  parserOptions: {
    ecamVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    
  },
}
