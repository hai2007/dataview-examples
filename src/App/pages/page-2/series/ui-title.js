export default ['number', function ($number) {
    return {
        attrs: {
            left: $number(),
            top: $number(),
            width: $number(),
            height: $number()
        },
        link: function (painter, attr) {

            painter.config({
                "strokeStyle": "#1c4a7c",
                "fillStyle": painter
                    .createLinearGradient(attr.left, 0, attr.left + attr.width, 0)
                    .addColorStop(0, "#0c1a2c")
                    .addColorStop(0.5, "#2a59a4")
                    .addColorStop(1, "#0c1a2c")
                    .value(),
                "lineWidth": 1
            })

                .beginPath()
                .moveTo(attr.left, attr.top + attr.height * 0.5 - 10)
                .lineTo(attr.left + attr.width * 0.5 - 300, attr.top + attr.height * 0.5 - 10)
                .lineTo(attr.left + attr.width * 0.5 - 250, attr.top + attr.height * 0.2 - 10)
                .lineTo(attr.left + attr.width * 0.5 + 250, attr.top + attr.height * 0.2 - 10)
                .lineTo(attr.left + attr.width * 0.5 + 300, attr.top + attr.height * 0.5 - 10)
                .lineTo(attr.left + attr.width, attr.top + attr.height * 0.5 - 10)
                .lineTo(attr.left + attr.width, attr.top)
                .lineTo(attr.left, attr.top)
                .closePath()
                .fill()

                .beginPath()
                .moveTo(attr.left, attr.top + attr.height * 0.5 + 10)
                .lineTo(attr.left + attr.width * 0.5 - 270, attr.top + attr.height * 0.5 + 10)
                .lineTo(attr.left + attr.width * 0.5 - 250, attr.top + attr.height * 0.8 + 10)
                .lineTo(attr.left + attr.width * 0.5 + 250, attr.top + attr.height * 0.8 + 10)
                .lineTo(attr.left + attr.width * 0.5 + 270, attr.top + attr.height * 0.5 + 10)
                .lineTo(attr.left + attr.width, attr.top + attr.height * 0.5 + 10)
                .stroke()

                .config({
                    textAlign: "center",
                    "font-size": attr.height * 0.35,
                    fillStyle: "white"
                })
                .fillText(attr._subTexts[0], attr.left + attr.width * 0.5, attr.top + attr.height * 0.5)

        }
    }
}]