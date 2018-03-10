const pug = require('pug');
const nodeResolve = require('resolve').sync;

function transformPugToHtml(src) {
	const runtimePath = nodeResolve('pug-runtime');
	const runtime = "var pug = require(" + JSON.stringify(runtimePath) + ");\n";

	return `${runtime}\n${pug.compile(src, { compileDebug: false, pretty: true, filename: src })}; module.exports = template;`;
}

module.exports = {
	process(src, filePath) {
		return transformPugToHtml(src, filePath);
	}
};
