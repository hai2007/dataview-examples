export default ['number', 'string', function ($number, $string) {
    return {
        attrs: {
            left: $number(),
            top: $number(),
            width: $number(),
            height: $number(),
            title: $string()
        },
        link: function (painter, attr) {

            painter

                .config({
                    "lineWidth": 1.4,
                    "strokeStyle": "#212c44d4",
                    "fillStyle": "#607d8b14",
                    "shadowBlur": 10,
                    "shadowColor": "#183560"
                })

                .beginPath()
                .moveTo(attr.left + 5, attr.top + 5)
                .lineTo(attr.left + attr.width - 5, attr.top + 5)
                .lineTo(attr.left + attr.width - 5, attr.top + attr.height - 5)
                .lineTo(attr.left + 5, attr.top + attr.height - 5)
                .closePath()
                .stroke()

                .config({
                    "lineWidth": 5,
                    "strokeStyle": "#4689e3",
                    "shadowBlur": 50,
                    "shadowColor": "#4687fc"
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

                .config({
                    "shadowBlur": 0,
                    "fillStyle": "#2c58a7",
                })
                .fillRect(attr.left + attr.width * 0.15, attr.top + 5 - 20, attr.width * 0.7, 40)

                .config({
                    "textAlign": "center",
                    "fillStyle": "white",
                    "font-size": 20
                })
                .fillText(attr.title, attr.left + attr.width * 0.5, attr.top + 5)

        }
    }
}]