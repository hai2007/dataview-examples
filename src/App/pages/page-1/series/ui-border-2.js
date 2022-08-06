export default ['number', function ($number) {
    return {
        attrs: {
            left: $number(),
            top: $number(),
            width: $number(),
            height: $number()
        },
        link: function (painter, attr) {

            painter

                .config({
                    "lineWidth": 1.4,
                    "strokeStyle": "#212c44d4",
                    "fillStyle": "#607d8b14"
                })

                .beginPath()
                .moveTo(attr.left + 5, attr.top + 5)
                .lineTo(attr.left + attr.width - 5, attr.top + 5)
                .lineTo(attr.left + attr.width - 5, attr.top + attr.height - 5)
                .lineTo(attr.left + 5, attr.top + attr.height - 5)
                .closePath()
                .full()

                .config({
                    "lineWidth": 1,
                    "strokeStyle": "#4689e3",
                    "lineDash": [5]
                })

                .beginPath()
                .moveTo(attr.left + attr.width * 0.5, attr.top + 10)
                .lineTo(attr.left + attr.width * 0.5, attr.top + attr.height - 10)
                .stroke()

                .config({
                    "lineWidth": 2,
                    "lineDash": []
                })

                .beginPath()
                .moveTo(attr.left + 20, attr.top + 30)
                .lineTo(attr.left + 20, attr.top + 20)
                .lineTo(attr.left + 40, attr.top + 20)
                .stroke()

                .beginPath()
                .moveTo(attr.left + attr.width - 20, attr.top + attr.height - 30)
                .lineTo(attr.left + attr.width - 20, attr.top + attr.height - 20)
                .lineTo(attr.left + attr.width - 40, attr.top + attr.height - 20)
                .stroke()

        }
    }
}]