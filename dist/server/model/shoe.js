"use strict";
var Shoe = (function () {
    function Shoe(id, name, size, quantity) {
        if (size === void 0) { size = 44; }
        if (quantity === void 0) { quantity = 0; }
        this.name = name;
        this.size = size;
        this.quantity = quantity;
        this.id = id;
    }
    Shoe.prototype.getId = function () {
        return this.id;
    };
    Shoe.prototype.getName = function () {
        return this.name;
    };
    Shoe.prototype.setName = function (name) {
        this.name = name;
    };
    Shoe.prototype.getSize = function () {
        return this.size;
    };
    Shoe.prototype.setSize = function (size) {
        this.size = size;
    };
    Shoe.prototype.updateQuantity = function (newQuantity) {
        this.quantity = newQuantity;
    };
    Shoe.prototype.addProducts = function (addedQuantity) {
        this.quantity += addedQuantity;
    };
    Shoe.prototype.substractProducts = function (substrackedQuantity) {
        this.quantity -= substrackedQuantity;
    };
    return Shoe;
}());
exports.Shoe = Shoe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Nob2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBRUksY0FBWSxFQUFVLEVBQVMsSUFBWSxFQUFTLElBQWlCLEVBQVMsUUFBb0I7UUFBOUMscUJBQUEsRUFBQSxTQUFpQjtRQUFTLHlCQUFBLEVBQUEsWUFBb0I7UUFBbkUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQWE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQzlGLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTSxvQkFBSyxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNNLHNCQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ00sc0JBQU8sR0FBZCxVQUFlLElBQVk7UUFFekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNNLHNCQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ00sc0JBQU8sR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNNLDZCQUFjLEdBQXJCLFVBQXNCLFdBQW1CO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7SUFDTSwwQkFBVyxHQUFsQixVQUFtQixhQUFxQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQztJQUNuQyxDQUFDO0lBQ00sZ0NBQWlCLEdBQXhCLFVBQXlCLG1CQUEyQjtRQUNoRCxJQUFJLENBQUMsUUFBUSxJQUFJLG1CQUFtQixDQUFDO0lBQ3pDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQTlCWSxvQkFBSSIsImZpbGUiOiJtb2RlbC9zaG9lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNob2Uge1xyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHNpemU6IG51bWJlciA9IDQ0LCBwdWJsaWMgcXVhbnRpdHk6IG51bWJlciA9IDApIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldE5hbWUobmFtZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRTaXplKHNpemU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXBkYXRlUXVhbnRpdHkobmV3UXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSBuZXdRdWFudGl0eTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRQcm9kdWN0cyhhZGRlZFF1YW50aXR5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnF1YW50aXR5ICs9IGFkZGVkUXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3Vic3RyYWN0UHJvZHVjdHMoc3Vic3RyYWNrZWRRdWFudGl0eTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5xdWFudGl0eSAtPSBzdWJzdHJhY2tlZFF1YW50aXR5O1xyXG4gICAgfVxyXG59Il19
