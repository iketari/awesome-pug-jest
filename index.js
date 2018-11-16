const pug = require('pug');
const nodeResolve = require('resolve').sync;

function transformPugToHtml(src, filePath, baseDir) {
	const runtimePath = nodeResolve('pug-runtime');
	const runtime = "var pug = require(" + JSON.stringify(runtimePath) + ");\n";

	return `${runtime}\n${pug.compile(src, {
		compileDebug: false,
		pretty: true,
		filename: filePath,
		basedir: baseDir,
	})}; module.exports = template;`;
}

module.exports = {
	process(src, filePath, options) {
    const baseDir = options.roots[0];
		return transformPugToHtml(src, filePath, baseDir);
	}
};
