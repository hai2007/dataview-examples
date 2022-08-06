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
                    "lineWidth": 2,
                    "strokeStyle": "#4689e3"
                })

                .beginPath()
                .moveTo(attr.left + 5, attr.top + 25)
                .lineTo(attr.left + 5, attr.top + 5)
                .lineTo(attr.left + 25, attr.top + 5)
                .stroke()

                .beginPath()
                .moveTo(attr.left + attr.width - 5, attr.top + 25)
                .lineTo(attr.left + attr.width - 5, attr.top + 5)
                .lineTo(attr.left + attr.width - 25, attr.top + 5)
                .stroke()

                .beginPath()
                .moveTo(attr.left + 5, attr.top + attr.height - 25)
                .lineTo(attr.left + 5, attr.top + attr.height - 5)
                .lineTo(attr.left + 25, attr.top + attr.height - 5)
                .stroke()

                .beginPath()
                .moveTo(attr.left + attr.width - 5, attr.top + attr.height - 25)
                .lineTo(attr.left + attr.width - 5, attr.top + attr.height - 5)
                .lineTo(attr.left + attr.width - 25, attr.top + attr.height - 5)
                .stroke()

        }
    }
}]