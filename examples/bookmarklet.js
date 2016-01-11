(function(){
var scriptType = typeof(type) !== 'undefined' ? type : 'javascript';
var jsScript = document.createElement('SCRIPT');
jsScript.type = 'text/' + scriptType;
jsScript.src = href;
document.getElementsByTagName('head')[0].appendChild(jsScript);}('https://dl.dropboxusercontent.com/u/1084227/scripts/my_fitness_pal_food_diary.js')
