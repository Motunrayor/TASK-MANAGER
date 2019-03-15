
				$(document).ready(function(){

					$(".button").on("click",function(){
						
						$("#welcome").fadeIn(3000, function(){
						
						alert("I am done fading In");
						});
					});
				});
			
			
function myFunction() {
document.getElementById("complete-box").value=
 document.getElementById("#para").value;
}

$(document).ready(function () {
$('#list-items').html(localStorage.getItem('listItems'));
$('.add-items').submit(function(event)
{
event.preventDefault();
var item = $('#para').val();
if(item)

$('#list-items').append("<li><input id='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
localStorage.setItem('listItems', $('#list-items').html());
$('#para').val("");
});
});

$(document).on('change', '.checkbox', function()
{
if($(this).attr('checked'))
{
$(this).removeAttr('checked');
}
else
{
$(this).attr('checked', 'checked');
}
$(this).parent().toggleClass('completed');
localStorage.setItem('listItems', $('#list-items').html());
});


$(document).on('click', '.remove', function()
{
$(this).parent().remove();

localStorage.setItem('listItems', $('#list-items').html());
});

$(document).ready(function() {


$("#checkbox").on("click", function() {

alert("you have completed task")

});
});

$(document).ready(function() {

$("#edit").on("click", function() {

$(".para").hide();

});
});


$(document).ready(function(){
$( "#complete" ).click(function() {
  $( "#list-items" ).animate({
    width: "toggle",
    height: "toggle"
  }, {
    duration: 1000,
    specialEasing: {
      width: "linear",
      height: "easeOutBounce"
    },
    
  });
});
});
var searchInput = document.queryselector('#search-task input');
searchInput.addEventListener('keyup', function(e){
	var searchChar = e.target.value.toUppercase();
	var notes = tr.getElementByTagName('input')
	Array. from(notes).forEach(function(note){

	});
});
