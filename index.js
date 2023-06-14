document.addEventListener('DOMContentLoaded',function(){
    var container=document.querySelector('.block-of-elements');

    function createTitle(){
        var titles=['Pop', 'Jazz','Blues'];
        titles.forEach(function(title){
            var newDiv=document.createElement('div');
            newDiv.className='div element';

            var newH2=document.createElement('h2');
            newH2.className='genre';
            newH2.textContent=title;

            newDiv.appendChild(newH2);
            container.appendChild(newDiv);
    });
    }
    createTitle();


})