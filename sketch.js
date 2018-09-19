function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    clear();
    translate(width / 2, height / 2);
    background(220);

    fill(20);
    ellipse(0, 0, 240);

    stroke(250);
    strokeWeight(2);

    for (var i = 0; i < 60; i++) {
        var a = { x: cos(i * 6 - 90) * 100, y: sin(i * 6 - 90) * 100 };
        point(a.x, a.y);
    }

    var sec = { x: cos(second() * 6 - 90) * 100, y: sin(second() * 6 - 90) * 100 };
    var min = { x: cos(minute() * 6 - 90) * 100, y: sin(minute() * 6 - 90) * 100 };
    var hur = { x: cos(hour() * 6 - 90) * 100, y: sin(hour() * 6 - 90) * 100 };
    
    stroke(255);
    strokeWeight(4);

    line(0, 0, sec.x, sec.y);
    strokeWeight(8);
    line(0, 0, min.x, min.y);
    strokeWeight(12);
    line(0, 0, hur.x, hur.y);

    // strokeWeight(1);
    // stroke(0);
    // line(-200, 0, 200, 0);
    // line(0, -200, 0, 200);
}