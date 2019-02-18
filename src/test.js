const { info, error, success, warning } = require('./index');

info('Starting my app…');
warning('Please pay attention to this.');
success('Everything done.');
error('Oh oh…');
info('Just kidding.', 0, 2);
