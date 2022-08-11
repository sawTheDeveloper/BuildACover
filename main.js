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

const Overlays = new Array();

Overlays[0] = new Image();
Overlays[0].src = './BuildACover/svgs/s.jpeg';

Overlays[1] = new Image();
Overlays[1].src = './BuildACover/svgs/s5.jpeg';

Overlays[2] = new Image();
Overlays[2].src = './BuildACover/svgs/s3.png';

Overlays[3] = new Image();
Overlays[3].src = './BuildACover/svgs/s4.png';

Overlays[3] = new Image();
Overlays[3].src = './BuildACover/svgs/s1.JPE';

Overlays[4] = new Image();
Overlays[4].src = './BuildACover/svgs/s6.jpeg';

Overlays[5] = new Image();
Overlays[5].src = './BuildACover/svgs/s7.png';

Overlays[6] = new Image();
Overlays[6].src = './BuildACover/svgs/s8.jpeg';

Overlays[7] = new Image();
Overlays[7].src = './BuildACover/svgs/s9.jpeg';