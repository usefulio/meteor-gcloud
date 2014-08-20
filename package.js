Package.describe({
  summary: "Node idiomatic client for Google Cloud services."
});

Npm.depends({
	"gcloud": "https://github.com/usefulio/gcloud-node/tarball/7c828e6b2fe480c9acf1472fbc761413e8048fb3"
});

Package.on_use(function (api) {

  // built-in
  // api.use('less');

  api.add_files('harness.js', 'server');
  api.export('gcloud');
});
