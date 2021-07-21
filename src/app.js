const tree = $('.tree');
const cloud = $('.cloud');
const sun = $('.sun');
const nebula = $('.nebula');
const eye = $('.eye');
const girl = $('.girl');
const something = $('.something');
const ocean = $('.ocean');
const allPhoto = [tree,cloud,sun,nebula,eye,girl,something,ocean];

const primary = $('.primary');
const photo = $('.primary img');
const heading = $('#desc-heading');

var pictureIndex =  0;

$('.dec').click(()=>{
    if(pictureIndex === 0)
        pictureIndex = allPhoto.length;
    pictureIndex--;
    photo.attr('src',allPhoto[pictureIndex].css('background-image'));
    alert(allPhoto[pictureIndex].css('background-image'));
});
$('.inc').click(()=>{
    if(pictureIndex === allPhoto.length)
        pictureIndex = 0;
    pictureIndex++;
    photo.attr('src',allPhoto[pictureIndex].css('background-image'));
});