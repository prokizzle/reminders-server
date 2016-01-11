var FoodDiaryTextBox = {
    extractFoodItems: function() {
        var self = this;
        var food_items = $('.js-show-edit-food');
        var reminders = '\n#Eat\n';
        for (var i = 0; i < food_items.length; i++) {
            food_item = food_items[i].innerHTML.trim();
            reminders += food_item + '\n';
            self.postFoodItem(food_item);
            self.injectTextArea(reminders);
        }
        return reminders;
    },

    postFoodItem: function(item) {
        var listName = 'Eat';
        $.post('http://scripts.dev:4567', {
            name: item,
            list: listName
        });
    },

    injectTextArea: function(value) {
        $('#mfpList').remove();
        $('.diary').before('<textarea id="mfpList" rows="20" cols="100">' + value + '</textarea>');
    },

    run: function() {
        var self = this;

        self.injectTextArea(self.extractFoodItems());
    }
}


FoodDiaryTextBox.run();

$('#mfpList').focus(function() {
    var $this = $(this);
    $this.select();

    // Work around Chrome's little problem
    $this.mouseup(function() {
        // Prevent further mouseup intervention
        $this.unbind('mouseup');
        return false;
    });
});
