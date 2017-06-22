(function() {
    function HomeCtrl(Room) {
        this.myRooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ["Room", HomeCtrl]);
        
})(); 