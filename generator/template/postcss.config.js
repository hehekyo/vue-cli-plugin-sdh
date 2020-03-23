const projectConfig = require('./project-config');

const plugins = {
  autoprefixer: {},
};
if (typeof projectConfig.css.rem === 'object') {
  plugins['postcss-px2rem'] = {
    remUnit: projectConfig.css.rem.remUnit * 2,
  };
}
module.exports = {
  plugins,
};
