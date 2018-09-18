function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    clear();
    translate(width / 2, height / 2);
    background(200);

    // console.log(second(), second() * 6, cos(second() * 6));
    strokeWeight(4);
    line(0, 0, cos(second() * 6 - 90) * 100, sin(second() * 6 - 90) * 100);
    strokeWeight(8);
    line(0, 0, cos(minute() * 6 - 90) * 100, sin(minute() * 6 - 90) * 100);
    strokeWeight(12);
    line(0, 0, cos(hour() * 30 - 90) * 100, sin(hour() * 30 - 90) * 100);

    strokeWeight(1);
    line(-200, 0, 200, 0);
    line(0, -200, 0, 200);
}