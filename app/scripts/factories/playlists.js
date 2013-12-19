'use strict';

/* Page Factory */

angular.module('septWebRadioFactories');

angular.module('septWebRadioFactories')
  .factory('Playlists',
    ['$resource',
      function ($resource) {
        return $resource('playlists/:playlistId', {playlistId: '@_id'},
          {update: {method: 'PUT'}}
        );
      }
    ]
  );