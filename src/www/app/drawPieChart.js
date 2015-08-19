(function() {

    var drawPieChart = function (canvasClassName, progress) {

        var canvas = document.getElementsByClassName(canvasClassName)[0] || null;
        if (!canvas) {
            return false;
        }
        var ctx = canvas.getContext('2d');
        var x = canvas.width / 2;
        var y = canvas.height / 2;

        progress = parseInt(progress, 10);
        progress = progress > 100 ? 100 : progress;
        progress = progress < 0 ? 0 : progress;

        var kAngle = progress * 2 / 100 - 0.5;

        var setArc = function (color, radius, startAngle, endAngle) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.moveTo(x, y);
            ctx.arc(x, y, radius, startAngle, endAngle);
            ctx.fill();
        };

        // progress part of pie
        setArc('#14b9d6', x, 1.5 * Math.PI, kAngle * Math.PI);
        // remain part of pie
        setArc('#ffffff', x, kAngle * Math.PI, 1.5 * Math.PI);
        // circle in the center
        setArc('#323a45', 160/200 * x, 2 * Math.PI, 0);
    };
    drawPieChart('js-pie-chart', 79);
}());
