Package.describe({
  summary: "Node idiomatic client for Google Cloud services."
});

Npm.depends({
	"gcloud": "https://github.com/usefulio/gcloud-node/tarball/195878d64fb756e7e06d7be16f5ddb25f4149fe9"
});

Package.on_use(function (api) {

  // built-in
  // api.use('less');

  api.add_files('harness.js', 'server');
  api.export('gcloud');
});
