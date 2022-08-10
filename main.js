//Drag and Drop App
let currentDroppable = null;
text.onmousedown = function(event) {
    let shiftX = event.clientX - text.getBoundingClientRect()
        .left;
    let shiftY = event.clientY - text.getBoundingClientRect()
        .top;
    text.style.position = 'absolute';
    text.style.zIndex = 1000;
    document.body.append(text);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        text.style.left = pageX - shiftX + 'px';
        text.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        text.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        text.hidden = false;
        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) { // null when we were not over a droppable before this event
                leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) { // null if we're not coming over a droppable now
                // (maybe just left the droppable)
                enterDroppable(currentDroppable);
            }
        }
    }
    document.addEventListener('mousemove', onMouseMove);
    text.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        text.onmouseup = null;
    };
};

function enterDroppable(elem) {
    elem.style.background = 'pink';
}

function leaveDroppable(elem) {
    elem.style.background = '';
}
text.ondragstart = function() {
    return false;
};