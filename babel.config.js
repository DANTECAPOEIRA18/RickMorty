module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-react'],
  plugins: [['import', { libraryName: 'antd', style: true }], '@babel/plugin-syntax-jsx'],
};
