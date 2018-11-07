// In order to upload files to the CDN, the following files are required to be 
// in the root directory of the zip file:
//
// - main.js: this empty javascript file
// - config.xml: a basic config file with a minimum set of required parameters
// - thumb.jpg: an image that is displayed as a thumbnail image in the media 
//   library when the zip file is successfully uploaded
// 
// Any other files outside of these required files are allowed to be included 
// in the zip file. The files will be unzipped on the CDN, and appear in the
// exact same directory structure as they were prior to being zipped. 
//
// NOTE: if you receive an error when uploading the zip file, make sure you 
// did not zip the directory that all these files are sitting in - again,
// the above required files must live in the root of the zip file or the zip 
// file will fail validation on upload.