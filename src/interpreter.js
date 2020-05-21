function interpreter(input) {
    if (typeof(input) != "object") {
        input = JSON.parse(input)
    }

    let output = '';
    let blocks = input.blocks

    for (let i = 0; i < blocks.length; i++) {
        switch (blocks[i].type) {
            case 'header':
                output += `<h${blocks[i].data.level}>${blocks[i].data.text}</h${blocks[i].data.level}>`
                break
            case 'paragraph':
                output += `<p>${blocks[i].data.text}</p>`
                break
        }
    }

    return output
}