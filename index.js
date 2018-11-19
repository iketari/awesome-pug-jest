const pug = require('pug');
const nodeResolve = require('resolve').sync;

function transformPugToHtml(src, filePath, baseDir) {
	const runtimePath = nodeResolve('pug-runtime');
	const runtime = "var pug = require(" + JSON.stringify(runtimePath) + ");\n";

	let options = {
		compileDebug: false,
		pretty: true,
		filename: filePath,
	}

	if (baseDir) {
		options.baseDir = baseDir
	}

	return `${runtime}\n${pug.compile(src, options)}; module.exports = template;`;
}

module.exports = {
	process(src, filePath, options) {
    	const baseDir = options.roots ? options.roots[0] : false;
		return transformPugToHtml(src, filePath, baseDir);
	}
};
