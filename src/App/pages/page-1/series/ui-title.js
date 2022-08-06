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
                "lineWidth": 3
            })

                .beginPath()
                .moveTo(attr.left, attr.top + attr.height * 0.5 - 10)
                .lineTo(attr.left + attr.width * 0.5 - 300, attr.top + attr.height * 0.5 - 10)
                .lineTo(attr.left + attr.width * 0.5 - 250, attr.top + attr.height * 0.2 - 10)
                .stroke()

                .beginPath()
                .moveTo(attr.left, attr.top + attr.height * 0.5 + 10)
                .lineTo(attr.left + attr.width * 0.5 - 300, attr.top + attr.height * 0.5 + 10)
                .lineTo(attr.left + attr.width * 0.5 - 250, attr.top + attr.height * 0.8 + 10)
                .stroke()

                .beginPath()
                .moveTo(attr.left + attr.width, attr.top + attr.height * 0.5 - 10)
                .lineTo(attr.left + attr.width * 0.5 + 300, attr.top + attr.height * 0.5 - 10)
                .lineTo(attr.left + attr.width * 0.5 + 250, attr.top + attr.height * 0.2 - 10)
                .stroke()

                .beginPath()
                .moveTo(attr.left + attr.width, attr.top + attr.height * 0.5 + 10)
                .lineTo(attr.left + attr.width * 0.5 + 300, attr.top + attr.height * 0.5 + 10)
                .lineTo(attr.left + attr.width * 0.5 + 250, attr.top + attr.height * 0.8 + 10)
                .stroke()

                .config({
                    textAlign: "center",
                    "font-size": attr.height * 0.4,
                    fillStyle: painter
                        .createLinearGradient(0, attr.top, 0, attr.top + attr.height)
                        .addColorStop(0, "white")
                        .addColorStop(0.2, "#bae0e8")
                        .addColorStop(0.5, "#9eebfb")
                        .value()
                })
                .fillText(attr._subTexts[0], attr.left + attr.width * 0.5, attr.top + attr.height * 0.5)

        }
    }
}]