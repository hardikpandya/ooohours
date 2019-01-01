var mentors = $(".prs-tile");
  for(var i = 0; i < mentors.length; i++){
  var target = Math.floor(Math.random() * mentors.length -1) + 1;
  var target2 = Math.floor(Math.random() * mentors.length -1) +1;
  mentors.eq(target).before(mentors.eq(target2));
}
