Package.describe({
  summary: "Node idiomatic client for Google Cloud services."
});

Npm.depends({
	"gcloud": "https://github.com/usefulio/gcloud-node/tarball/d843c298f67456645a111f3daae0219afa159d1d"
});

Package.on_use(function (api) {

  // built-in
  // api.use('less');

  api.add_files('harness.js', 'server');
  api.export('gcloud');
});
