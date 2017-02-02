/* global angular */
var interfaceApp = angular.module('tabApp', []);

interfaceApp.controller('tabController', function listController($scope, $interval, $http) {

  // All Text
  // $scope.name = 'Henry';
  $scope.school = 'Trinity Episcopal School';


  // TODOS

  if (localStorage.storedList) {
    $scope.shownList = JSON.parse(localStorage.storedList);
    console.log($scope.shownList);
  } else if (!localStorage.storedList) {
    $scope.shownList = [];
    localStorage.storedList = JSON.stringify([]);
  }

  $scope.todoAdd = function() {
    if(! $scope.todoInput == undefined || !$scope.todoInput == ' ') {
      $scope.shownList.push({todoText: $scope.todoInput, done: false});
      localStorage.storedList = JSON.stringify($scope.shownList);
      $scope.shownList = JSON.parse(localStorage.storedList);
      $scope.todoInput = "";
    }
  };

  $scope.remove = function() {
      var oldList = $scope.shownList;
      $scope.todoList = [];
      angular.forEach(oldList, function(x) {
          if (!x.done) $scope.todoList.push(x);
      });
      localStorage.storedList = JSON.stringify($scope.todoList);
      $scope.shownList = $scope.todoList
  };


  // $scope.getWeather();

  $scope.checkClass = function() {

    var d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();

    if(h == 8 && m < 50) {
      $scope.class = 'english';
    }

    if(h == 8 || h == 9) {
      if(h == 8 && m > 55) {
        $scope.class = 'math';
      }
      if(h == 9 && m < 45) {
        $scope.class = 'math';
      }
    }

    if(h == 9 || h == 10) {
      if(h == 9 && m > 50) {
        $scope.class = 'chapel';
      }
      if(h == 10 && m < 10) {
        $scope.class = 'chapel';
      }
    }

    if(h == 10 && 10 < m < 35) {
      $scope.class = 'advisory';
    }

    if (h == 10 || h == 11) {
      if(h == 10 && m > 40) {
        $scope.class = 'science';
      }
      if(h == 11 && m <  30) {
        $scope.class = 'science';
      }
    }

    if(h == 11 || h == 12) {
      if(h == 11 && m > 35) {
        $scope.class= 'history';
      }
      if(h == 12 && m < 25) {
        $scope.class = 'history';
      }
    }

    if(h == 13) {
      if(m > 10 || m < 55) {
        $scope.class = 'coding';
      }
    }

    if(h == 14 && m < 50) {
      $scope.class = 'spanish';
    }


    if(h < 8 || 14 < h) {
      $scope.class = 'free'
    }

    if ($scope.class == undefined) {
      $scope.class = 'free';
    }

    // console.log($scope.class);

  };

  $scope.checkClass();

  $scope.links = [
    {
      url : 'http://www.coolmath-games.com/',
      name : 'Cool Math Games',
      tag : 'free'
    },
    {
      url : 'http://www.membean.com/',
      name : 'Membean',
      tag : 'english'
    },
    {
      url : 'https://www.ixl.com/',
      name : 'IXL',
      tag : 'english'
    },
    {
      url: "http://www.livescience.com/",
      name: "Livescience",
      tag: "science",
    },
    {
      url: "https://classroom.google.com/u/0/c/MTg5NjIxOTg0NVpa",
      name: "Science",
      tag: "science",
      type : 'classroom'
    },
    {
      url: "https://classroom.google.com/u/0/c/MTk2NTUwNTU0MFpa",
      name: "Advisory",
      tag: "advisory",
      type : 'classroom'
    },
    {
      url: "https://classroom.google.com/u/0/c/MTk2NTI5ODA0NFpa",
      name: "Spanish",
      tag: "spanish",
      type : 'classroom'
    },
    {
      url: "https://classroom.google.com/u/0/c/MTk2NTYzNjk5NFpa",
      name: "English",
      tag: "english",
      type : 'classroom'
    },
    {
      url: "https://classroom.google.com/u/0/c/MTEzNzExODM2MFpa",
      name: "History",
      tag: "history",
      type : 'classroom'
    },
    {
      url: "https://drive.google.com/drive/u/0/folders/0BzS6bMffln_zNF9NWTUzVHF6VDQ",
      name: "Science",
      tag: "science",
      type : 'drive'
    },
    {
      url: "https://drive.google.com/drive/u/0/folders/0BzS6bMffln_zcW1JRjY4WkpPRU0",
      name: "Advisory",
      tag: "advisory",
      type : 'drive'
    },
    {
      url: "https://drive.google.com/drive/u/0/folders/0BzS6bMffln_zdkpBMnJFaWhLTWc",
      name: "English",
      tag: "english",
      type : 'drive'
    },
    {
      url: "https://drive.google.com/drive/u/0/folders/0BzS6bMffln_zM1g4RFB6QUtpNkU",
      name: "Spanish",
      tag: "spanish",
      type : 'drive'
    },
    {
      url: "https://drive.google.com/drive/u/0/folders/0BzS6bMffln_zcF9YTE9HV2xqTHc",
      name: "History",
      tag: "history",
      type : 'drive'
    },
    {
      url: "https://css-tricks.com/",
      name: "CSS Tricks",
      tag: "coding",
    },
    {
      url: "http://stackoverflow.com/",
      name: "stackoverflow",
      tag: "coding",
    },
    {
      url: "https://c9.io/hdewey",
      name: "Cloud 9",
      tag: "coding",
    },
    {
      url: "http://www.scientificamerican.com/",
      name: "Scientific American",
      tag: "free",
    },
    {
      url: "https://www.wired.com/",
      name: "Wired",
      tag: "free",
    },
    {
      url : 'https://www.desmos.com/',
      name : 'Desmos',
      tag : 'math'
    },
    {
      url : 'https://mail.google.com/mail/u/0/',
      name : 'Gmail',
      tag : 'free'
    },
    {
      url : 'https://www.wolframalpha.com/',
      name : 'Wolfram Alpha',
      tag : 'math'
    },
    {
      url : 'http://www.mathsisfun.com/',
      name : 'MathisFun',
      tag : 'math'
    }
  ]

  $scope.classroomLinks = [];
  $scope.driveLinks = [];
  $scope.links_quiets = [];

  $scope.links_louds = [
    {
      url: 'https://portals.veracross.com/tes',
      name: 'Veracross'
    }
  ]

  $scope.sortLinks = function(list, currentClass) {

    var x = 0;
    while(x < list.length) {

      if (list[x].tag == currentClass) {
        if (list[x].type !== undefined) {
          $scope.links_louds.push({url : list[x].url, name : list[x].name + ' (' + list[x].type + ')'});
        } else {
          $scope.links_louds.push({url : list[x].url, name : list[x].name});
        }
      }

      if (list[x].tag != currentClass) {
        if (list[x].type == 'classroom') {
          $scope.classroomLinks.push({url : list[x].url, name : list[x].name});
        } else if (list[x].type == 'drive') {
          $scope.driveLinks.push({url : list[x].url, name : list[x].name});
        } else {
          $scope.links_quiets.push({url : list[x].url, name : list[x].name});
        }

      }


      x++;
    }


  }

  $scope.sortLinks($scope.links, $scope.class)

  var run = function(object) {
    var x = 0;
    while (x<1) {
      $scope.links.push({url : object.url, name : object.name});
      x++;
  }
    }

  // run(classroom);

  $scope.date = {
    month : new Date().getMonth() + 1,
    day   : new Date().getDate(),
    year  : new Date().getFullYear()
  };

  $scope.getTime = function() {
    var d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();

    if (h > 12) {
      h = h - 12;
    }
    if (m < 10) {
      m = '0' + m;
    }

    $scope.time = h + ":" + m;

    //$scope.checkClass(h, m);

    $interval(callAtInterval, 1000);
  };

  $scope.getTime();

  function callAtInterval() {
    $scope.getTime();
  }


});
